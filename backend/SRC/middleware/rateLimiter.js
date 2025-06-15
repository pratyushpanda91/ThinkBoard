import rateLimit from "../config/upstash.js";
// This is a rate limiter middleware function that will be used to limit the number of requests to the server.

const rateLimiter = async (req, res, next) => {
  //per user rate limiting
  try {
    const { success } = await rateLimit.limit("my-rate-limit");
    if (!success) {
      // If the request is not allowed, throw an error
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit error:", error);
    next(error);
  }
};

export default rateLimiter;
// This is a placeholder for the rate limiter middleware function.
