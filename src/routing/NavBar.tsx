import { ReactNode } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  const match = useMatch(to);
  const activeClass = match ? "text-white" : "";

  // console.log({ to });
  // console.log({ match });
  // console.log({ activeClass });

  return (
    <li>
      {/* IS ACTIVE DIDN'T WORK WITH V6 */}
      {/* <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-red" : "")}
      > */}
      <NavLink to={to} className={`${activeClass}`}>
        {children}
      </NavLink>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar bg-gray-200 py-2 mb-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="navbar-start">
          <NavLink to="/" className="font-bold text-xl">
            React Router Dom v6.10.0
          </NavLink>
        </div>
        <div id="navbarNav" className="navbar-center">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/users">Users</NavItem>
            <NavItem to="/users-cols">User Details</NavItem>
            <NavItem to="/private">Private</NavItem>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="bg-gray-200 py-2 mb-4">
    //   <div className="container mx-auto px-4 flex items-center justify-between">
    //     <Link to="/">
    //       <a href="#" className="font-bold text-xl">
    //         React Router Dom v6.10.0
    //       </a>
    //     </Link>
    //     <div id="navbarNav" className="space-x-4">
    //       <Link to="/">
    //         <a href="#" className="text-gray-700 hover:text-black active">
    //           Home
    //         </a>
    //       </Link>
    //       <Link to="/users">
    //         <a href="#" className="text-gray-700 hover:text-black">
    //           Users
    //         </a>
    //       </Link>
    //       <Link to="/contact">
    //         <a href="#" className="text-gray-700 hover:text-black">
    //           Contact
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    // <nav
    //   className="navbar navbar-expand-lg"
    //   style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    // >
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       My App
    //     </a>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Users
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
