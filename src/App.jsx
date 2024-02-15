import React, { useState } from "react";
import text from "./component/Globaldata";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const hadleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (8 < count) {
      amount = 8;
    }

    setData(text.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={hadleSubmit}>
        <label htmlFor="amount">Paragraph :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-ipsum">
        {data.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
        ;
      </article>
    </section>
  );
};

export default App;
