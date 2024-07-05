import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    PageContainer,
    FormContainer,
    FormWrapper,
    FormField,
    Label,
    Input,
    Button,
    ContactListContainer
} from './styles';
import { updateField } from '../../features/form/formSlice';
import ContactList from '../contactList/ContactList';

const Form = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form);
    const [contacts, setContacts] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateField({ field: name, value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
        };
        setContacts([...contacts, newContact]);
        dispatch(updateField({ field: 'name', value: '' }));
        dispatch(updateField({ field: 'email', value: '' }));
        dispatch(updateField({ field: 'phone', value: '' }));
    };

    const handleUpdateContact = (index, updatedContact) => {
        const updatedContacts = contacts.map((contact, i) =>
            i === index ? updatedContact : contact
        );
        setContacts(updatedContacts);
    };

    const handleDeleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    return (
        <PageContainer>
            <FormContainer>
                <FormWrapper>
                    <form onSubmit={handleSubmit}>
                        <FormField>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormField>
                        <FormField>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                type="phone"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </FormField>
                        <Button type="submit">Submit</Button>
                    </form>
                </FormWrapper>
            </FormContainer>
            <ContactListContainer>
                <h2>Contact List</h2>
                <ContactList
                    contacts={contacts}
                    onUpdateContact={handleUpdateContact}
                    onDeleteContact={handleDeleteContact}
                />
            </ContactListContainer>
        </PageContainer>
    );
};

export default Form;
