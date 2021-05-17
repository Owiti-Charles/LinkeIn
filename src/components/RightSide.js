import React from 'react';
import styled from 'styled-components';

function RightSide(props) {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>

                            <span>#Linkedin</span>
                            <button>
                                <img src="/images/plus-icon.svg" />
                                Follow
                            </button>

                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar />
                        </a>
                        <div>

                            <span>#Nasa</span>
                            <button>
                                <img src="/images/plus-icon.svg" />
                                Follow
                            </button>

                        </div>
                    </li>
                </FeedList>
                <Recommendation>
                    View all recommendations
                    <img src="/images/right-icon.svg" alt="" />
                </Recommendation>
            </FollowCard>
            <BannerCard>
                <img
                    src="/images/baner.jpg"
                    alt=""
                />
            </BannerCard>
        </Container>
    );
}
const Container = styled.div`
    grid-area: rightside;
`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 8px;
    background-color: #fff;
    position:relative;
    border: none;
    padding: 12px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Title = styled.div`
    display: inline-flex;
    font-size:16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.9);
    justify-content: space-between; 
    align-items: center;
`;

const FeedList = styled.ul`
    margin-top: 16px;
    cursor: pointer;
    li {
        align-items:center;
        margin: 12px 0 15px;
        font-size: 14px;
        position: relative;
        display: flex;
        & > div{
            display: flex;
            flex-direction: column;
            text-align: left;
            
        }
        button {

            cursor: pointer;
            margin-top: 6px;
            background-color: transparent;
            color: rgba(0, 0, 0, 0.6);
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
            padding: 14px;
            align-items: center;
            border-radius: 24px;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            max-height: 32px;
            max-width: 480px;
            text-align: center;
            outline: none;
            font-weight: 600;
            font-size: 15px;
            img{
                padding-right: 4px;
            }
            &:hover{
                background-color: rgba(0, 0, 0, 0.08);
                box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
            }
        }
    }
    

`;

const Avatar = styled.div`
    background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    margin-right: 8px;
`;

const Recommendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
    
    img {
        margin-top: -12px;
        width: 100%;
        height: 100%;
        margin-bottom: -16px;
    }
`;

export default RightSide;