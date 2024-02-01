import './index.css';
import { Link, useParams } from 'react-router-dom';

const UserInputResultPage = () => {
  const { usermbti } = useParams();

  return (
    <div className="resultpage">
        <h3>"{usermbti}" 의 추천 반려견은</h3>
        <div className='resultpage-content'>
          <div className='resultpage-img'>
            <h1>이미지</h1>
          </div>
          <div className='resultpage-explanation'>내용내용
          </div>
      </div>
    </div>
  );
};
export default UserInputResultPage;