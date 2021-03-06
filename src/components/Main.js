import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import { connect } from 'react-redux';
import { getPostsAPI } from '../actions';
import ReactPlayer from 'react-player';



function Main(props) {
    const [openModal, setopenModal] = useState("close");

    useEffect(() => {
        props.getPosts();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        switch (openModal) {
            case "open":
                setopenModal("close");
                break;
            case "close":
                setopenModal("open");
                break;
            default:
                setopenModal("close");
                break;
        }
    };

    return (
        <>{
            props.posts.length === 0 ?
                <p>There are no posts yet!</p>
                :

                <Container>
                    <ShareCard>
                        <div>
                            {
                                props.user && props.user.photoURL ?
                                    <img src={props.user.photoURL} alt="" />
                                    :
                                    <img src="/images/user.svg" alt="" />
                            }

                            <button onClick={handleClick}
                                disabled={props.loading ? true : false}> Start a post</button>
                        </div>
                        <div>
                            <button className="photo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                </svg>
                                <span>Photo</span>
                            </button>
                            <button className="video">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                </svg>
                                <span>Video</span>
                            </button>
                            <button className="event">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                    <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                                </svg>
                                <span>Event</span>
                            </button>
                            <button className="article">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                    <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                                </svg>
                                <span>Write Article</span>
                            </button>
                        </div>
                    </ShareCard>

                    <Content>
                        {
                            props.loading && <img src="/images/Spin-1s-200px.svg" alt="" />
                        }

                        {props.posts.length > 0 &&
                            props.posts.map((post, key) => (

                                <PostArticle key={key}>
                                    <SharedBy>
                                        <a>
                                            <img src={post.actor.image} alt="" />
                                            <div>
                                                <span>
                                                    {post.actor.title}
                                                </span>
                                                <span>
                                                    {post.actor.description}
                                                </span>
                                                <span>
                                                {post.actor.date.toDate().toLocaleString()}
                                                </span>
                                            </div>
                                        </a>
                                        <button>
                                            <img src="/images/doted.svg" alt="" />
                                        </button>

                                    </SharedBy>
                                    <Description>
                                        {post.description}
                                    </Description>
                                    <SharedPost>
                                        <a>
                                        {   
                                            !post.uploadImage && post.video ?
                                            <ReactPlayer width={'100%'} url={post.video} />
                                            :
                                            (
                                                post.uploadImage &&
                                                <img src={post.uploadImage} />
                                            )
                                        }
                                        </a>
                                    </SharedPost>

                                    <LikeCount>
                                        <li>
                                            <button>
                                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                                                <span>15</span>
                                            </button>
                                        </li>
                                        <li>
                                            <a>
                                                <span>{post.comments} comments</span>
                                            </a>
                                        </li>
                                    </LikeCount>
                                    <SocialActions>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                                            </svg>
                                            <span>Like</span>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                                            </svg>
                                            <span>Comments</span>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                                <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                                            </svg>
                                            <span>Share</span>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                                            </svg>
                                            <span>Send</span>
                                        </button>
                                    </SocialActions>
                                </PostArticle>
                            ))
                        }
                    </Content>
                    <PostModal openModal={openModal} handleClick={handleClick} />
                </Container>
        }
        </>
    );
}

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    margin-bottom: 8px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    border: none;

`;

const ShareCard = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.6); 
    font-weight: bold;
    background: white;
    margin: 0 0 8px;
    div{
        .photo{
            svg{
                color: #ADDFFF;
            }
        }
        .video{
            svg{
                color: #54C571;
            }
        }
        .event{
            svg{
                color: orange;
            }
        }
        .article{
            svg{
                color:  #E2A76F;
            }
        }
        button{
            display: flex;
            flex-direction: row;
            align-items: center;
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-weight: bold;
            font-size: 14px;
            line-height: 1.5px;
            min-height: 48px;
            background: transparent;
            border: none;
            span{
                margin-left: 4px;
            }
            
        }
        &:first-child{
            display: flex;
            align-items: center; 
            padding: 8px 16px 0px 16px;
            img, svg{
                width: 48px;
                height: 48px;
                border-radius: 50%;
                margin-right: 8px;
                cursor: pointer;
            }
            button{
                cursor: pointer;
                flex-grow: 1;
                margin: 4px 0;
                padding-left: 16px;
                border-radius: 30px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                text-align: left;
                &:hover{
                    background-color: rgba(0, 0, 0, 0.08);
                }
            }
        }
        &:nth-child(2){
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding-bottom: 4px;
            button{
                border-radius: 5px;
                img{
                    width: 28px;
                    margin: 0 4px 0 -2px;
                }
                span{
                    padding-right: 4px;
                }

                &:hover{
                    background-color: rgba(0, 0, 0, 0.08);
                }
            }

        }
    }

`;
const Content = styled.div`
    text-align:center;

    & > img {
        width: 30px;
    }
`;


const PostArticle = styled(CommonCard)`
    padding: 0;
    outline: visible;
    margin: 0 0 8px;
`;

const SharedBy = styled.div`
    display: flex;
    padding-right: 40px;
    flex-wrap: no-wrap;
    padding:  12px 16px 0px;
    margin-bottom: 8px;
    align-items: center;
    a{  
        display: flex;
        padding-left: 0px;
        flex-grow: 1;
        margin-right: 12px;
        overflow: hidden;
        img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        &  > div {
            display: flex; 
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            overflow: hidden;
            margin-left: 8px;
            span{
                text-align: left;
                &:first-child{
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(0,0,0,0.9);
                    &:hover{
                        color: #0a66c2;
                    }
                }
                &:nth-child(2), &:last-child{
                    font-size: 12px;
                    color: rgba(0,0,0,0.6);
                }
            }
        }
    }
    button{
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        border-radius: 50%;
        padding: 3px 4px;
        background: transparent;
        margin-top: 4px;
        margin-right:4px;
        outline: none;
        &:hover{
            background-color: rgba(0,0,0,0.08);
        }

    }


`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedPost = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    cursor: pointer;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const EachSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
`;

const LikeCount = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    align-items: center;
    border-bottom: 1px solid #e9e5df;
    list-style: none;

    li {
        margin-right: 5px;
        font-size: 12px;
        button {
            border: none;
            display: flex;
            background: transparent;
            img{
                margin-right: 4px;
            }
            span{
                color: rgba(0, 0, 0, 0.6);
                &:hover{
                    color: #0a66c2;
                }
            }
        }
        &:last-child{
        a{
            span{
                color: rgba(0, 0, 0, 0.6);
                &:hover{
                    color: #0a66c2;
                }
            }
        }
    }
    }
    
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;

    button {
        display: inline-flex;
        align-items: center;
        color: rgba(0,0,0,0.6);
        font-weight: 600;
        padding: 8px;
        border: none;
        border-radius: 5px;
        background: transparent;
        &:hover{
            background-color: rgba(0,0,0,0.08);
        }
        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`;
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,

        loading: state.postState.loading,
        posts: state.postState.posts,

    };

};

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPostsAPI())
})
export default connect(mapStateToProps, mapDispatchToProps)(Main);