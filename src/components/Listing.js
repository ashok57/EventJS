import Card from "./Card";
export default function List({ data }) {
  return (
    <div>
      {data.length !== 0 ? (
        data.map((obj) => <Card {...obj} />)
      ) : (
        <div>
          <h1 style={{ color: "red" }}>No Events Today</h1>
        </div>
      )}
    </div>
  );
}
