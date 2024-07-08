// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [finalBill, setFinalBill] = useState(
    "This is where the bill should appear"
  );
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setFinalBill("okay");
  };
  return (
    <div>
      <Bill onChange={handleOnChange} />
      <h2>{finalBill}</h2>
    </div>
  );
}

function Bill({ onChange }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input onChange={onChange} />
    </div>
  );
}

export default App;
