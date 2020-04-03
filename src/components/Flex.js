import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: ${props => props.direction ? props.direction : 'row' };
    flex: ${props => props.fill ? '1 1 auto;' : 'inherit' }
`;

export default Flex;
