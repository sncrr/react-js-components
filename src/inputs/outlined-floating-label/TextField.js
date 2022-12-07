
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
    <div className="pt-4 relative">
      <label className="absolute top-1 left-1 bg-white px-2 text-gray-400">
        {label}
      </label>
      <div
        className="border p-2 w-full"
      >
 
        <input
          className="outline-none py-1 px-2 w-full"
          defaultValue={defaultValue}
          value={value}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          type={type}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  )
}