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
            let labelCss = "text-sm cursor-pointer p-2 ";

            background += checked.includes(item.value) ? "bg-green-500 border border-green-500"
              : "border border-default-dark"

            labelCss += checked.includes(item.value) ? "text-white"
              : "text-cancel";

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
              </div>
            )
          })
        }
      </div>
    </div>
  )
}