
import mongoose,{Schema} from "mongoose";

const userSubscription = new Schema({
    type:{
         type: mongoose.Schema.Types.ObjectId, // one who is subscribing
         ref: "User"
    },
    channel:{
         type: mongoose.Schema.Types.ObjectId, // one to whome 'subscriber' is subscribing
         ref: "User"
    }
},{ timestamps:true})

export const Subscription= mongoose.model('Subscription',userSubscription)