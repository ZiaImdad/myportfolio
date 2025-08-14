import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8" className="mx-auto text-center">
            <h1 className="display-4 mb-4">My Projects</h1>
            <hr className="t_border my-4 mx-auto" style={{ width: "100px" }} />
            <p className="mb-4">Here are some of my recent works showcasing my skills in web and mobile development.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {dataportfolio.map((data, i) => (
         <Col key={i} xl={12} lg={12} md={12} sm={12} xs={12} className="mb-5 d-flex justify-content-center">


              <div className="portfolio-item">
                <div className="portfolio-img-container">
                  <img src={data.img} alt={data.description} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <p className="portfolio-description">{data.description}</p>
                      <a 
                        href={data.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="portfolio-link"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};