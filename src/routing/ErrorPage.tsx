import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log({ error });

  return (
    <>
      <h1>Oops...</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <span className="badge badge-error">
        {isRouteErrorResponse(error)
          ? error.error?.message
          : "Unexpected error"}
      </span>
    </>
  );
};

export default ErrorPage;
