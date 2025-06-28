import { IoClose } from "react-icons/io5";
import Header from "../../components/Header";
import dataQuestionsReact from "../../utils/dataQuestionsReact";
import { useState } from "react";
import OptionButton from "../../components/OptionButton";
import ButtonAction from "../../components/ButtonAction";

const ReactLesson = () => {
  const [nextQuestion, setNextQuestion] = useState(0);

  const currentIssue = dataQuestionsReact[nextQuestion];

  return (
    <>
      <Header hasLogged />
      <div className="flex w-screen h-auto items-center justify-center gap-5 mt-[100px]">
        <div>
          <IoClose
            size={28}
            className="text-[#888888] hover:text-[#5e5e5e] cursor-pointer"
          />
        </div>
        <div className="w-[50%]">
          <div className="relative w-full h-5 bg-[#E6E6E6] rounded-full">
            <div className="absolute rounded-full top-0 left-0 h-full w-[5%] bg-[#8057FE]"></div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="/heart.png" alt="Vidas" className="w-[22px]" />
          <span className="text-[1.2rem] font-extrabold text-[#FF4B4B]">5</span>
        </div>
      </div>
      {dataQuestionsReact.length > 0 ? (
        <>
          <div className="w-full h-auto flex flex-col items-center justify-center mt-[80px]">
            <div>
              <h4 className="text-[1.8rem] font-bold text-[#4B4B4B]">
                {currentIssue.question}
              </h4>
            </div>
            <div className="flex flex-col gap-3 mt-5">
              {currentIssue.options.map((options) => (
                <OptionButton options={options} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-[40px] left-[25%] w-[50%] border-t border-t-[#C4C4C4] flex items-center justify-between">
            <div className="mt-5">
              <ButtonAction
                text={"Pular"}
                onClick={() => setNextQuestion(nextQuestion + 1)}
              />
            </div>
            <div>
              <ButtonAction
                text={"Verificar"}
                onClick={() => setNextQuestion(nextQuestion + 1)}
                green
              />
            </div>
          </div>
        </>
      ) : (
        <div>
          <p>Carregando...</p>
        </div>
      )}
    </>
  );
};

export default ReactLesson;
