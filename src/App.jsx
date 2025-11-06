import Banner from "./_component/Banner";
import CTA from "./_component/CTA";
import Mentor from "./_component/Mentor";
import Pricing from "./_component/Pricing";
import Problem from "./_component/Problem";
import Solution from "./_component/Solution";
import SuccessCase from "./_component/SuccessCase";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* Banner */}
            <Banner />

            {/* Problem Section */}
            <Problem />

            {/* Solution Section */}
            <Solution />

            {/* Mentor Section */}
            <Mentor />

            {/* Success Cases */}
            <SuccessCase />

            {/* Pricing */}
            <Pricing />

            {/* CTA */}
            <CTA />
        </div>
    );
}

export default App;
