import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJqueryLogo,
  DiDjango,
  DiPostgresql,
  DiMysql,
  DiRedis,
  DiAws,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSolid,
  SiSolidity,
  SiEthereum,
  SiBinance,
  SiAvajs,
  SiBitcoin,
  SiTailwindcss,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiVuedotjs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiRedis />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiEthereum />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiBinance />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <SiBitcoin />
      </Col>
    </Row>
  );
}

export default Techstack;
