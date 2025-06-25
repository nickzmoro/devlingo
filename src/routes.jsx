import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChooseLessonPage from "./pages/ChooseLesson";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseLessonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
