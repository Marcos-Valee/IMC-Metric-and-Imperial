function Input({ title, onchange, value }) {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 rounded-lg h-20 justify-center bg-white">
        <label>{title}</label>
        <input
          type="text"
          className="text-center outline-none border-b-2 border-blue-500 focus:border-blue-700 transition-all duration-300"
          value={value}
          onChange={onchange}
        />
      </div>
    </div>
  );
}

export default Input;
