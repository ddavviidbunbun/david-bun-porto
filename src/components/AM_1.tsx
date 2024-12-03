import "../assets/style.css";
import cppimg from "/CPP-TS.png";
import nodeimg from "/NodeJS-TS.png";
import tsimg from "/TypeScript-TS.png";
import reactimg from "/React-TS.png";
import sqlimg from "/MySQL-TS.png";
import pyimg from "/Python-TS.png";
import gitimg from "/GitHub-TS.png";
import linimg from "/LinkedIn-TS.png";

export default function AM_1() {
  return (
    <>
      <div className="onlyGap grid">
        <div className="flex flex-col justify-center items-center atasTS bg-[#292A2D] onlyRounded">
          <div className="onlyFontSize font-hevBold">
            <span>Tech Stack</span>
          </div>
          <div className="atasTSIMG grid">
            <img src={cppimg} alt="CPP" className="gambarTS" />
            <img src={nodeimg} alt="NodeJS" className="gambarTS" />
            <img src={tsimg} alt="TypeScript" className="gambarTS" />
            <img src={reactimg} alt="React" className="gambarTS" />
            <img src={sqlimg} alt="MySQL" className="gambarTS" />
            <img src={pyimg} alt="Python" className="gambarTS" />
          </div>
        </div>
        <div className="flex justify-between">
          <a href="https://github.com/ddavviidbunbun">
            <div className="bg-[#292A2D] onlyRounded gambarGitIn flex justify-center items-center">
              <img src={gitimg} alt="GitHub" className="imgGit" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/david-bunyamin-2303a033a/">
            <div className="bg-[#006699] onlyRounded gambarGitIn flex justify-center items-center">
              <img src={linimg} alt="LinkedIn" className="imgLin" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
