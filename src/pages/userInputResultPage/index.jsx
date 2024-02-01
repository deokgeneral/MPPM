import { Form, Link, useParams } from 'react-router-dom';
import './index.css';
import mbtiPetData from '../../mbtipetsdata.json'

const UserInputResultPage = () => {
  const { usermbti } = useParams();
  const petInfo = mbtiPetData[usermbti];

  if (!petInfo) {
    return (
      <div className="resulterrorpage">
        <div>
        <h1>Error: 정확하지 않은 MBTI 입니다!!! </h1>
        <h3>The specified MBTI type "{usermbti}" is not valid or not found in the data.</h3>
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
          <h2>내용:</h2>
          {petContent}
        </div>
      </div>
    </div>
  );
};
export default UserInputResultPage;