import { TbWorld } from "react-icons/tb";
import { useCrystal } from "../contexts/CrystalContext";

const Header = ({ hasLogged }) => {
  const { amountCristal } = useCrystal();

  return (
    <header className="absolute top-5 left-0 flex items-center justify-around w-full">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-[35px] h-[35px]" />
        <p className="text-[#8057FE] text-[1.5rem] font-extrabold">
          &lt;dev
          <span className="text-[#6753A6]">lingo/&gt;</span>
        </p>
      </div>
      {hasLogged ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <img src="/ofensive-day.png" alt="Foguinho" className="w-[18px]" />
            <span className="font-bold text-[#FF9600] text-[1.2rem]">3</span>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="/cristal.png" alt="Foguinho" className="w-[21px]" />
            <span className="font-bold text-[#1CB0F6] text-[1.2rem]">
              {amountCristal}
            </span>
          </div>
        </div>
      ) : (
        <div>
          <TbWorld size={25} className="text-[#c4c4c4] cursor-pointer" />
        </div>
      )}
    </header>
  );
};

export default Header;
