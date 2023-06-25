import { Link } from "react-router-dom";

import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            consectetur nobis suscipit sit beatae in pariatur quos qui
            consequuntur. Nisi recusandae deleniti veritatis consequatur alias
            numquam cupiditate iusto libero quae.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
