/**
 * pricing.js - LLM API Pricing Data
 * Prices are per 1,000,000 tokens (USD).
 * Last updated: March 2026. Update manually when pricing changes.
 * Sources: platform.openai.com/pricing, anthropic.com/pricing, ai.google.dev/pricing
 */

const MODELS = [
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    provider: "Anthropic",
    providerColor: "#cc785c",
    inputPer1M: 3.00,
    outputPer1M: 15.00,
    contextWindow: "200K",
    note: "Best overall for most tasks"
  },
  {
    id: "claude-opus-4",
    name: "Claude Opus 4",
    provider: "Anthropic",
    providerColor: "#cc785c",
    inputPer1M: 15.00,
    outputPer1M: 75.00,
    contextWindow: "200K",
    note: "Highest capability, highest cost"
  },
  {
    id: "claude-haiku-35",
    name: "Claude 3.5 Haiku",
    provider: "Anthropic",
    providerColor: "#cc785c",
    inputPer1M: 0.80,
    outputPer1M: 4.00,
    contextWindow: "200K",
    note: "Fast and cheap for simple tasks"
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    providerColor: "#10a37f",
    inputPer1M: 2.50,
    outputPer1M: 10.00,
    contextWindow: "128K",
    note: "OpenAI's flagship multimodal model"
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o mini",
    provider: "OpenAI",
    providerColor: "#10a37f",
    inputPer1M: 0.15,
    outputPer1M: 0.60,
    contextWindow: "128K",
    note: "Budget option, surprisingly capable"
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    provider: "OpenAI",
    providerColor: "#10a37f",
    inputPer1M: 10.00,
    outputPer1M: 30.00,
    contextWindow: "128K",
    note: "Older flagship, mostly superseded by 4o"
  },
  {
    id: "gemini-15-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    providerColor: "#4285f4",
    inputPer1M: 1.25,
    outputPer1M: 5.00,
    contextWindow: "2M",
    note: "Massive context window, good for long docs"
  },
  {
    id: "gemini-20-flash",
    name: "Gemini 2.0 Flash",
    provider: "Google",
    providerColor: "#4285f4",
    inputPer1M: 0.10,
    outputPer1M: 0.40,
    contextWindow: "1M",
    note: "Incredibly cheap, large context"
  },
  {
    id: "gemini-15-flash",
    name: "Gemini 1.5 Flash",
    provider: "Google",
    providerColor: "#4285f4",
    inputPer1M: 0.075,
    outputPer1M: 0.30,
    contextWindow: "1M",
    note: "Previous budget Gemini option"
  }
];

/**
 * Calculate cost for a given token count.
 * @param {number} tokens - number of tokens
 * @param {number} pricePerMillion - price in USD per 1M tokens
 * @returns {number} cost in USD
 */
function calcCost(tokens, pricePerMillion) {
  return (tokens / 1_000_000) * pricePerMillion;
}

/**
 * Format a USD cost value for display.
 * Shows more decimal places for tiny amounts.
 * @param {number} usd
 * @returns {string}
 */
function formatCost(usd) {
  if (usd === 0) return "$0.00";
  if (usd < 0.0001) return `$${usd.toExponential(2)}`;
  if (usd < 0.01) return `$${usd.toFixed(5)}`;
  if (usd < 1) return `$${usd.toFixed(4)}`;
  return `$${usd.toFixed(3)}`;
}
