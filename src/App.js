import { closeDialog, promptDialog } from "./modals/PromptDialog";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Change branch for components
      </h1>

      <div>
        <button
          className="m-2 text-white bg-info outline-none p-2"
          onClick={() => {
            promptDialog({
              title: "Message",
              message: "Hello World"
            })
          }}
        >
          Message
        </button>

        <button
          className="m-2 text-white bg-info outline-none p-2"
          onClick={() => {
            promptDialog({
              title: "Confirmation",
              message: "Are you sure?",
              buttons: [
                {
                  label: "Info",
                  color: "info",
                  closeDialog: false,
                  onClick: () => {}
                },
                {
                  label: "Close",
                  color: "default",
                  closeDialog: true,
                  onClick: () => {}
                }
              ]
            })

            
          }}
        >
          Confirm
        </button>

        <button
          className="m-2 text-white bg-info outline-none p-2"
          onClick={() => {
            let dialog = promptDialog({
              // title: "Message",
              // message: "Hello World",
              isLoading: true,
              hideButtons: true,
            })

            setTimeout(() => {
              console.log("close");
              closeDialog(dialog);
            }, 2000)
          }}
        >
          Load
        </button>
      </div>
    </div>
  );
}

export default App;
