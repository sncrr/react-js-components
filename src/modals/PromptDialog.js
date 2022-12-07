import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import "./css/dialog-loader.css";

const body = document.querySelector("body");

export function promptDialog ({
  title,
  message,
  buttons,
  isLoading,
  hideButtons,
}) {
  let dialogId = new Date().valueOf();
  let dialog = null;

  let bodyStyle = body.style.overflow;
  body.style.overflow = "hidden";

  dialog = document.createElement('div');
  dialog.id = `dialog-${dialogId}`;
  
  ReactDOM.createRoot(dialog).render(
    <Dialog
      close={() => {
        closeDialog({
          dialog: dialog,
          bodyStyle: bodyStyle
        })
      }}
      title={title}
      message={message}
      buttons={buttons}
      isLoading={isLoading}
      hideButtons={hideButtons}
    />
  );
  document.body.appendChild(dialog);

  return {
    dialog: dialog,
    bodyStyle: bodyStyle
  };
}

export function closeDialog ({dialog, bodyStyle}) {
  body.style.overflow = bodyStyle;
  document.body.removeChild(dialog);
}

function Dialog (props) {
  function getButtonClassName (color) {
    let colorCss = color === "success" ? "bg-success active:bg-success-dark text-white" 
      : color === "warning" ? "bg-warning active:bg-warning-dark text-white" 
      : color === "danger" ? "bg-danger active:bg-danger-dark text-white" 
      : color === "cancel" ? "bg-cancel active:bg-cancel-dark text-white" 
      : color === "info" ? "bg-info active:bg-info-dark text-white"
      : "bg-default active:bg-default-dark text-gray-500"
    
    let className = `text-grey rounded-full shadow-md px-8 py-2 m-1 transition ${colorCss}`;

    return className;
  }

  return(
    <div className="fixed flex top-0 left-0 right-0 z-50 w-full h-full justify-center items-center bg-modal transition-all">
      <div className="bg-white rounded-2xl shadow p-8 max-w-modal min-w-modal">
        
        {/* Title */}
        {
          props.title ? (
            <h1 className="text-left font-bold text-xl">
              {props.title}
            </h1>
          ) : null
        }


        {/* Loader */}
        {
          props.isLoading ? (
            <div className="text-center mt-4">
              <div className="dialog-loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : null
        }

        {/* Message */}
        {
          props.message ? (
            <p className="text-left mt-4">
              {props.message}
            </p>
          ) : null
        }


        {
          !props.hideButtons ? (
            <div className='mt-4 text-right'>
              {
                props.buttons && props.buttons.length > 0 ? (
                  props.buttons.map((item, index) => {
    
                    return (
                      <button
                        key={`confirm_button_${index.toString()}`}
                        className={getButtonClassName(item.color)}
                        onClick={() => {
                          item.onClick();
                          if(item.closeDialog) {
                            props.close();
                          }
                        }}
                        autoFocus
                      >
                        {item.label}
                      </button>
                    )
                  })
                ) : (
                  <>
                    <button
                      className="bg-info active:bg-info-dark text-white rounded-full shadow-md px-8 py-2 m-1 transition"
                      onClick={props.close}
                      autoFocus
                    >
                      Ok
                    </button>
                  </>
                )
              }
            </div>
          ) : (
            // Blank button to focus on dialog
            <button autoFocus></button>
          )
        }
      </div>
    </div>

  )
}

promptDialog.defaultProps = {
  buttons: []
}

promptDialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array,
  isLoading: PropTypes.bool,
  hideButtons: PropTypes.bool,
}
