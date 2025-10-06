// import "./styles.css";

function ToastContainer() {
  return (
    <div className="container">

      <div className="toastContainer">
        <div className='toast'>
        Success <span> x</span>
      </div>
      </div>

      <div className="btn-container">
        <button> Sucess</button>
        <button> Warning</button>
        <button> Error</button>
        <button>Info </button>
      </div>
    </div>
  );
}

export default ToastContainer;
