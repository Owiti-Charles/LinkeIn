import React from 'react';
import styled from 'styled-components';

function RightSide(props) {
    return (
        <Container>
            Add to your feed
        </Container>
    );
}
const Container = styled.div`
    grid-area: right;
`;

export default RightSide;