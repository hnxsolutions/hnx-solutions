/* eslint-disable @typescript-eslint/no-require-imports */

const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const {
  CloudAdapter,
  ConfigurationServiceClientCredentialFactory,
  createBotFrameworkAuthenticationFromConfiguration,
} = require("botbuilder");
const BotActivityHandler = require("./botActivityHandler");

const app = express();
const allowedOrigins = new Set([
  "https://hnxsolutions.com",
  "https://www.hnxsolutions.com",
  "http://localhost:3000",
]);

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && allowedOrigins.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(403);
  }

  return next();
});

app.use(express.json());

//  authentication for CloudAdapter
const credentialsFactory = new ConfigurationServiceClientCredentialFactory({
  MicrosoftAppId: process.env.MicrosoftAppId || "",
  MicrosoftAppPassword: process.env.MicrosoftAppPassword || "",
});
const botFrameworkAuthentication =
  createBotFrameworkAuthenticationFromConfiguration(null, credentialsFactory);
const adapter = new CloudAdapter(botFrameworkAuthentication);

// error handling for the adapter
adapter.onTurnError = async (context, error) => {
  console.error(`[onTurnError] Error: ${error}`);
  await context.sendActivity("Oops! Something went wrong.");
};

const mainBot = new BotActivityHandler();
app.get('/',(req,res)=>{
  res.send("hi")
})

app.post("/api/messages", async (req, res) => {
  try {
    if (process.env.NODE_ENV === "development") {
      console.log("Incoming bot request received");
    }

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
