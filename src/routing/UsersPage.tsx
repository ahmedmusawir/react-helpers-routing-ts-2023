import { Outlet } from "react-router-dom";
import { Box, Row } from "../components/layouts";
import UserList from "./UserList";

function UsersPage() {
  return (
    <Row className={"grid gap-3 grid-auto-fit p-3"}>
      <Box className={"p-3"}>
        <UserList />
      </Box>
      <Box className={"p-3"}>
        <Outlet />
      </Box>
    </Row>
  );
}

export default UsersPage;
