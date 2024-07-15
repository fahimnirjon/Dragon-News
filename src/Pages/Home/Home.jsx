import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import Navbar from "../../Shared/Navbar/Navbar";
import RightNav from "../../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2>This is home</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftNav></LeftNav>
        </div>
        <div className="md:col-span-2">
          {
            news.map(anews => <NewsCard key={news._id} news={anews}></NewsCard>)
          }
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
