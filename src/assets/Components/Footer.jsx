function Footer() {
    return (
      <div className="text-center bg-blue-500 text-white p-2 font-medium rounded-t-lg fixed bottom-0 left-0 w-full">
        <p>
          Feito por Marcos Vinicius ©
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/Marcos-Valee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-do-vale-461817358/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
  
  export default Footer;