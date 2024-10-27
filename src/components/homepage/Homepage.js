import React from "react";
import HomepagePageSecondScreen from "./HomePageSecondScreen";
import HomePageThirdScreen from "./HomePageThirdPage";
import HomePageFourthScreen from "./HomePageFourthScreen";
import HomePageFifthScreen from "./HomePageFifthScreen";
import HomePageFirstScreen from "./HomePageFirstScreen";
import HomePageSixthScreen from "./HomePageSixthScreen";
import HomePageSeventhScreen from "./HomePageSeventhScreen";
import HomePageEigthScreen from "./HomePageEigthScreen";
import HomePageNinthScreen from "./HomePageNinthScreen";
import PricingPage from "../PricingPage";


const Homepage = () => {
  return (
    <div>
      <HomePageFirstScreen/>
      <HomepagePageSecondScreen/>
      <HomePageThirdScreen/>
      <HomePageFourthScreen/>
      <HomePageFifthScreen/>
      <HomePageSixthScreen/>
      <HomePageSeventhScreen/>
      <HomePageEigthScreen/>
      <PricingPage/>
      <HomePageNinthScreen/>
    </div>
  );
};

export default Homepage;
