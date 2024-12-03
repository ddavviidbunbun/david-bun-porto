import "../assets/style.css";
import ppimg from "/Foto.png";

export default function AM_3() {
  return (
    <>
      <div className="aboutMe-3 grid bg-[#292A2D] onlyRounded">
        <div>
          <img src={ppimg} alt="Foto" className="onlyRounded-t" />
        </div>
        <div className="flex justify-center items-start">
          <div className="font-hevBold">
            <span>David Bunyamin</span>
            <br></br>
            <span className="opacity-70">Computer Engineering</span>
            <br></br>
            <span className="opacity-70">Student</span>
          </div>
        </div>
      </div>
    </>
  );
}
