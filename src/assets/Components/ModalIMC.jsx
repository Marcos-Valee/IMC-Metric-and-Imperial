import { motion } from "framer-motion";

function ModalIMC({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Tabela de IMC</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Categoria</th>
              <th className="border border-gray-300 p-2">IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Abaixo do peso</td>
              <td className="border border-gray-300 p-2">Menor que 18.5</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Peso normal</td>
              <td className="border border-gray-300 p-2">18.5 - 24.9</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Sobrepeso</td>
              <td className="border border-gray-300 p-2">25 - 29.9</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Obesidade grau 1</td>
              <td className="border border-gray-300 p-2">30 - 34.9</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Obesidade grau 2</td>
              <td className="border border-gray-300 p-2">35 - 39.9</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Obesidade grau 3</td>
              <td className="border border-gray-300 p-2">Maior que 40</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
        >
          Fechar
        </button>
      </div>
    </motion.div>
  );
}

export default ModalIMC;