import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import {addContact} from '../JS/Actions/contact';
import {Link} from 'react-router-dom';
import './Add.css';

const Add = () => {
  const [newContact, setNewContact] = useState({
    name:"",
    email:"",
    phone:"",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewContact({...newContact, [e.target.name] : e.target.value})
  };
  const add = () => {
    dispatch(addContact(newContact));
  };
  return (
    <div className='form'>
      <Form.Label className='name'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name= 'name' value= {newContact.name} onChange= {handleChange}/>
        <Form.Label className='email'>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name= 'email' value= {newContact.email} onChange= {handleChange}/>
        <Form.Label className='phone'>Phone</Form.Label>
        <Form.Control className ='input' type="text" placeholder="Enter phone" name= 'phone' value= {newContact.phone} onChange= {handleChange}/>
        <Link to= '/contacts'>
        <Button className='button' variant="primary" type="submit" onClick={() => add()}>
        Add
      </Button>
      </Link>
    </div>
  )
}

export default Add
