import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <header className="primary-header">
    <div className="container container--nav">
        <div className="logo">
         <h1> <Link>Workout</Link></h1>
        </div>
        <nav>
          <ul className="primary-navigation flex">
          </ul>
        </nav>
    </div>
    </header>
     );
}
 
export default Navbar;