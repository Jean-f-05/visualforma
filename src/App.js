import React from "react";
import Header from "./layout/Header/Header/Header";
import styles from "./App.module.css";

const App = () => {
  return (
    <React.Fragment>
      <Header className={styles.header}></Header>
      {/* <Card></Card> */}
    </React.Fragment>
  );
};

export default App;
