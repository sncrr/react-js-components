

import TextField1 from "./inputs/outlined-bottom/TextField";
import TextField2 from "./inputs/outlined-floating-label/TextField";
import TextField3 from "./inputs/outlined/TextField";
import TextField4 from "./inputs/filled/TextField";
import TextField5 from "./inputs/side-label/TextField";
import RadioGroup1 from "./radios/button-like/RadioGroup";
import RadioGroup2 from "./radios/filled/RadioGroup";
import CheckGroup1 from "./checkboxes/default/CheckGroup";
import CheckGroup2 from "./checkboxes/filled/CheckGroup";


function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Change branch for components
      </h1>
      
      <div className="mt-4 w-96">
        <TextField1
          label="Name"
          name="Name"
        />
        <TextField2
          label="Name"
        />
        <TextField3
          label="Name"
        />
        <TextField4
          label="Name"
        />
        <TextField5
          label="Name"
        />
      </div>
      <div className="mt-4 w-96">
        <RadioGroup1
          label="Choose"
          name="sample_radio1"
          options={[
            {
              value: "1",
              label: "Option 1"
            },
            {
              value: "2",
              label: "Option 2"
            }
          ]}
        />

        <RadioGroup2
          label="Radio Group 1"
          name="sample_radio2"
          options={[
            {
              value: "1",
              label: "Option 1"
            },
            {
              value: "2",
              label: "Option 2"
            }
          ]}
        />

        <CheckGroup1
          label="Check Group 2"
          name="sample_check2"
          options={[
            {
              value: "1",
              label: "Option 1"
            },
            {
              value: "2",
              label: "Option 2"
            }
          ]}
        />

        <CheckGroup2
          label="Check Group 1"
          name="sample_check1"
          options={[
            {
              value: "1",
              label: "Option 1"
            },
            {
              value: "2",
              label: "Option 2"
            }
          ]}
        />
      </div>
    </div>
  );
}

export default App;
