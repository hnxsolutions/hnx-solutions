

// const { ActivityHandler } = require("botbuilder");

// class botActivityHandler extends ActivityHandler {
//   constructor() {
//     super();
//     this.onMembersAdded(async (context, next) => {
//       console.log("Added");
//       await context.sendActivity("Welcome to the bot!")
//       await next();
//     });

//     this.onMessage(async (context, next) => {
//       console.log("in on message");
//       await context.sendActivity(context.activity.text); //Echo Bot
//        //await context.sendActivity("Hello");
//     });
//   }
// }

// module.exports = botActivityHandler;
const { ActivityHandler } = require("botbuilder");
const {
  CHATBOT_QUESTION_BANK,
  CHATBOT_SERVICE_DECISION_TREE
} = require("./chatbot-question-bank");

class botActivityHandler extends ActivityHandler {
  constructor() {
    super();

    this.intents = CHATBOT_QUESTION_BANK.flatMap(
      (category) => category.intents
    );

    console.log(
      "Loaded",
      CHATBOT_QUESTION_BANK.length,
      "categories and",
      this.intents.length,
      "intents"
    );

    this.onMembersAdded(async (context, next) => {
      await context.sendActivity(
        "👋 Welcome to HNX Solutions!\n\nHow can I help you today?"
      );

      await next();
    });

    this.onMessage(async (context, next) => {
      try {
        const userMessage = context.activity.text
          .toLowerCase()
          .trim();

        console.log("User:", userMessage);

        let matchedIntent = null;
        let highestScore = 0;

        for (const intent of this.intents) {
          let score = 0;

          if (intent.keywords) {
            for (const keyword of intent.keywords) {
              if (
                userMessage.includes(
                  String(keyword).toLowerCase()
                )
              ) {
                score++;
              }
            }
          }

          if (score > highestScore) {
            highestScore = score;
            matchedIntent = intent;
          }
        }

        if (matchedIntent) {
          let response =
            matchedIntent.responseGoal ||
            "Thank you for contacting HNX Solutions.";

          if (
            matchedIntent.followUpQuestions &&
            Array.isArray(
              matchedIntent.followUpQuestions
            ) &&
            matchedIntent.followUpQuestions.length > 0
          ) {
            response +=
              "\n\nTo better understand your requirement:\n";

            response += matchedIntent.followUpQuestions
              .map(function (q) {
                return "• " + q;
              })
              .join("\n");
          }

          if (
            matchedIntent.quickReplies &&
            Array.isArray(
              matchedIntent.quickReplies
            ) &&
            matchedIntent.quickReplies.length > 0
          ) {
            response +=
              "\n\nAvailable Options:\n";

            response += matchedIntent.quickReplies
              .map(function (q) {
                return "• " + q;
              })
              .join("\n");
          }

          await context.sendActivity(response);
        } else {
          let fallback =
            "I couldn't identify the exact service.\n\n";

          fallback += "Popular Services:\n";

          if (
            CHATBOT_SERVICE_DECISION_TREE &&
            Array.isArray(
              CHATBOT_SERVICE_DECISION_TREE
            )
          ) {
            CHATBOT_SERVICE_DECISION_TREE.forEach(
              function (service) {
                if (service.recommend) {
                  fallback +=
                    "• " +
                    service.recommend +
                    "\n";
                }
              }
            );
          }

          await context.sendActivity(fallback);
        }

        await next();
      } catch (error) {
        console.error(
          "Bot Processing Error:",
          error
        );

        await context.sendActivity(
          "Something went wrong while processing your request."
        );
      }
    });
  }
}

module.exports = botActivityHandler;