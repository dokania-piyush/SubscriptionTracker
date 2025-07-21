
import express from 'express';
import cookieParser from 'cookie-parser';
import {PORT} from './config/env.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';   
import userRouter from './routes/user.route.js';
import connectDB from './Database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import arcjetMiddleware from './middleware/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js'; // Import the workflow router

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(arcjetMiddleware);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter); // Add the workflow router
app.use(errorMiddleware);


app.get('/',(req,res)=>{
    res.send({body:'Welcome to subscription tracker API'});
});
const port=PORT||3000;
app.listen(port,async() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();
});
export default app;
