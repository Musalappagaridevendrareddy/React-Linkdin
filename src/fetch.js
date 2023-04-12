import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Display(prob) {
  return (
    <div>
      <Link to="/Render">Render</Link>
      <Link to="/Test">Test</Link>
      <h1>{prob.data.name}</h1>
      <p>{prob.data.location}</p>
      <img src={prob.data.avatar_url} height={150} alt={prob.data.name} />
    </div>
  );
}
function Fetch() {
  const [Data, SetData] = useState(null);
  const [Loading, setLoading] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/Musalappagaridevendrareddy`)
      .then((Response) => Response.json())
      .then(SetData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (Loading) return <h1>Loading...</h1>;
  if (Error) return <pre>{JSON.stringify(Error)}</pre>;
  if (!Data) return <h1>Nothing to display</h1>;
  return <Display data={Data} />;
}
export default Fetch;
