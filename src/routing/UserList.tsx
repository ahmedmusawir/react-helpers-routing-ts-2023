import { Link } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";
import "./UserListPage.scss";

const UserList = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <Main>
      <Container FULL={false} pageTitle="Routing" className={"bg-gray-100"}>
        <Box className="prose">
          <ul className="list-group">
            {users.map((user) => (
              <li className="list-group-item" key={user.id}>
                <Link to={`/users-cols/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Main>
  );
};

export default UserList;
