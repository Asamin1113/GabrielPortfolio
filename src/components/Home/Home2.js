import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillSkype, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import "./Home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce about </span>MYSELF
            </h1>
            <p className="home-about-body">
              <br />
              {/*<br />I am a Full-Stack (Focused on Frontend) & Solidity developer
              who has 8+ years of experiences in web development. Worked with
              several startups and mid to large companies in the fields of
              Sports, Healthcare, B2B, B2C, Fintech, SASS, E-Commerce,
              E-Learning, etc. I have also a rich experience in Blockchain by
              developing the Defi tokens, NFT, membership contract, Marketplace,
              stake, reward and NFT game contracts with Solidity on the EVM such
              as Ethereum, Polygon, Avalanche, and BSC network. Looking forward
              to a great chance with the clients for a long term.*/}
              Szymon is a <strong>full-stack developer (Web, Mobile)</strong>{" "}
              who creates and maintains from small-project to large-one{" "}
              <strong>from scratch</strong> and is familiar with{" "}
              <strong>AI</strong>. Has ability to develop front-end and back-end
              by himself and to have second nature of programmable mathematical
              modeling of object so that he makes a lot of extensibility classes
              in anytime, any project. He possesses a technology of clouding
              computer, is also an excellent driver of web service maintenance.
              Szymon wraps up any businesses clearly and accurately and{" "}
              <strong>collaborates with all development teams</strong> in
              perfect. He can interview web developers to round up ones so that
              only makes the good productions, gives people a plenty of{" "}
              <strong>good feelings</strong>. Some people are envious of keeping
              in touch with him to give them{" "}
              <strong>honest and reliable</strong>. He is serious developer and{" "}
              <strong>burns the midnight oil</strong> for perfect technical
              performance. During 10 years, worked in several companies with
              track records.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  width: "356px",
                  height: "356px",
                  objectFit: "cover",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yoni-ad-70b087255/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="live:.cid.d0b63f6381eea631"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="@mail::yoniad83@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/Wolf Warrior#4624"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiDiscord />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
