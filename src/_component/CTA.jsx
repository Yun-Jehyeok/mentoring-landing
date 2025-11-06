import "./CTA.css";

export default function CTA() {
    return (
        <section className="cta-section">
            <div className="container">
                <h2>지금 시작하세요!</h2>
                <p>
                    이력서 피드백부터 받아보세요
                    <br />
                    체계적이고 확실한 커리큘럼을 제공해드리겠습니다
                </p>

                <div className="cta-buttons">
                    <button
                        className="primary-button"
                        onClick={() =>
                            window.open(
                                "https://open.kakao.com/o/sCl8XI0h",
                                "_blank"
                            )
                        }
                    >
                        무료 이력서 피드백받기
                    </button>
                </div>
            </div>
        </section>
    );
}
