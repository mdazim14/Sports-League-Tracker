import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import LeagueDetails from "../LeagueDetails/LeagueDetails";
const Home = () => {
  const [league, setLeague] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeague(data.leagues);
        console.log(data.leagues);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <div
        style={{
          display: "flex",
          backgroundColor: "lightblue",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {league.map((data) => (
          <LeagueDetails data={data}></LeagueDetails>
        ))}
      </div>
    </div>
  );
};

export default Home;
