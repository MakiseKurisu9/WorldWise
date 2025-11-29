import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>
      <NavLink to="/product">product</NavLink>
    </div>
  );
}

export default Homepage;
