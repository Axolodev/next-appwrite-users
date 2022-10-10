interface InputFieldProps {
  id: string;
  placeholder: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label: string;
  value: string;
}

const InputField = ({
  id,
  placeholder,
  changeHandler,
  type = 'text',
  label,
  value,
}: InputFieldProps) => (
  <div className="mb-4">
    <label
      className="block text-purple-700 text-sm font-bold mb-2"
      htmlFor={id}
    >
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  </div>
);

export default InputField;
