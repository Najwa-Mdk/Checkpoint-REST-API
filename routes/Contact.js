// require express
const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();


/// Routes 

// test route
router.get('/test' , (req,res) => {
    res.send('Hello world');
});

// add contact
router.post('/add', async(req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new Contact ({name, email, phone});
        await newContact.save();
        res.status(200).send({ msg: "contact added successfully ...", newContact});
        
    } catch (error) {
        res.status(400).send({ msg: "can not add contact !!!", error});
        
    }
});

// get all contact
router.get('/all', async(req, res) => {
try {
    const contactList = await Contact.find();
    res.status(200).send({ msg: "this is the list of all contact...", contactList});
} catch (error) {
    res.status(400).send({ msg: "can not get all contact !!!", error});  
}
});

// get one contact
router.get('/:id', async(req, res) => {
try {
    const contactToGet = await Contact.findOne({_id: req.params.id});
    res.status(200).send({ msg: "I get the contact...", contactToGet});
} catch (error) {
    res.status(400).send({ msg: "can not get contact with this id !!!", error}); 
}
});

// delete contact
router.delete('/:_id', async(req, res) => {
try {
    const {_id} = req.params;
    await Contact.findOneAndDelete({_id});
    res.status(200).send({ msg: "Contact deleted..."})
} catch (error) {
    res.status(400).send({ msg: "can not delete contact with this id !!!", error});  
}
});

// edit contact
router.put('/:_id', async(req, res) => {
try {
    const {_id} = req.params;
    const result = await Contact.updateOne({_id}, {$set: {...req.body}});
    res.status(200).send({ msg: "Contact updated..."})
} catch (error) {
    res.status(400).send({ msg: "can not update contact with this id !!!", error}); 
}
});


module.exports = router;