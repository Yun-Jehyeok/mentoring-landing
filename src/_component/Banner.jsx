import "./Banner.css";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-copy">
                <h1>
                    <span>단 2달</span>의 과정,
                    <br />
                    <span>프론트엔드 취업</span>의 시작!
                </h1>

                <div>
                    <span>프로젝트 만드는 방법</span>이 아닌
                    <br />
                    <span>진짜 취업에 필요한 내용</span>을 배워보세요.
                </div>

                <button
                    onClick={() =>
                        window.open(
                            "https://open.kakao.com/o/sCl8XI0h",
                            "_blank"
                        )
                    }
                >
                    무료 커피챗 신청하기
                </button>
            </div>

            <div className="dimmed"></div>
        </div>
    );
}
