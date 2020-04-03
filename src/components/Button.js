import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    color: #ffffff;
    font-size: 1rem;
    background-color: #000;
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    cursor: pointer;
    margin-right: 0.25rem;
    transition: all ease 0.25s;
    &:hover {
        box-shadow: 2px 2px 5px #000;
        background-color: #61DAFB;
        border-color: #61DAFB;
        color: #000;
    }
`;

export default Button;
