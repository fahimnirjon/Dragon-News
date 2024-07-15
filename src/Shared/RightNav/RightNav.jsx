import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
import bg from "../../assets/bg1.png"

const RightNav = () => {
  return (
    <div>
      <div className="p-3 mb-5 space-y-3 border border-dashed">
        <p className="text-2xl font-semibold">Login With</p>
        <button className="btn btn-outline w-full p-1">
          <FaGoogle></FaGoogle>Log in with Google
        </button>
        <button className="btn btn-outline w-full p-1 mt-3">
          <FaGithub></FaGithub>Log in with Github
        </button>
      </div>
      <div className="border border-dashed p-3 space-y-2">
        <p className="text-xl font-bold">Find Us On</p>
        <button className="btn text-xl font-light p-1 w-full rounded-t-lg">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn text-xl font-light p-1 w-full">
          <FaTwitter></FaTwitter>Twitter
        </button>
        <button className="btn text-xl font-light p-1 w-full">
          <FaInstagram></FaInstagram>Instagram
        </button>
        <button className="btn text-xl font-light p-1 w-full">
          <FaTwitch></FaTwitch>Twitch
        </button>
      </div>
      <div className="mt-5 border border-dashed p-1">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div className="mt-5">
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img
              src={bg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Create an Amazing Newspaper</h2>
            <p className="card-actions">Discover thousands of options, easy to customize layouts,one-click to import demo and much more.</p>
            <div className="justify-end">
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
