import { NavLink } from "react-router-dom";




export default function Navbar () {



    return (<>
    <nav className="navbar bg-body-tertiary text-light" data-bs-theme="dark">
  <form className="container-fluid justify-content-start">
    <NavLink to="/" className="btn btn-outline-success me-2" type="button">Main button</NavLink>
    <NavLink to="/todo" className="btn btn-sm btn-outline-info" type="button">ToDo</NavLink>
  </form>
</nav>

    </>)
};
