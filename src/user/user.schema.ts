import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    firstName:{
        required: true,
        type: String},
    lastName: {
        required: true,
        type: String},
    age: {
        required: true,
        type: String}
},{
    timestamps: true
})

export default model('User', UserSchema)