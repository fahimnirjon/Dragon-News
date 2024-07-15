import { Link, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightNav from "../../Shared/RightNav/RightNav";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3 border">
                    <h2 className="text-5xl">News Details</h2>
                    <Link to="/"><button>Back to home</button></Link>
                    <p>{id}</p>
                </div>
                <div className="border">
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;