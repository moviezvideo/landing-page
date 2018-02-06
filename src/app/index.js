import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Logo from "./components/Logo";
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
        </Grid>
      </div>
    );
  }
}

export default App;
