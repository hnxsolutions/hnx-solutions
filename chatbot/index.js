/* eslint-disable @typescript-eslint/no-require-imports */

const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const {
  CloudAdapter,
  ConfigurationServiceClientCredentialFactory,
  createBotFrameworkAuthenticationFromConfiguration,
  MemoryStorage,
  ConversationState,
} = require("botbuilder");
const BotActivityHandler = require("./botActivityHandler");

const app = express();
app.use(express.json());

//  authentication for CloudAdapter
const credentialsFactory = new ConfigurationServiceClientCredentialFactory({
  MicrosoftAppId:
    process.env.MicrosoftAppId || "4f0b36a7-98a2-4689-9340-d8ee574aa8dd",
  MicrosoftAppPassword:
    process.env.MicrosoftAppPassword ||
    "Cxp8Q~BrxlwP7N26chS3xHMndJTqA0~n8nHKgdxw",
});
const botFrameworkAuthentication =
  createBotFrameworkAuthenticationFromConfiguration(null, credentialsFactory);
const adapter = new CloudAdapter(botFrameworkAuthentication);

// error handling for the adapter
adapter.onTurnError = async (context, error) => {
  console.error(`[onTurnError] Error: ${error}`);
  await context.sendActivity("Oops! Something went wrong.");
};

// Use in-memory storage and conversation state
const memoryStorage = new MemoryStorage();
const conversationState = new ConversationState(memoryStorage);
const mainBot = new BotActivityHandler();
app.get('/',(req,res)=>{
  res.send("hi")
})

app.post("/api/messages", async (req, res) => {
  try {
    console.log("Incoming request:", req.body);
    await adapter.process(req, res, async (context) => {
      await mainBot.run(context);
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3978;
app.listen(PORT, () => {
  console.log(`Bot is running on http://localhost:${PORT}/api/messages`);
});
