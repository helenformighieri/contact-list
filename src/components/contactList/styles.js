import styled from 'styled-components';

export const ContactCard = styled.div`
    width: 80%; 
    height: auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
`

export const ContactListContainer = styled.div`
    background-color: #D9D9D9;
    margin: 0;
    padding: 40px;
    width: 50%;
    overflow-y: auto;

    h1 {
        font-size: 50px;
    }
`

export const ContactCardWrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
`

export const ContactCardContent = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;

    h3{
        margin-top: 0;
    }

    span{
        font-weight: bold;
    }
`

export const EditButton = styled.button`
    background-color: #614e9b;
    color: white;
    border: none;
    padding: 5px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
`

export const EditInput = styled.input`
    width: 95%;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 5px;
`
export const DeleteButton = styled.button`
    color: white;
    background-color: red;
    border: none;
    padding: 5px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
`;
