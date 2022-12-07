import { confirm, inform, load } from "./modals/Modal";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Change branch for components
      </h1>

      <div>
        <button
          onClick={() => {
            inform("Hello World");
          }}
        >
          Message
        </button>

        <button
          onClick={() => {
            confirm("Hello World");
          }}
        >
          Confirm
        </button>

        <button
          onClick={() => {
            load("Hello World");
          }}
        >
          Load
        </button>
      </div>
    </div>
  );
}

export default App;
