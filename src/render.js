import { Link } from "react-router-dom";

const tahoe_peaks = [
  { name: "Dev", elevation: 2312 },
  { name: "Deepak", elevation: 123 },
  { name: "Bhuvi", elevation: 456 }
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}> {renderItem(item)}</li>
      ))}
    </ul>
  );
}

export function NestedLinks() {
  return <p>This Is NestedLinks</p>;
}

function Render() {
  return (
    <div>
      <nav>
        <Link to="/Fetch">Fetch</Link>
        <Link to="/Test">Test</Link>
      </nav>
      <List
        data={tahoe_peaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation} ft.
          </>
        )}
      />
    </div>
  );
}

export default Render;
