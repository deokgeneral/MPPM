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
    const realUrl ="https://deokgeneral.github.io/"

    useEffect(()=>{
    	// init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('329600f20aa3bfbcf74852d108a47ed2');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
    },[]);
    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '오늘의 디저트',
                description: '아메리카노, 빵, 케익',
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
            카카오톡 공유하기 </button>
            </div>
        </div>
    );
}

export default Sharebtn;