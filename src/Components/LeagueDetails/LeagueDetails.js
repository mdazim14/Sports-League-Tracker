import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import "./LeagueDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
const LeagueDetails = (props) => {
  //   console.log(props.data);
  const { idLeague } = props.data;
  const [leagueInfo, setLeagueInfo] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.leagues[0]);
        setLeagueInfo(data.leagues[0]);
      });
  }, [idLeague]);
  const {
    strBadge,
    strSport,
    strLeague,
    intFormedYear,
    strCountry,
    strGender,
  } = leagueInfo;
  // console.log(leagueInfo);

  return (
    <div>
      <CardDeck className="leagueDetails border border-dark">
        <Card  style={{ padding: "30px", height: "500px"}}>
          <Card.Img style={{height: "200px"}} variant="top" src={strBadge} />

          <Card.Body>
            <Card.Title> {strLeague} </Card.Title>
            <Card.Text>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p>Sports type: {strSport}</p>
                <p>Gender: {strGender}</p>
                <p>Year: {intFormedYear}</p>
              </div>
            </Card.Text>
          </Card.Body>
          
            <Button  className="btn-warning"> Explore <FontAwesomeIcon icon={faSignInAlt} /> </Button>
          
        </Card>
      </CardDeck>
    </div>
  );
};

export default LeagueDetails;
