import "./css/loader.css";

export default function LoadingDialog ({close}) {

  return(
    <div className="fixed flex top-0 left-0 right-0 z-50 w-full h-full justify-center items-center bg-modal transition-all">
      <div className="bg-white rounded-2xl shadow px-24 py-8 max-w-modal">
        <div className="text-center">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p className="text-center my-4">
          Fetching Data...
        </p>
        <div className="text-center">
          <button
            className="bg-info active:bg-info-dark text-white rounded-full shadow-md px-8 py-2 mx-2"
            onClick={close}
          >
            OK
          </button>
        </div>
      </div>
    </div>

  )
}