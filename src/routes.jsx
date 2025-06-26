import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChooseLessonPage from "./pages/ChooseLesson";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChooseLessonPage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
