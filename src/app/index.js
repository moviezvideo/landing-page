import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Logo from "./components/Logo";
import adsIconSvg from "./assets/ads-icon.svg";
import anonymousIconSvg from "./assets/anonymous-icon.svg";
import opensourceIconSvg from "./assets/opensource-icon.svg";
import "./stylesheet.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Grid>
          <Row center="xs">
            <Col xs={12} md={10} lg={8}>
              <Logo />
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12}>
              <h1 className="app__title">
                A easy way to watch your series and movies
              </h1>
            </Col>
          </Row>
          <Row middle="xs" className="app__icons">
            <Col xs={12} sm={7}>
              <Row center="xs" around="xs">
                <Col xs={4} sm={3}>
                  <img
                    src={anonymousIconSvg}
                    className="app__icon"
                    alt="Anonymous"
                  />
                  <p className="app__icon__description">
                    100% safe<br />Without login
                  </p>
                </Col>
                <Col xs={4} sm={3}>
                  <img
                    src={opensourceIconSvg}
                    className="app__icon"
                    alt="Open source"
                  />
                  <p className="app__icon__description">
                    Open source<br />Self-hosted<br />
                  </p>
                </Col>
                <Col xs={4} sm={3}>
                  <img src={adsIconSvg} className="app__icon" alt="No ads" />
                  <p className="app__icon__description">
                    No ads<br />Now and never<br />
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={5}>
              <h2 className="app__form__title">Subscribe now</h2>
              <form
                action="https://video.us17.list-manage.com/subscribe/post?u=a451e5e8f9441bb0fad48306c&amp;id=0112696990"
                method="post"
                target="_blank"
                className="app__form"
              >
                <input
                  type="email"
                  name="EMAIL"
                  required
                  className="app__form__input"
                  placeholder="Enter your email"
                />
                <button type="submit" className="app__form__submit">
                  OK
                </button>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_a451e5e8f9441bb0fad48306c_0112696990"
                    tabindex="-1"
                    value=""
                  />
                </div>
              </form>
              <h3 className="app__form__subtitle">
                And get notified when<br />the service is online!
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="app__footer">
                © 2018 Moviez - All rights reserved.
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
