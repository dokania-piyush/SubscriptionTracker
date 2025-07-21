import {Router} from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription } from '../controllers/subscription.controller.js';
import { getSubscriptionDetails } from '../controllers/subscription.controller.js';
const subscriptionRouter = Router();
subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'GET SUBSCRIPTION DETAILS'});
})
subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'GET ALL SUBSCRIPTION'});
})
subscriptionRouter.post('/',authorize,createSubscription);
subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:'UPDATE SUBSCRIPTION'});
})
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'DELETE SUBSCRIPTION'});
})
subscriptionRouter.get('/user/:id',authorize,getSubscriptionDetails);
subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:'CANCEL SUBSCRIPTION'});
})
subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:'GET UPCOMING RENEWALS'});
})
export default subscriptionRouter;