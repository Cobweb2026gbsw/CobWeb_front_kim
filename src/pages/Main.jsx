import "./Main.css";

export default function Main({ dark }) {
  const cards = [
    {
      title: "내 제출",
      desc: "최근 제출한 코드와 채점 결과를 확인합니다.",
      path: "",
    },
    {
      title: "랭킹",
      desc: "문제 해결 수와 제출 기록을 기준으로 랭킹을 확인합니다.",
      path: "",
    },
    {
      title: "문제 만들기",
      desc: "직접 문제와 테스트케이스를 작성합니다.",
      path: "",
    },
  ];

  return (
    <div>
      <main className={dark ? "main-top dark" : "main-top light"}>
        <section className="hero">
          <p>ONLINE JUDGE</p>
          <h1>CobWeb</h1>
          <p>
            문제를 고르고, 코드를 제출하고, 기록을 확인하세요. 풀이 과정은
            포럼에 남기고, 필요한 문제는 순서대로 학습할 수 있습니다.
          </p>

          <div className="main-button">
            <button>문제 풀기</button>
            <button>단계별로 문제 풀기</button>
            <button>포럼 보기</button>
          </div>

          {/*<div className="info-cards">
            {cards.map((card) => (
              <Link to={card.path} key={card.title}>
                <div className="info-card">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>*/}
          <div className="info-cards">
            {cards.map((card) => (
              <div className="info-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
