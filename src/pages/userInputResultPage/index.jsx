import { Link } from "react-router-dom";
import './index.css';

export default function UserInputResultPage() {
    return(
        <div className="resultpage">
        <Link to ={'/'} id="remaching">다시 추천받기</Link>
        <h1>결과 페이지 입니다.</h1>
        </div>
    ); 
  }