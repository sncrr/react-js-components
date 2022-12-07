
export default function ConfirmDialog ({close}) {

  return(
    <div className="fixed flex top-0 left-0 right-0 z-50 w-full h-full justify-center items-center bg-modal transition-all">
      <div className="bg-white rounded-2xl shadow px-24 py-8 max-w-modal">
        <h1 className="text-center font-bold text-xl">Title</h1>
        <p className="text-center my-4">
        Nam semper rhoncus tristique. Maecenas laoreet tellus quis facilisis interdum. Donec pulvinar sed augue id vehicula. Proin in dapibus ex, ut ultricies orci. Sed dapibus dui odio, et sodales ex luctus id. Etiam et dictum tortor. Ut et venenatis quam.
        </p>
        <div className="text-center">
          <button
            className="bg-default active:bg-default-dark text-grey rounded-full shadow-md px-8 py-2 mx-2"
            onClick={close}
          >
            NO
          </button>
          <button
            className="bg-info active:bg-info-dark text-white rounded-full shadow-md px-8 py-2 mx-2"
          >
            YES
          </button>
        </div>
      </div>
    </div>

  )
}