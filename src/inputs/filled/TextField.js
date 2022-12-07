
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
      {
        label ? (
          <label className="text-sm text-gray-400" htmlFor={name}>
            {label}
          </label>
        ) : null
      }
      <input
        id={name}
        className="border py-3 px-4 w-full focus:border-info outline-none bg-gray-50"
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