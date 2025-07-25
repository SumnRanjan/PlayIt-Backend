import mongoose , { Schema } from "mongoose"

const subscriptionSchema = new Schema({
    subscriber : {
        type : Schema.Types.ObjectId, // the user who is subscribing to a channel
        ref : "User"
    },
    channel : {
        type : Schema.Types.ObjectId, // the channel owner (who is being subscribed to).
        ref : "User"
    }
} , {timestamps : true})

export const Subscription = mongoose.model("Subscription" , subscriptionSchema)