
import ReactDOM from 'react-dom/client';
import ConfirmDialog from "./ConfirmDialog";
import LoadingDialog from './LoadingDialog';
import MessageDialog from "./MessageDialog";

const body = document.querySelector("body");
let modal = null;

export function confirm () {
  body.style.overflow = "hidden";
  modal = document.createElement('div');
  modal.id = "modal-container";
  ReactDOM.createRoot(modal).render(<ConfirmDialog close={clearModal} />);
  document.body.appendChild(modal);
}

export function inform () {
  body.style.overflow = "hidden";
  modal = document.createElement('div');
  modal.id = "modal-container";
  ReactDOM.createRoot(modal).render(<MessageDialog close={clearModal} />);
  document.body.appendChild(modal);
}

export function load () {
  body.style.overflow = "hidden";
  modal = document.createElement('div');
  modal.id = "modal-container";
  ReactDOM.createRoot(modal).render(<LoadingDialog close={clearModal} />);
  document.body.appendChild(modal);
}

export function clearModal () {
  body.style.overflow = "auto";
  document.body.removeChild(modal);
}