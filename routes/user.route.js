import {Router} from 'express';
import authorize from '../middleware/auth.middleware.js';
import { getUser,getUsers } from '../controllers/user.controller.js';
const userRouter = Router();
userRouter.get('/',getUsers);
userRouter.get('/:id',authorize,getUser);
userRouter.post('/',(req,res)=>{
    res.send({title:'CREATE USER'});
})
userRouter.put('/:id',(req,res)=>{
    res.send({title:'UPDATE USER'});
})
userRouter.delete('/:id',(req,res)=>{
    res.send({title:'DELETE USER'});
})
export default userRouter;
