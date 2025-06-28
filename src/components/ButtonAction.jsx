const ButtonAction = ({ onClick, text, green, validate }) => {
  return (
    <button
      className={`px-10 py-4 rounded-[15px] font-bold uppercase ${
        green
          ? "text-[#ECF5EB] bg-[#64DB54] drop-shadow-[0px_6px_0px_#69AE5F] hover:bg-[#5dd44d]"
          : "text-[#BEBEBE] border border-[#E4E4E4] bg-[#EFEFEF] drop-shadow-[0px_6px_0px_#E4E4E4] hover:bg-[#ececec] hover:text-[#b4b4b4]"
      } ${validate ? "pointer-events-none opacity-70" : "pointer-events-auto"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonAction;
