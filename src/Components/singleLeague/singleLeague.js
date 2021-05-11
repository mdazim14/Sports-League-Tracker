import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleLeague.css";
import male from "../../Images/male.png";
import female from "../../Images/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFlag,
  faFutbol,
  faLayerGroup,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

const SingleLeague = () => {
  const { id } = useParams();
  const [leaguesInfo, setLeaguesInfo] = useState({});

  const {
    strBadge,
    strSport,
    strLeague,
    intFormedYear,
    strCountry,
    strGender,
    strFacebook,
    strTwitter,
    strYoutube,
  } = leaguesInfo;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeaguesInfo(data.leagues[0]);
        console.log(data.leagues[0]);
      });
  }, [id]);

  console.log(strFacebook);

  return (
    <div
      style={{
        backgroundColor: "#750439",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="singleImgDiv">
        <img className="singleImage" src={strBadge} alt="" />
      </div>

      <div className="singleCard">
        <div className=" col-md-7">
          <h5 className="" style={{ marginTop: "25px", marginBottom: "20px" }}>
            {strLeague}
          </h5>
          <p>
            {" "}
            <FontAwesomeIcon icon={faFutbol} /> Sports type: {strSport}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLayerGroup} /> Founded: {intFormedYear}
          </p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
          </p>
        </div>
        <div className="conditionalImage  col-md-5  ">
          {strGender === "male" ? (
            <img style={{ width: "100%" }} src={female} alt="" />
          ) : (
            <img style={{ width: "100%" }} src={male} alt="" />
          )}
        </div>
      </div>
      <div className="paragraphStyle">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          repellat quo nostrum accusamus laborum omnis necessitatibus et vel
          enim itaque provident quasi dicta repudiandae alias assumenda non
          soluta rem? Odit voluptates recusandae eos delectus ut facilis eveniet
          obcaecati minus esse ducimus, aliquid quo dolorum voluptate labore ex
          cumque doloremque ipsa harum nesciunt totam temporibus? Voluptatem
          provident error, possimus veritatis, dignissimos commodi omnis vitae
          nisi soluta qui distinctio, minima voluptatibus doloribus velit
          explicabo accusamus exercitationem esse consequuntur pariatur cum sint
          quibusdam architecto eaque?
        </p>
        <p>
          Quos exercitationem quia officiis suscipit non enim, natus doloribus,
          quibusdam necessitatibus id delectus numquam vitae molestiae nisi?
          Officiis assumenda dolores culpa minus dolorem quibusdam laudantium
          iure odit enim. Vel iure minus laborum possimus esse, maiores
          doloribus? Ipsam, eveniet iusto vitae non necessitatibus animi
          accusantium eligendi? Explicabo, in odit!
        </p>
      </div>
      <div className="iconStyle">
        <a href={`https://${strFacebook}`} target="_blank" rel="noReferrer">
          {" "}
          <FontAwesomeIcon icon={faFacebook} />{" "}
        </a>

        <a href={`https://${strTwitter}`} target="_blank" rel="noReferrer">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>

        <a href={`https://${strYoutube}`} target="_blank" rel="noReferrer">
          {" "}
          <FontAwesomeIcon icon={faYoutube} />{" "}
        </a>
      </div>
    </div>
  );
};

export default SingleLeague;
