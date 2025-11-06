import "./Solution.css";

export default function Solution() {
    return (
        <section className="solution-section">
            <div className="solution-container">
                <h2>
                    <span className="highlight">단 2개월</span>로 바뀌는
                    <br />
                    취업 준비 방법
                </h2>

                <div className="solution-grid">
                    <div className="solution-card">
                        <div className="card-number">01</div>
                        <h3>현실적인 이력서 & 포트폴리오</h3>
                        <p>
                            Github, Blog부터 포트폴리오 상 문제점까지
                            피드백해드립니다.
                        </p>
                    </div>

                    <div className="solution-card">
                        <div className="card-number">02</div>
                        <h3>체계적인 코딩테스트 대비</h3>
                        <p>
                            JavaScript, Python 기반으로{" "}
                            <strong>매일 한 문제씩</strong> 풀면서 실력을
                            늘려나가세요. 알고리즘별 라이브 강의를 제공합니다.
                        </p>
                    </div>

                    <div className="solution-card">
                        <div className="card-number">03</div>
                        <h3>실전 CS 지식 & 기술면접</h3>
                        <p>
                            매주 CS 발표를 통해{" "}
                            <strong>말로 설명하는 연습</strong>을 하세요. 암기한
                            지식이 아닌 <strong>이해한 지식</strong>
                            으로 면접에 임할 수 있습니다.
                        </p>
                    </div>

                    <div className="solution-card">
                        <div className="card-number">04</div>
                        <h3>팀 프로젝트</h3>
                        <p>
                            그냥 만드는 프로젝트가 아닌, 정확한 학습 목표를
                            세우고 프로젝트를 진행합니다. 같은 목표를 가진
                            분들과 팀이 매칭됩니다.
                        </p>
                    </div>
                </div>

                <div className="solution-imgs">
                    <div className="img3">
                        <div className="dimmed">코딩테스트 라이브 강의</div>
                    </div>
                    <div className="img2">
                        <div className="dimmed">면접 발표 영상 업로드</div>
                    </div>
                    <div className="img1">
                        <div className="dimmed">프로젝트</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
