import styled from 'styled-components';

const Login = (props) =>{
    return(
        <Container>
            <Nav>
                <a href="/">
                    <img src = "/images/login-logo.svg" alt = ""/>
                </a>
                <div>
                    <Join>Join now</Join>
                    <Sign>Sign in</Sign>
                </div>
            </Nav>

            <Body>
                <Title>
                    <h1>
                        Welcome to your professional community
                    </h1>

                    <img src="/images/login-hero.svg" alt=""/>
                </Title>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt=""/>
                        Sign in with google
                    </Google>
                </Form>
            </Body>
        </Container>
    )
    
}

const Container = styled.div`
    padding: 0px;
    
`;

const Nav = styled.nav`
    max-width: 1128px;
    padding: 7px 0 16px;
    display: flex;
    align-items: center;
    margin: auto;
    position: relative;
    flex-wrap: no-wrap;
    justify-content: space-between;
    & > a{
        width: 135px;
         @media (max-width: 768px){
             padding: 0 5px;
             margin-top: -10px;
             width: 90px;
             height: 24px;
         }
    }

`; 

const Join = styled.a`
    font-size: 16px;
    padding: 12px 14px;
    text-decoration: none;
    cursor: pointer;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    font-weight: 600;
    &:hover{
        background-color: rgba(0,0,0,0.06);
        border-radius: 5px;
        color: rgba(0,0,0,0.9); 
        
    }
    @media (max-width: 768px){
            padding: 8px 10px; 
        }
   

`;

const Sign = styled.a`
    font-size: 16px;
    padding: 12px 18px;
    cursor: pointer;
    margin-right: 12px;
    box-shadow: inset 0 0 0 1px #0a66c2; 
    border-radius: 20px;
    color: #0a66c2;
    font-weight: 600;
    transition-duration: 200ms;
    text-align: center;
    &:hover{
        background-color: rgba(112,181,249,0.16); 
        box-shadow: inset 0 0 0 2px #0a66c2;
    }
    @media (max-width: 768px){
            padding: 8px 10px; 
        }
`;


const Body = styled.section`
    margin: auto;
    align-content: start;
    max-width: 1128px;
    min-height: 700px;
    display: flex;
    padding-bottom:138px;
    padding-top: 30px;
    padding: 42px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%auto;
    align-items: center;

    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;    
    }

`;

const Title = styled.div`
    width: 100%;
    h1{
        color: #2977c9;
        padding-bottom: 0px;
        width: 55%;
        font-size: 56px;
        font-weight: 200;
        line-height: 68px;
        @media (max-width: 768px){
            text-align: center;
            width: 100%;
            font-size: 22px;
            line-height: 2;   
        }
    }
    img{
        width: 700px;
        height: 670px;
        bottom: -2px;
        right: -150px;
        position: absolute;
        @media (max-width: 768px){
            top: 230px;
            width: inherit;
            position: initial;
            height: initial; 
        }

    }
`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 768px){
        margin-top: 20px;
    }
`;
const Google = styled.button`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 40px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 20px;
    border-radius: 18px;
    vertical-align: middle;
    transition-duration: 200ms;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0 / 60%), inset 0 0 0 2px rgba(0, 0, 0 / 0%) inset 0 0 0 1px rgba(0, 0, 0 / 0);
    cursor: pointer;
    &:hover {
        background-color: rgba(207, 207, 207, 0.35);
        color: rgba(0, 0, 0, 0.85);
    }
`;


export default Login;