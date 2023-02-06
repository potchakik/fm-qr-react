import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div>
          <img className="qr-image" src="./image-qr-code.png" alt="qr-code" />
        </div>
        <div className="text-container">
          <p className="qr-text">
            Improve your front-end skils by building projects.
          </p>
          <p className="qr-text-2">
            Scan the QR code to view Frontend Mentor and take your coding skills
            to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
