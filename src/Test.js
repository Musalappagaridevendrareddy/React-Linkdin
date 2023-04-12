import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const [count, upcount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("#000");
  const [Title, SetTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`${Title}, ${color}`);
    SetTitle("");
    setColor("#000");
  };
  // useEffect(() => {
  //   alert(`${Title}, ${color}`)
  // }, [color, Title]);

  return (
    <div className="Test">
      <Link to="/Render">Render</Link>
      <Link to="/Fetch">Fetch</Link>
      <h2>I'm {count}</h2>
      <button onClick={() => upcount(count + 1)}>Click</button>
      <br />
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      <label>{checked ? "Checked" : "Not Checked"}</label>
      <br />
      <form onSubmit={submit}>
        <input
          type="text"
          value={Title}
          placeholder="color Title..."
          onChange={(event) => SetTitle(event.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Test;
