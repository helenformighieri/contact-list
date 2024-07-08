import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', Arial, sans-serif; /* Exemplo de fonte global */
    }

    a {
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }
`;

export const PageContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
    margin: 0;
`;

export const FormContainer = styled.div`
    margin-right: 40px;
    padding: 10px;
    border-radius: 8px;
    width: 40%;
`;

export const FormWrapper = styled.div`
    background-color: #D9D9D9;
    width: 380px;
    height: 315px;
    margin: 15%;
    padding: 20px;
    border-radius: 6px;

    form {
        width: 90%;
    }
`;

export const FormField = styled.div`
    width: 100%;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #614E9B;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
`;

export const Button = styled.button`
    width: 50%;
    margin-top: 10%;
    margin-left: 30%;
    padding: 10px;
    background-color: #614E9B;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #4D3C6A;
    }
`;

export const ContactListContainer = styled.div`
    background-color: #D9D9D9;
    margin: 0;
    padding: 40px;
    width: 60%;
    overflow-y: auto;
    
    h2 {
        font-size: 47px;
        font-weight: bold;
        color: #614E9B;
        margin-top: 0;
    }
`

export const ContactCard = styled.div`
    width: 80%; 
    height: auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
`;
