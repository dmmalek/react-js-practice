import { useState } from "react";
import Menusdata from "./component/Menudata";
import Menus from "./component/Menus";
import Catagories from "./component/Catagories";

const allCategories = [
  "all",
  ...new Set(Menusdata.map((item) => item.category)),
];

const App = () => {
  const [data, setData] = useState(Menusdata);
  const [catagories, setCatagories] = useState(allCategories);
  const [initialData, setInitialData] = useState(Menusdata);

  const filterItems = (catagory) => {
    if (catagory === "all") {
      setData(initialData);
      return;
    }
    const newItems = initialData.filter((item) => item.category === catagory);
    setData(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h4>Our Menu</h4>
          <div className="underline"></div>
          <Catagories catagory={catagories} filterItems={filterItems} />
          <Menus menuData={data} />
        </div>
      </section>
    </main>
  );
};

export default App;
