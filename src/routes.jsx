import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChooseLessonPage from "./pages/ChooseLesson";
import NotFound from "./pages/NotFound";
import ReactLesson from "./pages/ReactLesson";
import JavascriptLesson from "./pages/JavascriptLesson";
import TypescriptLesson from "./pages/TypescriptLesson";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseLessonPage />} />
        <Route path="/choose/react-lesson" element={<ReactLesson />} />
        <Route
          path="/choose/javascript-lesson"
          element={<JavascriptLesson />}
        />
        <Route
          path="/choose/typescript-lesson"
          element={<TypescriptLesson />}
        />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
