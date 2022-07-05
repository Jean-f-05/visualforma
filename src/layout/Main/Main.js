import React from "react";
import Hero from "../../components/Hero/Hero/Hero";
import NewsCards from "../../components/NewsCards/NewsCard/NewsCard";
import Wrapper from "../../UI/Wrapper/Wrapper";

const Main = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <Wrapper>
        <NewsCards></NewsCards>;
      </Wrapper>
    </React.Fragment>
  );
};

export default Main;
