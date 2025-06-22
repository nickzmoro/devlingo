import { TbWorld } from "react-icons/tb";

const HeaderIntro = () => {
  return (
    <header className="fixed top-5 left-0 flex items-center justify-around w-full">
      <div className="flex items-center gap-3">
        <img src="./logo.png" alt="Logo" className="w-[35px] h-[35px]" />
        <p className="text-[#8057FE] text-[1.5rem] font-extrabold">
          &lt;dev
          <span className="text-[#6753A6]">lingo/&gt;</span>
        </p>
      </div>
      <div>
        <TbWorld size={25} className="text-[#c4c4c4] cursor-pointer" />
      </div>
    </header>
  );
};

export default HeaderIntro;
