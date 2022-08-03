import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";

import data from "./db.json";
function App() {
  const [data1, setdata1] = useState(data);
  function handleAsc() {
    let data2 = data1.sort((a, b) => {
      if (a.first_name > b.first_name) return 1;
      else return -1;
    });
    setdata1([...data2]);
  }
  function handleDec() {
    let data2 = data1.sort((a, b) => {
      if (a.first_name > b.first_name) return -1;
      else return 1;
    });
    setdata1([...data2]);
  }
  return (
    <div className="App" data-testid="app">
      <button
        data-testid="sort-asc-btn"
        onClick={() => {
          handleAsc();
        }}
      >
        Sort by Asc
      </button>
      <button
        data-testid="sort-desc-btn"
        onClick={() => {
          handleDec();
        }}
      >
        Sort by Desc
      </button>
      {/*  map through the users data and pass props to the Userdetails component */}
      {data1.map((item) => {
        return <UserDetails className="hoverkar" item={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
