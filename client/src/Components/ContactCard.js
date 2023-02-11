import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../JS/Actions/contact';
import {useNavigate} from 'react-router-dom';
import './ContactCard.css';

const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
       <Card className = 'card' >
      <Card.Img className = 'img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLE2R35SV62Enw03QHS5AY-LUr6HOhmHvrA&usqp=CAU" />
      <Card.Body className='body'>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Button className = 'delete' variant="primary" onClick={() => dispatch(deleteContact(contact._id))}>Delete</Button>
        <Button className = 'edit' variant="primary" onClick={() => navigate (`/edit/${contact._id}`)}>Edit</Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default ContactCard
