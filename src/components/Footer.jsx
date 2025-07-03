const Footer = () => {
  return (
    <footer className="fixed bottom-0 py-4 w-full h-auto bg-white flex items-center justify-center">
      <p className="font-bold text-[#4B4B4B] text-[1.1rem]">
        <span className="text-[#8057FE]">&lt;</span> Desenvolvido por:{" "}
        <a
          href="https://www.linkedin.com/in/devnicolas/"
          target="_blank"
          className="text-[#8057FE] hover:underline"
        >
          @devnicolas
        </a>{" "}
        <span className="text-[#4B4B4B]">/&gt;</span>
      </p>
    </footer>
  );
};

export default Footer;
