const ButtonAction = ({
  onClick,
  text,
  icon,
  green,
  validate,
  red,
  lightGreen,
  purple,
  gray,
}) => {
  return (
    <button
      className={`flex items-center gap-2 px-10 py-4 rounded-[15px] font-bold uppercase max-sm:px-8 ${
        green &&
        "text-[#ECF5EB] bg-[#64DB54] drop-shadow-[0px_6px_0px_#69AE5F] hover:bg-[#5dd44d]"
      } ${
        gray &&
        "text-[#BEBEBE] border border-[#E4E4E4] bg-[#EFEFEF] drop-shadow-[0px_6px_0px_#E4E4E4] hover:bg-[#ececec] hover:text-[#b4b4b4]"
      } ${
        red &&
        "bg-[#ff3c3c] border-none drop-shadow-[0px_6px_0px_#ff1f1f] text-white hover:bg-[rgb(240,60,60)] hover:text-white"
      }  ${
        lightGreen &&
        "bg-[rgb(123,212,72)] border-none drop-shadow-[0px_6px_0px_rgb(123,190,72)] text-white hover:bg-[rgb(123,208,72)] hover:text-white"
      } ${
        purple &&
        "bg-[rgb(128,87,254)] border-none drop-shadow-[0px_6px_0px_#5535B5] text-white hover:bg-[rgb(114,76,228)] hover:text-white"
      } ${validate ? "pointer-events-none opacity-70" : "pointer-events-auto"}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default ButtonAction;
