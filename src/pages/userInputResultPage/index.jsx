import { Form, Link, useParams } from 'react-router-dom';
import './index.css';
import mbtiPetData from '../../mbtipetsdata.json'

const UserInputResultPage = () => {
  const { usermbti } = useParams();
  const petInfo = mbtiPetData[usermbti];
  const { petName, petImage, petContent} = petInfo;

  return (
    <div className="resultpage">
      <h3>"{usermbti}" 의 추천 반려견은 "{petName}" 이다 멍!!</h3>
      <div className='resultpage-content'>
        <div className='resultpage-img'>
          <img src={petImage} alt={petName} />
        </div>
        <div className='resultpage-explanation'>
          {petContent}
        </div>
      </div>
    </div>
  );
};
export default UserInputResultPage;