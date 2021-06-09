import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

import "./App.css";
import { Col, Row } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import femalesinger from "./assests/femalesinger.png";
import facebook from "./assests/facebook.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  CardDeck,
  Card,
  CardImg,
  CardText,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div
        className="section1"
        style={{
          backgroundImage: `url(${port3})`,
        }}
      >
        <div className="navbarsection">
          <Navbar color="light" light expand="lg" className="transparent">
            <NavbarBrand href="/" className="textheader">
              TATTO's WORLD
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar id="navbar">
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="textfont"
                  >
                    HOME
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    WORK
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    ABOUT
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    STUDIOS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    CONTACT
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div className="botttomsection">
          <Row>
            <div className="col-2">
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>
              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>

              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>

              <div className="imagecontent">
                <div className="imagecontentinside">
                  <img className="socialmediaimage " src={facebook} />
                </div>
              </div>
            </div>

            <div className="col-7">
              <div className="AppDownloadcontent">
                <div className="AppDownload">
                  <Col className="imageapp">dddc</Col>{" "}
                  <Col className="imageapp">ddd</Col>
                  <div></div>
                </div>
              </div>

              <div className="AppDownloadcontent">
                <div className="AppDownload">
                  <Col className="imageapp">dddc</Col>{" "}
                  <Col className="imageapp">ddd</Col>
                  <div></div>
                </div>
              </div>
              <div className="empty"></div>

              <div className="contentparagraph">
                <div className="col-1  imageapp">
                  <div className="imagecontentinside">
                    <img className="socialmediaimage " src={facebook} />
                  </div>
                </div>
                <div className="col-11">
                  <div>
                    <h1 className="textcontentheader"> We DISCOVER</h1>
                  </div>
                  <div>
                    <h3 className="contentparagraphtext">
                      THE NEXT GENERATION OF MUSICSTARS AND{" "}
                    </h3>
                  </div>
                  <div>
                    <h3 className="contentparagraphtext">
                      {" "}
                      GIVE TALENT TH BEST SHOT AT STAR DOM
                    </h3>
                  </div>
                </div>
              </div>

              {/*   <div className="content">
                <div className="col-2 imageapp">
                  <div className="imagecontenttitem">
                    <div className="imagecontentinside">
                      <img className="socialmediaimage " src={facebook} />
                    </div>
                  </div>
                </div>{" "}
                <div className="col-10 imageapp">
                  {" "}
                  <div>
                    <div className="textcontentinside"> We DISCOVER</div>
                    <h3 className="contentparagraph">
                      {" "}
                      THE NEXT GENERATION OF MUSICSTARS AND{" "}
                    </h3>
                    <h3> GIVE TALENT TH BEST SHOT AT STAR DOM</h3>
                  </div>
                </div>{" "}
                <div></div>
              </div> */}
            </div>

            <div className="col-3">dkdkk</div>
          </Row>
        </div>
        {/* 
        <div className="bottomsection">
          <Row>
            <div className="col-2" id="socialmain">
              <div className="socialmediaicons">
                <div className="imagecontent">
                  <img className="socialmediaimage " src={facebook} />
                </div>
                <div className="imagecontent">
                  <img src={facebook} />
                </div>

                <div className="imagecontent">
                  <img src={facebook} />
                </div>

                <div className="imagecontent">
                  <img src={facebook} />
                </div>
              </div>
            </div>

            <Col className="appdwnload">
              <div className="empty"></div>

              <div className="appdwnloaditem">
                <div className="appdwnloaditeminside"></div>
              </div>
              <div className="appdwnloaditem">
                <div className="appdwnloaditeminside"></div>
              </div>
              <div className="empty"></div>

              <div className="content">
                <div className="contentinside">
                  <Row>
                    <div>
                      <div className="imagecontent">
                        <img src={facebook} />
                      </div>{" "}
                      /
                    </div>
                    <div>
                      <div className="textcontentinside"> We DISCOVER</div>
                      <h3 className=""> THE NEXT GENERATION OF MUSICSTARS AND </h3><h3>  GIVE TALENT TH BEST SHOT  AT STAR DOM</h3>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div> */}
      </div>
    </div>
  );
}

export default App;
