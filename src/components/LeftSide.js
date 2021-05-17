import React from 'react';
import styled from 'styled-components';

function LeftSide(props) {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo>

                        </Photo>
                        <Link>
                            Welcome, mouse
                        </Link>
                    </a>
                    <a>
                        <AddPhoto>Add photo</AddPhoto>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <span>
                            Connections
                            <p>100</p>
                        </span>
                    </a>
                    <a>
                        <span>
                            Who viewed your profile
                            <p>20</p>
                        </span>
                    </a>



                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My items
                    </span>
                </Item>
            </ArtCard>
            <CommunityCard>
                <a>
                    <span>
                        Groups
                    </span>
                </a>
                <a>
                    <span>
                        Events
                        <img src="/images/plus-icon.svg" alt="" />
                    </span>
                </a>
                <a>
                    <span>
                        Followed Hashtags
                    </span>
                </a>
                <a>
                    <span>
                        Discover more
                    </span>
                </a>
            </CommunityCard>
        </Container>
    );
}

const Container = styled.div`
    grid-area: left;
`;

const ArtCard = styled.div`
    text-align: center;
    margin-bottom: 8px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    transition: box-shadow 83ms;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-break: break-word;
    word-wrap: break-word;

`;

const CardBackground = styled.div`
    background: url('/images/card-bg.svg');
    background-position: center;
    height: 54px;
    background-size: 462px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    background-image: url(/images/photo.svg);
    border: none;
    width: 74px;
    height: 74px;
    background-repeat: no-repeat;
    box-sizing: border-box;
    background-clip: content-box;
    background-position: center;
    background-color: white;
    background-size: 60%;
    margin: -38px auto 12px;
    border-radius: 50%;
    border: 2px solid white;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    &:hover{
        
    }
`;


const AddPhoto = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    font-weight: 00;
    line-height: 1.33;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba( 0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    & > a {
        display: flex;
        align-items:center;
        justify-content: space-between;
        text-decoration: none;
        flex-direction: column;
        padding: 4px 12px;
       
        span{
            line-height: 1.33;
            font-size: 12px;
            display:flex;
            justify-content: space-between;
            padding: 2px 2px;
            width: 100%;
            color: rgba(0, 0, 0, 0.5); 
            font-weight: 600; 
            p{
                color: #0a66c2;
            }
            
        }
        &:hover{
                background-color:rgba(0, 0, 0, 0.08);
            }

    }

`;

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 14px 12px;
    font-size: 12px;
    display: block; 
    span{
        display:flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
        font-weight: 600;
        img{
            padding-right: 10px;
        }

    }
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const CommunityCard = styled(ArtCard)`
    display: flex;
    text-align: left;
    flex-direction: column;
    padding: 12px 0 0;
    a{
        color: #0a66c2;
        padding: 4px 12px 4px 12px;
        font-size: 12px;
        font-weight: 600;
        span{
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding-bottom: 4px;
            img{
                right: 0;
                border-radius: 50%;
                padding: 6px;
                background-color: rgba(0,0,0,0.08) ;
            }
        }
        &:last-child{
            display:flex;
            text-align: center !important;
            color: rgba(0,0,0,0.6);
            padding: 14px;
            border-top: 1px solid #d6cec2;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            &:hover{
                background-color: rgba(0,0,0,0.08);
            }
        }
    }

`;
export default LeftSide;