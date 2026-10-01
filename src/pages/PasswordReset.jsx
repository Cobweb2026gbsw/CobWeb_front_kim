import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import "./PasswordReset.css";

export default function PasswordReset({ dark, setDark }) {
  const navigate = useNavigate();
  return (
    <div className={`PasswordResetPage ${dark ? "dark" : "light"}`}>
      <ThemeToggle dark={dark} setDark={setDark} />
      <div className="PasswordResetBox">
        <h1>Password Reset</h1>
        <p>이메일</p>
        <div className="reset-row">
          <input type="email" placeholder="이메일 입력하세요" />
          <button>인증번호 발송</button>
        </div>

        <p>인증번호</p>
        <div className="reset-row">
          <input type="text" placeholder="인증번호 입력하세요" />
          <button>인증번호 확인</button>
        </div>
        <p>
          <input type="password" placeholder="새 비밀번호 입력" />
          <input type="password" placeholder="새 비밀번호 확인" />
        </p>

        <button onClick={() => navigate("/login")}>비밀번호 변경</button>
        <p>CobWeb</p>
      </div>
    </div>
  );
}
