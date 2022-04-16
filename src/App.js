import "./App.css";

function App() {
  return (
    <div>
      <div className="container" >
        <div
          className="notification is-primary"
          style={{
            backgroundColor: "#e6820966",
            position: "relative",
            top: "5vh",
          }}
        >
          <h1 className="title is-1 has-text-centered" style={{marginBottom:"10vh"}}>URL Shortener </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              className="input is-warning"
              type="text"
              placeholder="Your URL"
              style={{ width: "90%", borderRadius:"15px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              width: "95%",
              margin: "2vh 0",
            }}
          >
            <button
              className="button is-primary is-light"
              style={{
                backgroundColor: "#ffe08a",
                borderColor: "transparent",
                color: "rgba(0,0,0,.7)",
              }}
            >
              Shorten url
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              className="input is-warning"
              type="text"
              placeholder="Shorten URL"
              style={{ width: "90%",borderRadius:"15px", marginBottom:"5vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
