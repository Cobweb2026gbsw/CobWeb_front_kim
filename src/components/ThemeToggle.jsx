export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      aria-label={`${dark ? "라이트" : "다크"} 모드로 전환`}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
