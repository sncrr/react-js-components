import { useState } from "react"

export default function RadioGroup ({
  label,
  name,
  options
}) {

  let [checked, setChecked] = useState("");

  return(
    <div>
      <div>
        <label>
          {label}
        </label>
      </div>
      <div className="flex flex-wrap items-start">
        {
          options.map((item, index) => {

            let background = "relative flex items-center transition rounded mx-2 my-1 ";
            let labelCss = "text-sm cursor-pointer p-2 ";

            background +=  checked === item.value ? "bg-info border border-info"
              : "border border-default-dark"

            labelCss += checked === item.value ? "text-white"
              : "text-cancel";

            return(
              <div 
                key={index.toString()}
                className={background}
              >
                <input
                  id={name+"_"+item.value}
                  type="radio"
                  name={name}
                  value={item.value}
                  className="hidden"
                  onChange={(e) => {
                    if(e.target.checked) {
                      setChecked(item.value)
                    }
                  }}
                />
                <label 
                  htmlFor={name+"_"+item.value}
                  className={labelCss}
                >
                  {item.label}
                </label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}