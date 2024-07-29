import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import odineum from "../../Assets/Projects/odineum.png";
import battleformars from "../../Assets/Projects/battleformars_img.png";
import crypto528DAO from "../../Assets/Projects/Crypto528_DAO.png";
import eleven from "../../Assets/Projects/Eleven1.png";
import evilMonkey from "../../Assets/Projects/EvilMonkey.png";
import jenkins from "../../Assets/Projects/jenkins.png";
import onavax from "../../Assets/Projects/onavax_img.png";
import pgbg from "../../Assets/Projects/pgbg_img.png";
import piprotocol from "../../Assets/Projects/piprotocol_img.png";
import radiologex from "../../Assets/Projects/radiologex.jpeg";
import troopers3 from "../../Assets/Projects/troopers3.png";
import nekotoshi from "../../Assets/Projects/nekotoshi_img.png";
import synquote from "../../Assets/Projects/synquote1.png";
import defimagic from "../../Assets/Projects/defimagic_img.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Past <strong className="purple">Works & References</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked in the past.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={odineum}
              isBlog={false}
              title="UW Medicine"
              description="UW Medicine healthcare system"
              demoLink="https://www.uwmedicine.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleformars}
              isBlog={false}
              title="Nahdi"
              description="Wide range of eCommerce services"
              demoLink="https://nahdi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto528DAO}
              isBlog={false}
              title="Signifly"
              description="Digital design and development agency"
              demoLink="https://signifly.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eleven}
              isBlog={false}
              title="Shopee"
              description="Sell by bitcoin"
              demoLink="https://shopee.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evilMonkey}
              isBlog={false}
              title="iHerb"
              description="Wide range of products"
              demoLink="https://iHerb.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title="Wolt"
              description="Supply products"
              demoLink="https://wolt.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onavax}
              isBlog={false}
              title="gigatron"
              description="Department store chain"
              demoLink="https://gigatron.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pgbg}
              isBlog={false}
              title="Kmart"
              description="Retail department stores"
              demoLink="https://kmart.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piprotocol}
              isBlog={false}
              title="Hudson's Bay"
              description="Department store chain"
              demoLink="https://hudsonsbay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radiologex}
              isBlog={false}
              title="Mobile App For Healthcare Developed with React Native"
              description="One App for full healthcare held by radiologex"
              demoLink="https://radiologex.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
