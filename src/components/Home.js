import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Home = (props) => {
    return (
        <div>
            <Container>
                {!props.user && <Redirect to='/' />}
                <Content>
                    <LayOut>
                        <LeftSide />
                        <Main />
                        <RightSide />
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
    grid-template-areas: "left main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;



const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) =>({});


export default connect(mapStateToProps, mapDispatchToProps)(Home);