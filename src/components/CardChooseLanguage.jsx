import { FaCheck, FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFinished } from "../contexts/FinishedContext";

const CardChooseLanguage = ({
  srcImage,
  tech,
  numberOfQuestions,
  routeNavigate,
  language,
}) => {
  const navigate = useNavigate();
  const { finishedStatus } = useFinished();

  return (
    <>
      <div
        className="group relative flex flex-col items-center py-9 px-[60px] border border-[#d1d1d1] rounded-[12px] drop-shadow-[0px_3px_0px_#d1d1d1] bg-white cursor-pointer hover:border-[#bebebe] hover:drop-shadow-[0px_3px_0px_#bebebe] hover:bg-[#f5f5f5] transition-all duration-200"
        onClick={() => navigate(routeNavigate)}
      >
        <img src={srcImage} alt="React" className="mb-5 w-[100px]" />
        <p className="text-[1.2rem] font-bold text-[#323330] p-0 m-0">{tech}</p>
        <span className="text-[1.1rem] font-[500] text-[#969696] p-0 m-0">
          {numberOfQuestions} questões
        </span>

        <div className="absolute opacity-0 pointer-events-none bottom-[-60px] left-0 w-full group-hover:opacity-100 transition-all duration-200">
          {finishedStatus[language] ? (
            <button className="w-full py-3 rounded-[12px] text-[1.1rem] bg-[#69AE5F] flex items-center justify-center gap-3 border border-[#69AE5F] text-white uppercase font-bold">
              <FaCheck /> Concluído
            </button>
          ) : (
            <button className="w-full py-3 rounded-[12px] text-[1.1rem] bg-[#656565] flex items-center justify-center gap-3 border border-[#656565] text-white uppercase font-bold">
              <FaPlay /> Jogar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardChooseLanguage;
