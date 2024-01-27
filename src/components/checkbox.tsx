type CheckboxProps = {
  id: number;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div className={className}>
      <input
        type='checkbox'
        id={String(id)}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className='form-checkbox h-5 w-5 text-blue-600 cursor-pointer'
      />
      <label htmlFor={String(id)} className='ml-2 text-gray-700 cursor-pointer'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
