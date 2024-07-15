import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mt-5 mb-5 border p-2 bg-slate-200">
            <button className="btn font-normal bg-red-600 text-white">Breaking News
            </button>
            <Marquee pauseOnClick={true} speed={75}>
                <Link className="ml-5" to="/">I can be a react Developer using multiple React components..</Link>
                <Link className="ml-5" to="/">I can be a react Developer using multiple React components..</Link>
                <Link className="ml-5" to="/">I can be a react Developer using multiple React components..</Link>
                <Link className="ml-5" to="/">I can be a react Developer using multiple React components..</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;