import "./Problem.css";

export default function Problem() {
    return (
        <section className="problem-section">
            <div className="problem-container">
                <h2>
                    <span style={{ color: "#2563eb" }}>부트캠프</span>도
                    졸업했는데,
                    <br />왜 취업이 안될까요?
                </h2>

                <div className="problem-list">
                    <div className="problem-item">
                        <h3>서류 통과를 못해요</h3>
                        <p>
                            포트폴리오도 있고, React 기반 최신기술도 쓰는데 왜
                            서류에서 떨어질까요?
                        </p>
                    </div>

                    <div className="problem-item">
                        <h3>코딩테스트가 두려워요</h3>
                        <p>
                            알고리즘 문제만 나와도 머리가 하얘져요. 어떻게
                            준비해야 할지 모르겠어요.
                        </p>
                    </div>

                    <div className="problem-item">
                        <h3>기술면접에서 막혀요</h3>
                        <p>
                            JavaScript는 아는데 "실행 컨텍스트가 뭐예요?"라고
                            물으면 대답이 안 나와요.
                        </p>
                    </div>

                    <div className="problem-item">
                        <h3>내 실력이 정말 취업 가능한 수준인가요?</h3>
                        <p>
                            튜토리얼 따라하기는 잘하는데, 혼자서 뭔가 만들려면
                            막막해요.
                        </p>
                    </div>
                </div>
            </div>

            <div className="problem-img">
                <div className="dimmed">모두가 겪고 있는 문제입니다.</div>
            </div>
        </section>
    );
}
