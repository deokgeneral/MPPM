import React from "react";
import './picket.css'

function Picket (){
    return (
        <div className="picket-contanier">
            <div className="picket">
            <div className="select-content">
                        <h2>나의 MBTI</h2>
                        <select className="selec-box" id="my_mbti">
                        <option selected disabled value>선택</option>
                        <option value="1">ISTJ</option>
                        <option value="2">ISTP</option>
                        <option value="3">INFJ</option>
                        <option value="4">INTJ</option>
                        <option value="5">ISFJ</option>
                        <option value="6">ISFP</option>
                        <option value="7">INFP</option>
                        <option value="8">INTP</option>
                        <option value="9">ESTJ</option>
                        <option value="10">ESFP</option>
                        <option value="11">ENFP</option>
                        <option value="12">ENTP</option>
                        <option value="13">ESFJ</option>
                        <option value="14">ESTP</option>
                        <option value="15">ENFJ</option>
                        <option value="16">ENTJ</option>
                        </select>
                        </div>
            </div>
        </div>
    );
}
export default Picket