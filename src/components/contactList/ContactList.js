import React, { useState } from 'react';
import { ContactCardWrapper, ContactCardContent, EditButton, EditInput, DeleteButton } from './styles';

const ContactList = ({ contacts, onUpdateContact, onDeleteContact }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editContact, setEditContact] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditContact(contacts[index]);
    };

    const handleSave = (index) => {
        onUpdateContact(index, editContact);
        setEditIndex(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditContact({
            ...editContact,
            [name]: value
        });
    };

    return (
        <div>
            {contacts.map((contact, index) => (
                <ContactCardWrapper key={index}>
                    {editIndex === index ? (
                        <ContactCardContent>
                            <EditInput
                                type="text"
                                name="name"
                                value={editContact.name}
                                onChange={handleInputChange}
                            />
                            <EditInput
                                type="text"
                                name="email"
                                value={editContact.email}
                                onChange={handleInputChange}
                            />
                            <EditInput
                                type="text"
                                name="phone"
                                value={editContact.phone}
                                onChange={handleInputChange}
                            />
                            <EditButton onClick={() => handleSave(index)}>Save</EditButton>
                            <DeleteButton onClick={() => onDeleteContact(index)}>Delete</DeleteButton>
                        </ContactCardContent>
                    ) : (
                        <ContactCardContent>
                            <h3>{contact.name}</h3>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                            <EditButton onClick={() => handleEdit(index)}>Edit</EditButton>
                            <DeleteButton onClick={() => onDeleteContact(index)}>Delete</DeleteButton>
                        </ContactCardContent>
                    )}
                </ContactCardWrapper>
            ))}
        </div>
    );
};

export default ContactList;
