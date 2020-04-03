import React from 'react';

const CardTitle = ({ title }) => {
    return (
        <label>{title || '---'}</label>
    );
};

export default CardTitle;
