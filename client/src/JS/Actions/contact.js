// IMORTATION
import axios from "axios";
import {
	FAIL_CONTACT,
	LOAD_CONTACT,
	ONE_CONTACT,
	SUCC_CONTACT,
} from "../ActionTypes/contact";

// get all contact
export const getContacts = () => async (dispatch) => {
	dispatch({ type: LOAD_CONTACT });
	try {
		let result = await axios.get("/api/contact/all");
		dispatch({ type: SUCC_CONTACT, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_CONTACT, payload: error.response });
	}
};

// add contact
export const addContact = (newContact) => async (dispatch) => {
	try {
		await axios.post("/api/contact/add", newContact);
		dispatch(getContacts());
	} catch (error) {
		dispatch({ type: FAIL_CONTACT, payload: error.response });
	}
};

// delete contact
export const deleteContact = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/contact/${id}`);
		dispatch(getContacts());
	} catch (error) {
		dispatch({ type: FAIL_CONTACT, payload: error.response });
	}
};

// edit contact
export const editContact = (id, newContact) => async (dispatch) => {
	try {
		await axios.put(`/api/contact/${id}`, newContact);
		dispatch(getContacts());
	} catch (error) {
		dispatch({ type: FAIL_CONTACT, payload: error.response });
	}
};

// get one contact
export const getContact = (id) => async (dispatch) => {
	dispatch({ type: LOAD_CONTACT });
	try {
		let result = await axios.get(`/api/contact/${id}`);
		dispatch({ type: ONE_CONTACT, payload: result.data });
	} catch (error) {
		dispatch({ type: FAIL_CONTACT, payload: error.response });
	}
};
