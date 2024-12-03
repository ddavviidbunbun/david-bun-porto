import { Link } from "react-router-dom";
import "../assets/style.css";

export default function NavBar() {
  return (
    <>
      <div className="bg-[#292A2D] navStyle onlyRounded flex justify-center">
        <div className="flex flex-col gapNav fontLokasi">
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experiences">Experiences</Link>
          {/* <Link to="/posts">Posts</Link> */}
        </div>
      </div>
    </>
  );
}
