import { FaCheck } from "react-icons/fa";
import ButtonAction from "./ButtonAction";
import { IoClose } from "react-icons/io5";

const ToastMessage = ({ correctAnswer, onClick, correct, color }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 flex items-center justify-center w-full min-h-[120px] max-sm:h-auto py-5 border-t border-[#d4d4d4] z-50 ${
        correct ? "bg-[#a6ec7d]" : "bg-[#fa6666]"
      }`}
    >
      <div className="flex items-center justify-between w-[50%] max-sm:w-[85%]">
        <div className="flex gap-4 max-w-[700px] max-sm:max-w-auto items-center">
          <div
            className={`p-4 rounded-full w-fit h-fit max-sm:hidden ${
              correct ? "bg-[#22440f]" : "bg-[#a01b1b]"
            }`}
          >
            {correct ? (
              <FaCheck size={35} className="text-[#a6ec7d]" />
            ) : (
              <IoClose size={35} className="text-[#fa6666]" />
            )}
          </div>
          <div>
            <p
              className={`text-[1.5rem] max-sm:text-[1.3rem] font-bold leading-9 ${
                correct ? "text-[#22440f]" : "text-[#a01b1b]"
              }`}
            >
              {correct ? "Acertou!" : "Errado!"}
            </p>
            <span
              className={`text-[1.2rem] max-sm:text-[1rem] font-[500] leading-0 ${
                correct ? "text-[#22440fc0]" : "text-[#a01b1bad]"
              }`}
            >
              A resposta correta é: "{correctAnswer}"
            </span>
          </div>
        </div>
        <div>
          {color === "red" ? (
            <ButtonAction text={"Continuar"} onClick={onClick} red />
          ) : (
            <ButtonAction text={"Continuar"} onClick={onClick} lightGreen />
          )}
        </div>
      </div>
    </div>
  );
};

export default ToastMessage;
