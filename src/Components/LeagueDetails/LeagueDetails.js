import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import "./LeagueDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
const LeagueDetails = (props) => {
  //   console.log(props.data);
  const { idLeague } = props.data;
  const [leagueInfo, setLeagueInfo] = useState([]);
  const {
    strBadge,
    strSport,
    strLeague,
    intFormedYear,
    strCountry,
    strGender,
  } = leagueInfo;

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

  return (
    <div>
      <CardDeck className="leagueDetails border border-dark">
        <Card>
          <Card.Img className="imgStyle" variant="top" src={strBadge} />

          <Card.Body>
            <Card.Title> {strLeague} </Card.Title>
            <Card.Text>
              <div>
                <p>Sports type: {strSport}</p>
                <p>Gender: {strGender}</p>
                <p>
                  Year: {intFormedYear} {strCountry}
                </p>
              </div>
              <Link to={`/league/${idLeague}`}>
                <Button className="btn-warning">
                  {" "}
                  Explore <FontAwesomeIcon icon={faSignInAlt} />{" "}
                </Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default LeagueDetails;
