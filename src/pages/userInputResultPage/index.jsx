import React, { useState, useEffect } from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import './index.css';
import mbtiPetData from '../../mbtipetsdata.json'
import Loading from '../../loding';

const UserInputResultPage = () => {
  const { usermbti } = useParams();

  const [loading, setLoading] = useState(true);
  const [petInfo, setPetInfo] = useState(null);

  useEffect(() => {
    // Simulating an asynchronous operation, e.g., fetching data
    const fetchData = async () => {
      // Replace the setTimeout with your actual data fetching logic
      setTimeout(() => {
        const fetchedPetInfo = mbtiPetData[usermbti];
        setPetInfo(fetchedPetInfo);
        setLoading(false);
      }, 1800); // Adjust the time as needed
    };
    fetchData();
  }, [usermbti]);

  if (loading) {
    return <Loading />;
  }

  //에러창//
  if (!petInfo) {
    return (
      <div className="errorpage">
        <div>
        <h1>정확하지 않은 MBTI 이다. 멍!!! </h1>
        <h3>Error: 올바르진 않은 타입의 MBTI "{usermbti}" .</h3>
        <Link to={'/'} className='linktoHome'>돌아가기</Link>
        </div>
      </div>
    );
  }

  const { petName, petImage, petContent} = petInfo;

  return (
    <div className="resultpage">
      <h3>"{usermbti}" 의 추천 반려견은 "{petName}" 이다 멍!!
      <Link to={'/'} className='linktoHome'>돌아가기</Link>
      </h3>
      <div className='resultpage-content'>
        <div className='resultpage-img'>
          <img src={petImage} alt={petName} />
        </div>
        <div className='resultpage-explanation'>
          <h3 style={{
            color:'rgb(161, 116, 116)',
            marginBottom:'10px'
          }}>"{petName}" 의 설명 :
          </h3>
          {petContent}
        </div>
      </div>
    </div>
  );
};
export default UserInputResultPage;