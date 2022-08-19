import React from "react";

export const Dashboard = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((datum) => {
          return <li key={datum.id}>{datum.title}</li>;
        })}
      </ul>
    </div>
  );
};
