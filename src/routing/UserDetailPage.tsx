import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log({ params });
  console.log(searchParams.toString());
  console.log(searchParams.get("name"));
  console.log({ location });

  return (
    <Main>
      <Container
        FULL={false}
        pageTitle="Routing"
        className={"bg-gray-100 border-2 border-red-400"}
      >
        <Box className="p-5 prose max-w-none">
          <h2>User ID: {params.id}</h2>

          <h3 className="h3">
            A few react-router-dom hooks:
            <div className="mockup-code">
              <pre data-prefix="">
                <code>
                  {`   
                import { useParams, useSearchParams } from "react-router-dom";
                import { Box, Container, Main } from "../components/layouts";
                
                const UserDetailPage = () => {
                  const params = useParams();
                  // THE FOLLOWING SHOULD BE CALLED INSIDE EVEN HANDLERS OR
                  // UNDER USE EFFECT SINCE THIS ONE HAS SIDE EFFECTS
                  const [searchParams, setSearchParams] = useSearchParams();
                
                  console.log({ params });
                  console.log(searchParams.toString());
                  console.log(searchParams.get("name"));

                  //LOCATION HOOK DISPLAYS:
                  const location = useLocation();

                  //OUTPUT
                  location:
                  {
                    "pathname": "/users/3",
                    "search": "?name=alice",
                    "hash": "",
                    "state": null,
                    "key": "default"
                  }
                
                `}
                </code>
              </pre>
            </div>
          </h3>
        </Box>
      </Container>
    </Main>
  );
};

export default UserDetailPage;
