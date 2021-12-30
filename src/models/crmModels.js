import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ContactSchema = new Schema({
firstName: {
    type: String,
    required: 'fname is required',
    max: 100,
    min: 2
},
lastName: {
    type: String,
    required: 'lastName is required',
    max: 100,
    min: 2
},
phone: {
    type: String,
    required: 'phone is required',
},
email: {
    type: String,
    required: 'email is required',
},
date: {
    type: Date,
    default: Date.now
}
});