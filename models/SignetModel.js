import mongoose from "mongoose";
import { Schema } from "mongoose";

const SignetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    wielder: {
        type: String | undefined
    },
    enhancedDesc: {
        type: String
    }
}, {versionKey: false})

const SignetModel = mongoose.model("signets", SignetSchema)

export default SignetModel