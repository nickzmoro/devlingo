import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="flex items-start gap-10">
          <img src="/error404.png" alt="Erro" />
          <div>
            <h4 className="text-[2rem] font-bold text-[#4B4B4B]">
              Página não encontrada..
            </h4>
            <p className="text-[1.2rem] text-[#797979] max-w-[500px] font-[400]">
              Infelizmente a rota não foi encontrada ou não existe. Volte para a
              página inicial.
            </p>
            <button
              className="mt-5 py-3 px-10 bg-[#8057FE] text-white uppercase rounded-[12px] font-bold tracking-[1px] drop-shadow-[0px_4px_0px_#5535B5] hover:bg-[#7a57e2]"
              onClick={() => navigate("/")}
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
