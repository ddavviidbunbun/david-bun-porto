import "../assets/style.css";

export default function AM_1() {
  return (
    <>
      <div className="onlyGap grid">
        <div className="flex flex-col justify-center items-center atasTS bg-[#292A2D] onlyRounded">
          <div className="onlyFontSize font-hevBold">
            <span>Tech Stack</span>
          </div>
          <div className="atasTSIMG grid">
            <img src="/CPP-TS.png" alt="CPP" className="gambarTS" />
            <img src="/NodeJS-TS.png" alt="NodeJS" className="gambarTS" />
            <img
              src="/TypeScript-TS.png"
              alt="TypeScript"
              className="gambarTS"
            />
            <img src="/React-TS.png" alt="React" className="gambarTS" />
            <img src="/MySQL-TS.png" alt="MySQL" className="gambarTS" />
            <img src="/Python-TS.png" alt="Python" className="gambarTS" />
          </div>
        </div>
        <div className="flex justify-between">
          <a href="https://github.com/ddavviidbunbun">
            <div className="bg-[#292A2D] onlyRounded gambarGitIn flex justify-center items-center">
              <img src="/GitHub-TS.png" alt="GitHub" className="imgGit" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/david-bunyamin-2303a033a/">
            <div className="bg-[#006699] onlyRounded gambarGitIn flex justify-center items-center">
              <img src="/LinkedIn-TS.png" alt="LinkedIn" className="imgLin" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
