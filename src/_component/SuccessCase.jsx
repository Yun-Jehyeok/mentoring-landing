import "./SuccessCase.css";

export default function SuccessCase() {
    return (
        <section className="success-section">
            <div className="container">
                <h2>수강생 리뷰</h2>

                <div className="success-grid">
                    <div className="success-card">
                        <p>
                            "체계적으로 취업에 필요한 내용을 꾸준히 준비할 수
                            있었어요. 특히 CS 발표가 면접에 큰 도움이 됐습니다."
                        </p>
                    </div>

                    <div className="success-card">
                        <p>
                            "제 아이템을 사업화하고 싶지만 개발 지식이 없어
                            막막했는데, 이젠 혼자 개발하며 사업에 도전할 수
                            있었어요."
                        </p>
                    </div>

                    <div className="success-card">
                        <p>
                            "객관적인 이력서 피드백과 코딩테스트 라이브 강의가
                            너무 좋았습니다."
                        </p>
                    </div>
                </div>

                <div className="dots">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
}
