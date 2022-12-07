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

            let background = "relative flex items-center transition rounded-full mx-2 my-1 ";
            let outer = "h-[16px] w-[16px] border rounded-full p-[2px] inline-block transition ";
            let inner = "transition ";
            let labelCss = "text-sm pl-4 z-10 cursor-pointer pl-6 pr-2 py-1 ";

            background +=  checked === item.value ? "bg-blue-100"
              : ""

            outer += checked === item.value ? "border-blue-500"
              : "border border-cancel h-[16px] w-[16px] p-[2px] inline-block";

            inner += checked === item.value ? "bg-blue-500 h-[10px] w-[10px] rounded-full"
              : "";

            labelCss += checked === item.value ? "text-blue-500"
              : "";

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
                <div className="absolute top-1 left-1 z-0">
                  <div className={outer}>
                    <div className={inner}>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}