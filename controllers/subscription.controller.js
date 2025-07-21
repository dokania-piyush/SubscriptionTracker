import {workflowClient} from '../config/upstash.js';
import Subscription from '../models/subscription.model.js';
export const createSubscription = async (req, res,next) =>{
    try {
        // Logic to create a subscription
        const subscription=await Subscription.create({
            ...req.body,
            user:req.user._id
     }); 
     await workflowClient.trigger({
        url:`${process.env.SERVER_URL}/api/v1/workflows/subscription/reminder`,
        body:{
            subscriptionId: subscription._id,
        },
        headers:{   
            'Content-Type': 'application/json',
        },
        retries:0,
     });
     res.status(201).json({ success: true, data: subscription });
}  
catch (error) {
        next(error);
    }

}
export const getSubscriptionDetails = async (req, res,next) => {
    try {
        // Logic to get subscription details
        const subscription = await Subscription.findById(req.params.id);
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.status(200).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
}