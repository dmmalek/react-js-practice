import { useState } from "react";
import List from "./component/List";
import Data from "./component/Data";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <div className="container">
        <h3>{people.length} Birthday</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </>
  );
}

export default App;
