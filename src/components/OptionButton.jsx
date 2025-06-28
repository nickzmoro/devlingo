const OptionButton = ({ options, value, change, onClick }) => {
  return (
    <button
      className={`min-w-[500px] text-[1.2rem] text-[#797979d5] font-[500] rounded-[20px] py-5 px-10 bg-[#fff] border border-[#79797934] drop-shadow-[0px_4px_0px_#79797934] hover:bg-[#F2F2F2] ${
        change
          ? "bg-gray-200 hover:bg-gray-200 text-gray-500 drop-shadow-gray-300"
          : ""
      }`}
      value={value}
      onClick={onClick}
    >
      {options}
    </button>
  );
};

export default OptionButton;
