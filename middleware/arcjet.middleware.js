import aj from "../config/arcjet.js";

const arcjetMiddleware=async(req,res,next)=>{
    console.log(`\n--- [Arcjet] Checking request: ${req.method} ${req.url} ---`);
    try{
        const decision=await aj.protect(req,{requested:1});
        console.log("[Arcjet] Decision:", JSON.stringify(decision, null, 2));
        if(decision.isDenied())
            {
            if(decision.reason.isRateLimit())
                {
            return res.status(429).json({
                message:"Access denied",
                error:"Your request has been blocked by Arcjet"
            });
        }
        if(decision.reason.isBot()){
            return res.status(403).json({
                message:"Access denied",
                error:"Bots are not allowed"
            });
        }
        return res.status(403).json({
            message:"Access denied",
            error:"Forbidden"
        });
    }
    next();
}catch(error){
        console.log(`Arcjet protection failed: ${error.message}`);
        next(error);    
    }
}
export default arcjetMiddleware;