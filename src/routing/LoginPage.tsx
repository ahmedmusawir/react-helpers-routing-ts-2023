import { Navigate } from "react-router-dom";
import { Container, Row, Box } from "../components/layouts";
import useAuth from "./hooks/useAuth";

const LoginPage = () => {
  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"prose"}>
        <h1 className="h1">Login Page: Private Route</h1>
        <h2 className="h2">
          Private page locked by using the Demo Auth Hook & redirected to login
          page by react-router-dom {`{user: null}`}
        </h2>
      </Row>
    </Container>
  );
};

export default LoginPage;
