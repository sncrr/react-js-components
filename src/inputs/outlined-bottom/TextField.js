
export default function TextField ({
  label,
  onChange,
  name,
  required,
  type,
  value,
  defaultValue,
  autoFocus
}) {


  return(
    <div className="relative">
      <label className="label text-gray-400 " htmlFor={name}>
        {label}
      </label>
      <input
        className="border-b py-3 px-4 w-full focus:border-info outline-none bg-gray-50 transition"
        defaultValue={defaultValue}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        type={type}
        autoFocus={autoFocus}
      />
    </div>
  )
}