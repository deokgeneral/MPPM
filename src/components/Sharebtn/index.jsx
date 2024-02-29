import React, { useEffect } from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton
} from 'react-share';
import './index.css';
const { Kakao } = window;

function Sharebtn() {
    const currentUrl = window.location.href;
    const realUrl ="https://deokgeneral.github.io/MPPM/"

    useEffect(()=>{
        Kakao.cleanup();
        Kakao.init('f077749945a9a7899719b4333992d396');
        console.log(Kakao.isInitialized());
    },[]);


    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: 'MPPM',
                description: '자신의 MBTI를 입력후에 강아지를 추천 받으세요!',
                imageUrl:
                'https://deokgeneral.github.io/MPPM/assets/메인화면.png',
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                title: '나도 테스트 하러가기',
                link: {
                mobileWebUrl: realUrl,
                },
                },
                ],
            });
    }
    return (
        <div className='sharebtn'>
            <div>
                <FacebookShareButton url={currentUrl.toString()} className='facebook-btn'>
                    <FacebookIcon size={36} round={true} />
                </FacebookShareButton>
            </div>
            <div>
                <TwitterShareButton url={currentUrl.toString()} className='twitter-btn'>
                    <TwitterIcon size={36} round={true} />
                </TwitterShareButton>
            </div>
            <div>
            <input
            type='button' 
            className='kakao-btn'
            onClick={() => {shareKakao()}}
            />
            </div>
        </div>
    );
}

export default Sharebtn;