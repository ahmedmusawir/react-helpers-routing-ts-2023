import { Link } from "react-router-dom";
import { Box, Container, Main } from "../components/layouts";

const HomePage = () => {
  return (
    <>
      <Main>
        <Container
          FULL={false}
          pageTitle="Routing"
          className={"bg-gray-100 border-2 border-red-400"}
        >
          <Box className="p-5 prose max-w-none">
            <h3 className="my-5">
              This is the HomePage from the Routing. The App.tsx is taken out.
              And{" "}
            </h3>
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>{`
                import { RouterProvider } from "react-router-dom";
                import router from "./routing/routes";
                
                const root = ReactDOM.createRoot(
                  document.getElementById("root") as HTMLElement
                );
                root.render(
                  <React.StrictMode>
                    <RouterProvider router={router} />
                  </React.StrictMode>
                );
                
                `}</code>
              </pre>
            </div>
            <h3 className="my-5">
              Has been implemented in the index.tsx file. The router.ts file
              looks like the following:
            </h3>

            <div className="mockup-code">
              <pre data-prefix="">
                <code>
                  {`   
                    import { createBrowserRouter } from "react-router-dom";
                    import HomePage from "./HomePage";
                    import UserListPage from "./UserListPage";

                    const router = createBrowserRouter([
                      { path: "/", element: <HomePage /> },
                      { path: "/users", element: <UserListPage /> },
                    ]);

                    export default router;  `}
                </code>
              </pre>
            </div>
            <h3 className="my-5">After refactoring:</h3>
            <div className="mockup-code">
              <pre data-prefix="">
                <code>
                  {`   
                    const router = createBrowserRouter([
                      {
                        path: "/",
                        element: <Layout />,
                        children: [
                          { index: true, element: <HomePage /> },
                          { path: "users", element: <UserListPage /> },
                          { path: "users/:id", element: <UserDetailPage /> },
                          { path: "contact", element: <ContactPage /> },
                        ],
                      },
                    ]);
                    
                    export default router;
                    `}
                </code>
              </pre>
            </div>
            <h3 className="my-5">The Layout:</h3>
            <div className="mockup-code">
              <pre data-prefix="">
                <code>
                  {`   
                    import { Outlet } from "react-router-dom";
                    import NavBar from "./NavBar";
                    
                    const Layout = () => {
                      return (
                        <>
                          <NavBar />
                          <div id="main">
                            <Outlet />
                          </div>
                        </>
                      );
                    };
                    
                    export default Layout;
                    
                    `}
                </code>
              </pre>
            </div>
          </Box>
        </Container>
      </Main>
    </>
  );
};

export default HomePage;
