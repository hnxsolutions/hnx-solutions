

const { ActivityHandler } = require("botbuilder");

class botActivityHandler extends ActivityHandler {
  constructor() {
    super();
    this.onMembersAdded(async (context, next) => {
      console.log("Added");
      await context.sendActivity("Welcome to the bot!")
      await next();
    });

    this.onMessage(async (context, next) => {
      console.log("in on message");
      await context.sendActivity(context.activity.text); //Echo Bot
       //await context.sendActivity("Hello");
    });
  }
}

module.exports = botActivityHandler;

