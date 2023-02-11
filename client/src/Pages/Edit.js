import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContact, getContact } from "../JS/Actions/contact";
import './Edit.css';

const Edit = () => {
	const [newContact, setNewContact] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const dispatch = useDispatch();
	const contactToGet = useSelector(
		(state) => state.contactReducer.contactToGet
	);
	const match = useMatch("/edit/:id");
	const navigate = useNavigate();
	const HandleChange = (e) => {
		setNewContact({ ...newContact, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		dispatch(getContact(match.params.id));
	});
	const handleEdit = () => {
		dispatch(editContact(match.params.id, newContact));
		navigate(-1);
	};

	return (
		<div className='form'>
			<Form.Label className="name">Name</Form.Label>
			<Form.Control 
				type='text'
				placeholder={`${contactToGet.name}`}
				name='name'
				value={newContact.name}
				onChange={HandleChange}
			/>
			<Form.Label className="email">Email address</Form.Label>
			<Form.Control 
				type='email'
				placeholder={`${contactToGet.email}`}
				name='email'
				value={newContact.email}
				onChange={HandleChange}
			/>
			<Form.Label className="phone">Phone</Form.Label>
			<Form.Control className="input"
				type='text'
				placeholder={`${contactToGet.phone}`}
				name='phone'
				value={newContact.phone}
				onChange={HandleChange}
			/>
			<Link to='/contacts'>
				<Button className = 'button' variant='primary' type='submit' onClick={handleEdit}>
					Edit
				</Button>
			</Link>
		</div>
	);
};

export default Edit;
