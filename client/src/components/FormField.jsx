import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block font-medium text-slate-900 dark:text-slate-400"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-gray-200 py-1.5 px-2.5 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-slate-50 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-500 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-indigo-600 dark:focus:border-indigo-50 outline-none block w-full p-4 duration-300"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
