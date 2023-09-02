import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation/navigation";
import { Header } from "./components/Navbar/header";
import "./App.css";
import JsonData from "./data/data.json";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
    </div>
  );
};
export default App;