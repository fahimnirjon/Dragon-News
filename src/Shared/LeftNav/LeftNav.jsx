import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import moment from "moment";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="border space-y-3">
        <h2 className="text-xl font-semibold border-b-2 ml-1  mb-1">
          All Categories
        </h2>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            className="block mr-2 ml-4"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="mt-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="mt-2 mb-2">
            <h2 className="font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-3 lg:ml-2">
              <p className="">Children</p>
              <p className="">{moment().format("MMMM D,YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img2} alt="Shoes" />
          </figure>
          <div className="mt-2 mb-2">
            <h2 className="font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-3 lg:ml-2">
              <p className="">Family</p>
              <p className="">{moment().format("MMMM D,YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img3} alt="Shoes" />
          </figure>
          <div className="mt-2 mb-2">
            <h2 className="font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-3 lg:ml-2">
              <p className="">Sports</p>
              <p className="">{moment().format("MMMM D,YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
