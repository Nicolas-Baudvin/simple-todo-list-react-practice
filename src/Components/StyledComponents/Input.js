import styled from 'styled-components';

const Input = styled.input`
    border: none;
    color: #c9cbe2;
    background-color: #25273c;
    font-size: 24px;
    padding: .3em;
    font-family: 'Josefin Sans', sans-serif;
    caret-color: hsl(236, 33%, 92%);

    &:focus {
        border: none;
        outline: none;
    }
`;

export default Input;