import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import "./Signup.css";

export default function Signup({ dark, setDark }) {
  return (
    <div className={`SignupPage ${dark ? "dark" : "light"}`}>
      <ThemeToggle dark={dark} setDark={setDark} />
      <div className="SignupBox">
        <h1>Sign Up</h1>

        <p>아이디</p>
        <input placeholder="아이디를 입력하세요" />

        <p>이메일</p>
        <div className="signup-row">
          <input type="email" placeholder="이메일을 입력하세요" />
          <button>인증번호 발송</button>
        </div>

        <p>인증번호</p>
        <div className="signup-row">
          <input placeholder="인증번호 입력" />
          <button>인증번호 확인</button>
        </div>

        <p>비밀번호</p>
        <input type="password" placeholder="비밀번호 입력" />

        <p>비밀번호 확인</p>
        <input type="password" placeholder="비밀번호를 다시 입력하세요" />

        <button>회원가입</button>

        <Link to="/login">
          <p>
            계정이 있으신가요? <span>로그인</span>
          </p>
        </Link>

        <p className="signup-logo">CobWeb</p>
      </div>
    </div>
  );
}
