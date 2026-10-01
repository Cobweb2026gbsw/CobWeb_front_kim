import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import "./Login.css";
export default function Login({ dark, setDark }) {
  return (
    <div className={`LoginPage ${dark ? "dark" : "light"}`}>
      <ThemeToggle dark={dark} setDark={setDark} />
      <div className="LoginBox">
        <h1>LogIn</h1>
        <p>아이디</p>
        <input type="text" placeholder="아이디를 입력해주세요" />
        <p>비밀번호</p>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <p className="login-links">
          <Link to="/signup">
            <span>회원가입</span>
          </Link>
          <Link to="/password-reset">
            <span>비밀번호 찾기</span>
          </Link>
        </p>
        <button>로그인</button>
        <p className="login-logo">CobWeb</p>
      </div>
    </div>
  );
}
