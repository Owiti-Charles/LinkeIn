import { connect } from 'react-redux';
import styled from 'styled-components';
import  { signOutAPI } from '../actions'

const Navbar = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavItems>
                        <NavList className="active">
                            <a>
                                <img src="images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="images/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList className="messaging">
                            <a>
                                <img src="images/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="images/nav-notifications.svg" alt="" />
                                <span>Notification</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                { props.user && props.user.photoURL ? 
                                        <img src={props.user.photoURL} alt="" />
                                    : <img src="images/user.svg" alt="" />
                                }
                                
                                <span>
                                    Me
                                    <img src="images/down-icon.svg" alt="" />
                                </span>

                            </a>
                            <SignOut onClick = {() => props.signOut()}>
                                <a>Sign Out</a> 
                            </SignOut>
                        </User>
                        <Work className= "work">
                            <a>
                                <img src="images/nav-work.svg" alt="" />
                                <span>
                                    Work
                                    <img src="images/down-icon.svg" alt="" />
                                </span>

                            </a>
                        </Work>
                    </NavItems>
                </Nav>
            </Content>
        </Container>
    )
}
const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    top: 0;
    padding: 0px;
    padding-top: 8px;
    position: fixed;
    width: 100vw;
    z-index: 999;
    @media (max-width: 768px){
        padding-bottom: 8px;
        padding-left: 10px;
        .messaging{
            top: 0;
            right: 0;
        }
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 1128px;
    min-height: 100%;
    margin: 0 auto;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    flex-grow: 1;
    opacity: 1;
    position: relative;
    & > div{ 
        max-width: 280px;
        input{
            width: 220px;
            border: none;
            padding: 0 8px 0 40px;
            box-shadow: none;
            background-color: #eef3f8;
            color: rgba(0, 0, 0, 0.85);
            border-radius: 5px;
            line-height: 2;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;

        }
    }

`;

const SearchIcon = styled.span`
    position: absolute;
    width: 40px;
    left:2px;
    z-index: 1;
    top: 10px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.15s;
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width:768px){
        bottom: 0;
        left: 0;
        position: fixed;
        padding-top: 8px;
        width: 100%;
        background-color: white;
        z-index: 999;
        .work{
            display:none;
        }
    }
`;

const NavItems = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;

    .active{
        span:after{
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            border-bottom: 2px solid var(--white, #fff);
            transform: scaleX(1);
            width: 100%;
            border-color: rgba(0,0,0, 0.9);
        }
    }

`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        text-decoration: none;
        position: relative;
        min-height: 42px;
        min-width: 80px;
        padding-bottom: 8px;
        span{
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }
        @media (max-width: 768px){
            min-width: 70px;
        }

    }
    &:hover, &:active{
        a{
            span{
                color: rgba(0,0,0,0.9)
            }
        }
    }
`;

const SignOut = styled.span`
    position: absolute;
    background: white;
    top: 45px;
    border-radius: 5px;
    width: 100px;
    height:40px;
    transition-duration: 200ms;
    font-size: 16px;
    display: none;
    text-align: center;

`;

const User = styled(NavList)`
    a > img {
        width: 24px;
        border-radius: 50%;
        span{
            display: flex;
            align-items: center;
        }
    }
    &:hover{
        ${SignOut}{
            align-items:center;
            display: flex;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);

`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);