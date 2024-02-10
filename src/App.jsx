import { useState } from "react";
import Questdata from "./component/Questdata";
import Question from "./component/Question";

const App = () => {
  const [data, setData] = useState(Questdata);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((data) => {
            return <Question key={data.id} {...data}></Question>;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
