interface Props {
  id: string;
  label: string;
  value: string;
  // TODO: update event type. remove any
  onChange: (event: any) => void;
  type?: string;
  placeholder?: string;
}

function Input({ 
  type = "text",
  id,
  placeholder,
  label,
  value,
  onChange
}: Props) {
  return (
    <div>
      <input 
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input;
