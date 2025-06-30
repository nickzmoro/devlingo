import Header from "../../components/Header";
import Card from "../../components/CardChooseLanguage";

import dataQuestionsReact from "../../utils/dataQuestionsReact";
import dataQuestionsJS from "../../utils/dataQuestionsJS";
import dataQuestionsTS from "../../utils/dataQuestionsTS";

const ChooseLesson = () => {
  return (
    <>
      <Header hasLogged />
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col gap-9 mb-[60px]">
          <div className="flex flex-col items-center gap-4">
            <img src="./devlingo-pensativo.png" alt="Devlingo pensativo" />
            <h3 className="text-[#4B4B4B] font-[700] text-[2rem]">
              O que vamos aprender?
            </h3>
          </div>
          <div className="flex gap-5">
            <Card
              srcImage={"./devlingo-react.png"}
              language={"React"}
              numberOfQuestions={dataQuestionsReact.length}
              routeNavigate={"./react-lesson"}
            />
            <Card
              srcImage={"./devlingo-javascript.png"}
              language={"JavaScript"}
              numberOfQuestions={dataQuestionsJS.length}
              routeNavigate="./javascript-lesson"
            />
            <Card
              srcImage={"./devlingo-typescript.png"}
              language={"TypeScript"}
              numberOfQuestions={dataQuestionsTS.length}
              routeNavigate="./typescript-lesson"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseLesson;
