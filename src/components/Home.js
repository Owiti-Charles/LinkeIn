import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import Navbar from './Navbar';
import RightSide from './RightSide';

const Home = (props) => {
    return (
        <div>
            <Container>
                <Content>
                    <LayOut>
                        <LeftSide/>
                        <Main/>
                        <RightSide/>
                    </LayOut>
                </Content>
            </Container>
        </div>
    )
}

const Container = styled.div`
    padding-top: 68px;
    max-width: 100%;

`;

const Content = styled.div`

    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;

`;

const LayOut = styled.div`
    display: grid;
    grid-template-areas: "left main rigt";
    grid-template-columns: minmax(0, 7fr) minmax(0, 12fr) minmax(300px, 7fr);
    grid-template-rows: auto;
    margin: 25px 0;
    column-gap: 25px;
    row-gap: 25px;
    @media (max-width: 768px){
        display: flex;
        padding: 0 5px;
        flex-direction: column;

    }


`;

export default Home;