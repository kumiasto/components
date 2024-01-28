type InputPropsType = {
  id: string;
  name: string;
  label?: string;
  type?: string;
  error?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  type = 'text',
  label,
  name,
  id,
  error,
  placeholder,
}: InputPropsType) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='mt-3 ml-2 border-2 w-60'
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
