import { useEffect, useState } from "react"

export default function CheckGroup ({
  label,
  name,
  options
}) {

  let [checked, setChecked] = useState([]);

  useEffect(() => {
    
  }, [checked])

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

            let background = "relative flex items-center transition mx-2 my-1 ";
            let outer = "h-[16px] w-[16px] border p-[2px] inline-block transition ";
            let inner = "transition ";
            let labelCss = "text-sm pl-4 z-10 cursor-pointer pl-6 pr-2 py-1 ";

            background += checked.includes(item.value) ? "bg-green-100"
              : ""

            outer += checked.includes(item.value) ? "border-green-500"
              : "border border-cancel h-[16px] w-[16px] p-[2px] inline-block";

            inner += checked.includes(item.value) ? "bg-green-500 h-[10px] w-[10px]"
              : "";

            labelCss += checked.includes(item.value) ? "text-green-600"
              : "";

            return(
              <div 
                key={index.toString()}
                className={background}
              >
                <input
                  id={name+"_"+item.value}
                  type="checkbox"
                  name={name}
                  value={item.value}
                  className="hidden"
                  onChange={(e) => {
                    let list = [];
                    if(e.target.checked) {
                      if(!checked.includes(item.value)) {
                        list = [...checked, item.value];
                        setChecked(list);
                      }
                    }
                    else {
                      if(checked.includes(item.value)) {
                        let index = checked.indexOf(item.value);
                        if (index > -1) {
                          list = [...checked];
                          list.splice(index, 1);
                          console.log(list);
                          setChecked(list);
                        }
                      }
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