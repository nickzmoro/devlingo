import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex items-center gap-10 max-lg:flex-col">
          <div className="max-sm:hidden">
            <img
              src="./introductionImage.png"
              alt="Devlingo mexendo no notebook"
            />
          </div>
          <div className="px-3">
            <h3 className="text-[2.3rem] text-[#4B4B4B] max-w-[550px] text-center font-bold leading-10 mb-8">
              O jeito grátis, divertido e eficaz de aprender a programar!
            </h3>
            <div className="flex flex-col gap-4 px-[120px] max-sm:px-3">
              <button
                className="bg-[#8057FE] py-4 text-white uppercase font-bold tracking-[1px] rounded-[15px] drop-shadow-[0_4px_0_#5535B5] hover:bg-[#7856E2] transition-all duration-100"
                onClick={() => navigate("/choose")}
              >
                Comece agora
              </button>
              <button
                className="py-4 text-[#919191] uppercase font-bold tracking-[1px] rounded-[15px] border-2 border-[#D4D4D4] hover:text-[#757575] hover:border-[#a7a7a7] transition-colors duration-100"
                onClick={() => navigate("/choose")}
              >
                Já tenho uma conta
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
