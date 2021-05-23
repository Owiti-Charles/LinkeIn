import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import firebase from 'firebase';
import { postArticleAPI } from '../actions'


const PostModal = (props) => {

    const [inputText, setInputText] = useState('');
    const [uploadImage, setUploadImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const switchAssetArea = (area) => {
        setUploadImage("");
        setVideoLink("");
        setAssetArea(area);
    };


    const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: uploadImage,
            video: videoLink,
            user: props.user,
            description: inputText,
            timestamp: firebase.firestore.Timestamp.now()
        }
        console.log(payload);
        props.postArticle(payload)
        reset(e)
    }

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`Selected file is not an image, the file is a ${typeof { image }}`);
            return;

        };
        setUploadImage(image);
    }

    const reset = (e) => {
        setInputText("");
        setUploadImage("");
        setVideoLink("");
        props.handleClick(e);
    }

    return (
        <>
            { props.openModal === "open" &&
                <Container>
                    <Content>
                        <Header>
                            <h2>
                                Create a post
                    </h2>
                            <button ><img src="/images/close.svg" alt="" onClick={(event) => reset(event)} /></button>
                        </Header>
                        <ShareContent>
                            {
                                props.user && props.user.displayName ?
                                    <ShareUser>
                                        <img src={props.user.photoURL} alt="" />
                                        <span>{props.user.displayName}</span>
                                    </ShareUser>
                                    :
                                    <ShareUser>
                                        <img src="/images/user.svg" alt="" />
                                        <span>Mouse</span>
                                    </ShareUser>
                            }

                            <Editor>
                                <textarea
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="What do you want to talk about?"
                                    autoFocus={true}
                                >

                                </textarea>

                                {

                                    assetArea === "image" ?

                                        <UploadImage>
                                            <input type="file"
                                                accept="image/gif, image/jpeg, image/png, image/jpg"
                                                name="image"
                                                id="file"
                                                style={{ display: "none" }}
                                                onChange={handleChange}
                                            />
                                            <p><label htmlFor="file" style={{ cursor: 'pointer' }}>Select a image to share</label></p>
                                            {uploadImage && <img src={URL.createObjectURL(uploadImage)} />}
                                        </UploadImage>
                                        :
                                        assetArea === 'media' &&
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Please input a video link"
                                                value={videoLink}
                                                style={{ outline: "none" }}
                                                onChange={(e) => setVideoLink(e.target.value)}
                                            />
                                            {
                                                videoLink &&
                                                <ReactPlayer width={'100%'} url={videoLink} />
                                            }
                                        </>
                                }
                            </Editor>

                        </ShareContent>
                        <SharePost>
                            <AttachAssets>
                                <AttachButtons>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                                    </svg>
                                </AttachButtons>
                                <AttachButtons onClick={() => switchAssetArea('image')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                    </svg>
                                </AttachButtons>
                                <AttachButtons onClick={() => switchAssetArea('media')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                    </svg>
                                </AttachButtons>
                            </AttachAssets>
                            <ShareComment>
                                <AttachButtons>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                                        <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                                    </svg>
                                    <span>Anyone</span>
                                </AttachButtons>
                            </ShareComment>
                            <PostButton disabled={!inputText ? true : false} onClick = {(event) => postArticle(event)} >Post</PostButton>
                        </SharePost>
                    </Content>
                </Container>
            }
        </>
    );
}

const Container = styled.div`
    animation: fadeIn 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    right:0;
    color: black;
    background: rgba(0,0,0,0.6);
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    z-index: 9999999999999;
    overflow: initial;
    max-height: 90%;
    border-radius: 8px;
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    top: 34px;

`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-weight: 400;
    align-items: center;
    button{
        background: transparent;
        border: none;
        border-radius: 50%;
        padding: 4px 6px ;
        cursor: pointer;
        outline: none;
        &:hover{
            background-color: rgba(0, 0, 0, 0.1);
        }
        img{
            width: 22px;
            height: 22px;
        }
    }
`;


const ShareContent = styled.div`
    display: flex;
    flex-direction: column; 
    flex-grow: 1;
    vertical-align: baseline;
    overflow-y: auto;
    background: transparent;
    padding: 8px 12px;

`;

const ShareUser = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 12px 14px;
    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid transparent;
        background-clip: content-box;
    }
    span{
        font-weight: 600;
        font-size: 16px;margin-left: 5px;
        line-height: 1.5px;
    }
`;
const SharePost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px 12px 16px;
 `;


const AttachAssets = styled.div`
    display: flex;
    align-items:center;
    
`;

const AttachButtons = styled.button`
    display: flex;
    align-items:center;
    min-width: auto;
    height: 40px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    border: none;
    background: transparent;
    border-radius: 50%;
    padding: 8px;
    &:first-child{
        padding: 0px 12px; 
    }
    &:hover{
        background-color: rgba(0, 0, 0, 0.08)
    }
`;

const ShareComment = styled.div`
    margin-left: 5px;
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);

    ${AttachButtons} {
        height: 30px;
        border-radius: 20px;
        padding: 2px 10px;
        font-weight: 600;
        span{
            margin-left: 5px;
        }
    }
`;
const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding: 8px 16px;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 16px;
    background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.08)' : '#0a66c2'};
    color: ${props => props.disabled ? 'rgba(1, 1, 1, 0.2)' : 'white'};

    &:hover {
        background: ${props => props.disabled ? 'rgba(0, 0, 0, 0.08)' : '#004182'};
    }
`;

const Editor = styled.div`
    padding: 12px 24px;

    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
        border: none;
        outline: none;
    }

    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const UploadImage = styled.div`
    text-align: center;
    img {
        width: 100%;
    }
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);