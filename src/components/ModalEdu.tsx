import "../assets/style.css";

interface fnSet {
  fn: (x: boolean) => void;
}

export default function ModalEdu({ fn }: fnSet) {
  return (
    <>
      <div className="modal bg-[#292A2D] onlyRounded modal-35text flex flex-col justify-center items-center gap-[10%] relative">
        <img
          src={import.meta.env.BASE_URL + "/Arrow-exit.svg"}
          alt="arrow-exit"
          className="absolute right-[2%] sizeExitArrow top-[3%] cursor-pointer"
          onClick={() => fn(false)}
        />
        <div className="flex flex-row justify-between modalEdu">
          <div className="flex flex-col justify-center items-start">
            <span>Multimedia Nusantara University</span>
            <span>Tangerang, Indonesia</span>
          </div>
          <div className="flex flex-col justify-center items-end">
            <span>Computer Engineering Student</span>
            <span>Undergraduate</span>
          </div>
        </div>
        <div className="flex flex-row justify-between modalEdu">
          <div className="flex flex-col justify-center items-start">
            <span>Xaverius 1 Senior High School</span>
            <span>Palembang, Indonesia</span>
          </div>
          <div className="flex flex-col justify-center items-end">
            <span>Mathematic and Natural Sciences (MIPA)</span>
            <span>2019 - 2022</span>
          </div>
        </div>
      </div>
    </>
  );
}
