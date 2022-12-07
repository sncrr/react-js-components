
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
    <div className="flex relative border mt-2">
      <div className="items-center justify-center flex w-[6rem] bg-success">
        <label className="text-sm text-white">
          {label}
        </label>
      </div>
      <div
        className="p-2 w-full bg-gray-50"
      >
        <input
          className="outline-none py-1 px-2 w-full bg-gray-50"
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