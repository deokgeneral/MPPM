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
    const realUrl ="https://deokgeneral.github.io"

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
                'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
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
                <FacebookShareButton url={currentUrl.toString()}>
                    <FacebookIcon size={36} round={true} />
                </FacebookShareButton>
            </div>
            <div>
                <TwitterShareButton url={currentUrl.toString()} >
                    <TwitterIcon size={36} round={true} />
                </TwitterShareButton>
            </div>
            <div>
            <button 
            className='kakao-btn'
            onClick={() => {shareKakao()}}
            > 
            카카오톡</button>
            </div>
        </div>
    );
}

export default Sharebtn;