import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

export const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div class="container page">
        {/* info */}
        <div class="info">
          <h1>
            Job <span>tracking</span>{" "}
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          consectetur nobis suscipit sit beatae in pariatur quos qui
          consequuntur. Nisi recusandae deleniti veritatis consequatur alias
          numquam cupiditate iusto libero quae.
        </p>
        <button className="btn btn-hero">Login/register</button>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </main>
  );
};
