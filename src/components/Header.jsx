import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import "./Header.css";

export default function Header({ dark, setDark }) {
  return (
    <div className={dark ? "Header dark" : "Header light"}>
      <Link to="/">
        <h1>CobWeb</h1>
      </Link>

      <nav>
        <span>문제</span>
        <span>대회</span>
        <span>포럼</span>
        <span>대시보드</span>
      </nav>

      <div className="side">
        <div className="search">
          <input placeholder="검색어를 입력하세요" />

          <button>
            <Search size={18} />
          </button>
        </div>

        <button className="dark-light" onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>

        <Link to="/login">
          <button className="login-button">로그인</button>
        </Link>

        <Link to="/signup">
          <button className="signup-button">가입</button>
        </Link>
      </div>
    </div>
  );
}
