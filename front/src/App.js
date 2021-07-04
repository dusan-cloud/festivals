import { Container, Nav, Navbar, Button } from "react-bootstrap";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { logout } from "./service/auth";
import Login from "./components/authorization/Login";
import Festivali from "./components/tasks/Festivali";
import Create from "./components/tasks/Create";

function App () {

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
                <Nav.Link as={Link} to="/festivali">
                Festivali
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
                <Route exact path="/festivali" component={Festivali}/>
                <Route exact path="/festivali/create" component={Create}/>
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

  export default App;