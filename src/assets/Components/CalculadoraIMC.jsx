import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import { FaExternalLinkAlt } from "react-icons/fa";
import ModalIMC from "./ModalIMC";
import Footer from "./Footer";

function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState("");
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [imperial, setImperial] = useState(false);

  const changeSystem = (toImperial) => {
    if (toImperial) {
      setAltura("");
      setPeso("");
      setImperial(true);
    } else {
      setAltura("");
      setPeso("");
      setImperial(false);
    }
  };

  const handleInputChange = (e, field) => {
    let value = e.target.value;

    if (field === "altura") {
      value = value.replace(/[^0-9]/g, "");

      if (value.length > 2) {
        value = `${value.slice(0, value.length - 2)}.${value.slice(-2)}`;
      }

      setAltura(value);
    } else if (field === "peso") {
      value = value.replace(/[^0-9.]/g, "");
      
      setPeso(value);
    }
  };

  const changeDescription = () => {
    if (imc < 18.5) {
      setDescription("Cuidado! Você está abaixo do peso!");
    } else if (imc >= 18.5 && imc <= 25) {
      setDescription("Você está no peso ideal!");
    } else if (imc > 25 && imc <= 30) {
      setDescription("Cuidado! Você está com sobrepeso!");
    } else if (imc > 30 && imc <= 35) {
      setDescription("Cuidado! Você está com obesidade moderada!");
    } else if (imc > 35 && imc <= 40) {
      setDescription("Cuidado! Você está com obesidade severa!");
    } else {
      setDescription("Cuidado! Você está com obesidade mórbida!");
    }
  };

  useEffect(() => {
    changeDescription();
  }, [imc]);

  const calculateIMC = () => {
    console.log("clickou");
    if (!peso || !altura || peso <= 0 || altura <= 0) {
      setMessage("Insira valores para altura e peso");
      return;
    }
    if (imperial) {
      setIMC(Number(((peso / altura ** 2) * 703).toFixed(1)));
    } else {
      setIMC(Number((peso / altura ** 2).toFixed(1)));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border rounded-4xl border-gray-300 flex flex-col justify-center bg-gray-200 p-4 text-center gap-6 overflow-hidden w-[350px]"
    >
      <h1 className="text-2xl font-semibold">Calculadora - IMC</h1>
      <div className="flex bg-gray-400 rounded-4xl">
        <motion.button
          onClick={() => changeSystem(false)}
          whileTap={{ scale: 0.95 }}
          className={`rounded-4xl p-1 text-md font-semibold cursor-pointer w-full ${
            !imperial ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-700"
          }`}
        >
          Metrico (kg/m)
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className={`rounded-4xl p-1 text-md font-semibold cursor-pointer w-full ${
            imperial ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-700"
          }`}
          onClick={() => changeSystem(true)}
        >
          Imperial (lbs/inc)
        </motion.button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateIMC();
        }}
        className="flex flex-col gap-4"
      >
        <Input
          title={`Altura${imperial ? "(Inc)" : "(M)"}`}
          value={altura}
          onchange={(e) => handleInputChange(e, "altura")}
        />
        <Input
          title={`Peso${imperial ? "(Lbs)" : "(Kg)"}`}
          value={peso}
          onchange={(e) => handleInputChange(e, "peso")}
        />
        <p className="text-red-600">{message}</p>
        <button
          type="submit"
          className="bg-blue-500 text-white text-lg p-1 rounded-lg font-semibold cursor-pointer hover:bg-blue-600 transition duration-200"
        >
          Calcular IMC
        </button>
      </form>
      {imc && !isNaN(imc) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col border-t-2 border-blue-500"></div>
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl">{imc}</span>
              <p className="text-xs">Seu IMC</p>
            </div>
            <div className="ml-20">
              <p>{description}</p>
            </div>
          </div>
          <div className="flex flex-col border-t-2 border-blue-500"></div>
          <div
            className="flex justify-center items-center gap-1 cursor-pointer mt-2 text-blue-600 hover:text-blue-800 hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            <p>Clique aqui para verificar a tabela</p>
            <FaExternalLinkAlt />
          </div>
        </motion.div>
      )}

      <ModalIMC isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </motion.div>
  );
}

export default CalculadoraIMC;
