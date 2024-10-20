"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface ArrayInputProps {
  label: string;
  name: string;
  form: any;
}

const ArrayInput: React.FC<ArrayInputProps> = ({ label, name, form }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputArray, setInputArray] = useState<string[]>(
    form.getValues(name) || []
  );
  const [error, setError] = useState<string>("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") {
      setError(`${label} tidak boleh kosong`);
      return;
    }

    const newArray = [...inputArray, inputValue.trim()];
    setInputArray(newArray);
    form.setValue(name, newArray);
    setInputValue("");
    setError("");
  };

  const handleRemoveItem = (index: number) => {
    const newArray = inputArray.filter((_, i) => i !== index);
    setInputArray(newArray);
    form.setValue(name, newArray);
  };

  return (
    <div className="w-full max-w-md py-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center mb-4 space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring focus:ring-purple-300 focus:outline-none"
          placeholder={`Enter a ${name}`}
        />
        <button
          type="button"
          onClick={handleAddItem}
          className="px-3 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <FaPlus />
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <ul className="space-y-2">
        {inputArray.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center space-x-2"
          >
            <span className="flex-1 border border-gray-200 rounded-lg p-2 bg-gray-50 text-gray-700">
              {item}
            </span>
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              className="px-3 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <FaXmark />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayInput;
