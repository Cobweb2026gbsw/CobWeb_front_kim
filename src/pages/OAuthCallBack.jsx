import ThemeToggle from "../components/ThemeToggle";
import "./OAuthCallBack.css";

export default function OAuthCallBack({ dark, setDark }) {
  return (
    <div className={`OAuthPage ${dark ? "dark" : "light"}`}>
      <ThemeToggle dark={dark} setDark={setDark} />
      <h1>CobWeb</h1>
      <p>로그인중...</p>
    </div>
  );
}
