import ButtonAction from "./ButtonAction";
import ResultPieChart from "./ResultPieChart";
import { LuRepeat } from "react-icons/lu";

const Result = ({
  hits,
  errors,
  percentageHits,
  onClickRepeat,
  onClickContinue,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-5">
      {hits === 0 && errors === 0 ? (
        <div className="flex flex-col items-center mb-[50px] text-[1.2rem] max-w-[500px] text-center font-[500] text-[#797979]">
          <img src="/devlingo-triste.png" alt="" className="w-[150px]" />
          <p>
            Não conseguimos obter nenhum relatório, pois você pulou todas as
            questões..
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-[2rem] font-bold text-[#4B4B4B] mb-1 max-sm:text-[1.8rem]">
            Seu resultado chegou!
          </h3>
          <p className="text-[1.2rem] max-sm:text-[1.1rem] text-center max-w-[500px] font-[500] text-[#797979]">
            <span className="font-[600]">Observação:</span>{" "}
            {percentageHits == 0 &&
              "Você precisa estudar mais! Confio em você para melhorar essa nota."}
            {percentageHits <= 50 &&
              percentageHits >= 1 &&
              "Você foi bem, porém pode melhorar suas hard skills!"}
            {percentageHits > 50 &&
              percentageHits < 100 &&
              "Caracas! Você foi ótimo, continue assim, está indo pelo caminho certo."}
            {percentageHits == 100 &&
              "Você é um gênio da programação! Parabéns pela perfeição, continue assim."}
          </p>
          <div className="mt-8 mb-10 flex flex-col items-center gap-2">
            <ResultPieChart hits={hits} errors={errors} />
            <span className="text-[2rem] font-bold text-[#6753A6]">
              {percentageHits}%
            </span>
          </div>
        </>
      )}
      <div className="flex gap-3">
        <ButtonAction
          icon={<LuRepeat size={20} />}
          text="Repetir"
          gray
          onClick={onClickRepeat}
        />
        <ButtonAction text="Continuar" purple onClick={onClickContinue} />
      </div>
    </div>
  );
};

export default Result;
