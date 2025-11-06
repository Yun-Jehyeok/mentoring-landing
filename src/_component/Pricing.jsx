import "./Pricing.css";

export default function Pricing() {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2>
                    월 15만원으로
                    <br />
                    <span className="highlight">확실한 취업 준비</span>
                </h2>

                <div className="pricing-card">
                    <div className="price">
                        <span className="currency">월</span>
                        <span className="amount">150,000</span>
                        <span className="currency">원</span>
                    </div>

                    <div className="features">
                        <div className="feature">
                            ✅ 매일 코딩테스트 문제 제공
                        </div>
                        <div className="feature">
                            ✅ 이력서/포트폴리오 1:1 피드백
                        </div>
                        <div className="feature">
                            ✅ 주간 CS 발표 & 기술면접 연습
                        </div>
                        <div className="feature">✅ 팀 프로젝트 참여</div>
                        <div className="feature">✅ 24시간 질문 응답</div>
                        <div className="feature">
                            ✅ 취업 후 3개월 애프터케어
                        </div>
                    </div>

                    <div className="note">
                        * 개별 과외 기준 월 50만원 이상의 가치
                    </div>
                </div>
            </div>
        </section>
    );
}
