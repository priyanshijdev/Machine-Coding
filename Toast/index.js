// import "./styles.css";
import { useState } from "react";

function ToastContainer() {
  const [show, setShow] = useState(false);
  
  function handleShow() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }
  return (
    <div className="container">
      {show && (
        <div className="toastContainer">
          <div className="toast">
            Success <span onClick={()=> setShow(false)}> x</span>
          </div>
        </div>
      )}

      <div className="btn-container">
        <button onClick={handleShow}> Sucess</button>
        <button> Warning</button>
        <button> Error</button>
        <button>Info </button>
      </div>
    </div>
  );
}

export default ToastContainer;
