import React, {  useState } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import {JsonDisplayer} from "./components/JsonDisplayer"

export const App = () => {
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [rcvdData, setRcvdData] = useState([]);

  async function getData() {

    let res 
    try {
      let response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userSearchQuery}`
      );
      res = await response.json();
    } catch (e) {
      console.log(e);
    } finally {
       setRcvdData([res]);
      console.log(res)
    }
  }

 

  return (
    <div>
      <div className="">
        <Header />
        <JsonDisplayer />
        <Main />
      </div>
    </div>
  );
};

export default App;
