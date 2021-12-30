import mongoose from 'mongoose';
//
import {ContactSchema} from '../models/crmModels';
//Contact constructor with mongoose and execute model fn and pass the contacts 
//as the main object to create a new Contact in db and leverage the contact schema
//as the model for new Contact
const Contact = mongoose.model('Contact', ContactSchema);
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContactwithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}