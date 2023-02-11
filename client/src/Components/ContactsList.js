import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getContacts} from '../JS/Actions/contact';
import ContactCard from './ContactCard';
import './ContactsList.css';


const ContactsList = () => {
    const contactList = useSelector((state) => state.contactReducer.contactList);
    const load = useSelector((state) => state.contactReducer.load);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

  return (
    <div className='list'>
     {load ? <h2>Loading...</h2> : contactList.map((el) => <ContactCard contact= {el} key= {el._id}/>)}
    </div>
    )
};

export default ContactsList;
