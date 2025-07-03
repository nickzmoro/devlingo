import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import OptionButton from "./OptionButton";
import ButtonAction from "./ButtonAction";
import Result from "./ResultContainer";
import ToastMessage from "./ToastMessage";
import Header from "./Header";
import { useCrystal } from "../contexts/CrystalContext";
import { useFinished } from "../contexts/FinishedContext";

const QuizLesson = ({ dataQuestions, language }) => {
  const [nextQuestion, setNextQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [amountLife, setAmountLife] = useState(5);
  const [countHits, setCountHits] = useState(0);
  const [countErrors, setCountErrors] = useState(0);

  const { amountCristal, setAmountCristal } = useCrystal();
  const { setLanguageFinished } = useFinished();

  const navigate = useNavigate();

  const currentIssue = dataQuestions[nextQuestion];
  const correctAnswerText =
    currentIssue?.options?.[currentIssue?.correctAnswer];
  const progress = (nextQuestion / dataQuestions.length) * 100;
  const percentageHits = ((countHits / dataQuestions.length) * 100).toFixed(0);

  const handleClickVerify = () => {
    if (selectedQuestion === currentIssue.correctAnswer) {
      setToastMessage("correct");
      setAmountCristal(amountCristal + 10);
      setCountHits(countHits + 1);
    } else {
      setToastMessage("incorrect");
      setAmountLife(amountLife - 1);
      setCountErrors(countErrors + 1);
    }
  };

  return (
    <>
      <Header hasLogged hasBorder />
      {nextQuestion < dataQuestions.length ? (
        <>
          <div className="flex w-screen h-auto items-center justify-center gap-5 mt-[100px]">
            <div>
              <IoClose
                size={28}
                className="text-[#888888] hover:text-[#5e5e5e] cursor-pointer"
                onClick={() => navigate("/choose")}
              />
            </div>
            <div className="w-[50%] max-sm:w-[60%]">
              <div className="relative w-full h-5 bg-[#E6E6E6] rounded-full">
                <div
                  className="absolute rounded-full top-0 left-0 h-full bg-[#8057FE] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <img src="/heart.png" alt="Vidas" className="w-[22px]" />
              <span className="text-[1.2rem] font-extrabold text-[#FF4B4B]">
                {amountLife}
              </span>
            </div>
          </div>
          {dataQuestions.length > 0 ? (
            <>
              <div className="w-full relative h-auto flex flex-col items-center justify-center mt-[80px] max-md:px-5 max-md:mt-10 z-40">
                <div>
                  <h4 className="text-[1.8rem] font-bold text-[#4B4B4B] max-w-[1000px] text-center max-md:text-[1.6rem]">
                    {currentIssue.question}
                  </h4>
                </div>
                <div className="flex flex-col gap-3 mt-5">
                  {currentIssue.options.map((options, index) => (
                    <OptionButton
                      key={index}
                      options={options}
                      value={index}
                      change={selectedQuestion === index}
                      onClick={(e) => {
                        setSelectedQuestion(Number(e.target.value));
                      }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-[-290px] left-[25%] w-[50%] max-md:w-full max-md:left-0 max-md:px-5 max-md:bottom-[-150px] border-t border-t-[#C4C4C4] flex items-center justify-between -z-10">
                  <div className="mt-3 mb-3">
                    <ButtonAction
                      text={"Pular"}
                      onClick={() => {
                        setNextQuestion(nextQuestion + 1);
                        setSelectedQuestion(null);
                      }}
                      gray
                    />
                  </div>
                  <div className="mt-3 mb-3">
                    <ButtonAction
                      text={"Verificar"}
                      validate={selectedQuestion === null}
                      onClick={() => {
                        setSelectedQuestion(null);
                        handleClickVerify();
                      }}
                      green
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>
              <p>Carregando...</p>
            </div>
          )}
        </>
      ) : (
        <Result
          hits={countHits}
          errors={countErrors}
          percentageHits={percentageHits}
          onClickRepeat={() => {
            setNextQuestion(0);
            setCountErrors(0);
            setCountHits(0);
            setAmountLife(5);
          }}
          onClickContinue={() => {
            setLanguageFinished(language);
            navigate("/choose");
          }}
        />
      )}
      {toastMessage === "correct" && (
        <ToastMessage
          correctAnswer={correctAnswerText}
          onClick={() => {
            setNextQuestion(nextQuestion + 1);
            setToastMessage(null);
          }}
          correct
        />
      )}
      {toastMessage === "incorrect" && (
        <ToastMessage
          correctAnswer={correctAnswerText}
          onClick={() => {
            setNextQuestion(nextQuestion + 1);
            setToastMessage(null);
          }}
          color="red"
        />
      )}
      {amountLife === 0 && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000000d8] z-99 max-sm:px-5">
          <div className="bg-[#fff] flex flex-col items-center max-w-[400px] text-center p-10 rounded-[12px] drop-shadow-[4px_4px_0px_#c5c5c5] max-sm:p-8">
            <img
              src="/devlingo-triste.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
            <h4 className="text-[1.8rem] font-bold text-[#353535]">
              Oops.. Está sem vida?
            </h4>
            <p className="text-[1.2rem] font-[500] text-[#4B4B4B] mb-5">
              Você caiu na armadilha dos bugs. Bora tentar de novo?
            </p>
            <div className="p-4 border-2 border-[#46299e] bg-[#8157fe38] rounded-[12px] drop-shadow-[0px_0px_10px_#8259ff]">
              <span className="text-[1.2rem] font-[600] text-[#46299e]">
                🎁 Oferta ÚNICA 🎁
              </span>
              <p className="text-[#27145e] text-[1.1rem] font-[400] mt-1">
                Você não desistiu e nós também não! Receba +5 corações para
                seguir praticando.
              </p>
              <button
                className="mt-3 w-full bg-[#46299e] text-white py-2 font-bold uppercase rounded-[12px] drop-shadow-[0px_4px_0px_#311c70] hover:bg-[#4b2ea1]"
                onClick={() => setAmountLife(5)}
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizLesson;
