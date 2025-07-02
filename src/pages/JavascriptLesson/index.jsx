import QuizLesson from "../../components/QuizLesson";
import dataQuestionsJS from "../../utils/dataQuestionsJS";

const JavascriptLesson = () => {
  return <QuizLesson dataQuestions={dataQuestionsJS} language="javascript" />;
};

export default JavascriptLesson;
