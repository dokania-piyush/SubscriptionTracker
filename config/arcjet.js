import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_API_KEY} from './env.js';
const aj = arcjet({
  key:ARCJET_API_KEY,
  characteristics: ["ip.src"], 
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", 
      allow: [
        "CATEGORY:SEARCH_ENGINE", 
      ],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: "LIVE",
      refillRate: 5, 
      interval: "10s", 
      capacity: 5, 
    }),
  ],
});


export default aj;