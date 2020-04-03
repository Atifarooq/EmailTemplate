import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';
import LinkNav from '../LinkNav';
import CardTitle from './CardTitle';

const CardBody = ({ className, id, title }) => {
    return (
        <Flex direction="column" className={className}>
            <CardTitle title={title} />
            <LinkNav to={`/template/${id}`}>Edit</LinkNav>
        </Flex>
    );
};

const Card = styled(CardBody)`
    width: calc(82% / 4);
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #F1F1F1;
    background-color: #F9F9F9;
`;

export default Card;
