import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { logout } from "./service/auth";
import Login from "./components/authorization/Login";
import Klase from "./components/klase/Klase";

class App extends React.Component {
  render() {
    const jwt = window.localStorage["jwt"];

    if (jwt) {
      return (
        <div>
          <Router>
            <Navbar expand bg="dark" variant="dark">
              <Navbar.Brand as={Link} to="/">
                JWD
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/klase">
                  Klase
                </Nav.Link>
              </Nav>
              <Button onClick={() => logout()}>Logout</Button>
            </Navbar>
            <Container style={{ paddingTop: "10px" }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/login"
                  render={() => <Redirect to="/" />}
                />
                <Route exact path="/klase" component={Klase} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Router>
        </div>
      );
    } else {
      return (
        <Container>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route render={() => <Redirect to="/login" />} />
            </Switch>
          </Router>
        </Container>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
