import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Szymon Klim </span>
            from <span className="purple"> Raclawicka, Warszawa, Poland.</span>
            <br />I am a Self-Motivated, Problem-Solving, Trustable, and
            Passionate Developer.
            <br />
            Especially, web3 and mobile are my favorite fields.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports just like basketball, football,
              volleyball etc.
            </li>
            <li className="about-activity">
              <ImPointRight /> Sloving Mathmatic Problems like Machine Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening the Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Szymon Ad.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
