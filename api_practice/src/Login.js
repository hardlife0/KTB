import React from "react";

const Login = () => {
    let REST_API_KE = "REST_API_KEY";
    let REDIRECT_URI = "http://localhost:5173/login";

const kakaoToken=`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`
return (
    <div>
      <a href={kakaoToken}>
        <img src="./kakao_login/kakao_login_large_narrow.png"></img>
      </a>
    </div>
  );



}