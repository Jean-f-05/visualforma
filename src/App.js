import React from "react";
import Header from "./layout/Header/Header/Header";
import Main from "./layout/Main/Main";
import styles from "./App.module.css";

const App = () => {
  return (
    <React.Fragment>
      <Header className={styles.header}></Header>
      <Main></Main>
    </React.Fragment>
  );
};

export default App;
