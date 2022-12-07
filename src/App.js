import FillButton from "./buttons/FillButton";
import OutlineButton from "./buttons/OutlineButton";
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoadingButton from "./buttons/LoadingButton";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">
        Change branch for components
      </h1>
      <div className="flex flex-wrap">
        <FillButton
          text="Click Me!"
          color="info"
          corner="rounded"
          elevate
          style="m-2"
          icon={<i className="fas fa-coffee" />}
          onPress={() => alert("Clicked!")}
        />

        <FillButton
          text="Click Me!"
          color="danger"
          style="m-2"
          iconPosition="top"
          icon={<i className="fas fa-coffee" />}
        />

        <FillButton
          text="Click Me!"
          color="warning"
          corner="rounded-full"
          style="m-2"
          iconPosition="bottom"
          icon={<i className="fas fa-coffee" />}
        />

        <FillButton
          text="Click Me!"
          color="success"
          corner="rounded"
          style="m-2"
          iconPosition="right"
          icon={<i className="fas fa-coffee" />}
        />
      </div>

      <div className="flex flex-wrap">
        <FillButton
          color="info"
          corner="rounded"
          elevate
          icon={<i className="fas fa-coffee" />}
          style="m-2"
        />

        <FillButton
          text="Click Me!"
          color="danger"
          style="m-2"
        />
      </div>

      <div className="flex flex-wrap">
        <OutlineButton
          text="Click Me!"
          color="info"
          corner="rounded"
          elevate
          style="m-2"
          icon={<i className="fas fa-coffee" />}
        />

        <OutlineButton
          text="Click Me!"
          color="danger"
          style="m-2"
        />

        <OutlineButton
          text="Click Me!"
          color="warning"
          corner="rounded-full"
          style="m-2"
        />

        <OutlineButton
          text="Click Me!"
          color="success"
          corner="rounded"
          style="m-2"
        />
      </div>

      <div className="flex flex-wrap">
        <LoadingButton
          loading
          color="info"
          corner="rounded"
          elevate
          icon={<i className="fas fa-coffee" />}
          style="m-2"
        />
      </div>
    </div>
  );
}

export default App;
