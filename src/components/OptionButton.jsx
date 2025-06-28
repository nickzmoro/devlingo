const OptionButton = ({ options, onClick }) => {
  return (
    <button
      className="text-[1.2rem] text-[#797979d5] font-[500] rounded-[20px] py-5 px-10 bg-[#fff] border border-[#79797934] drop-shadow-[0px_4px_0px_#79797934] hover:bg-[#F2F2F2]"
      onClick={onClick}
    >
      {options}
    </button>
  );
};

export default OptionButton;
