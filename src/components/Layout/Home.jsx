import React  ,{Fragment}from "react";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
    <section className={classes.home}>
      <div className={classes.content}>
        <p>so , you want to travel to </p>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={classes.explore}>
        <button>Explore</button>
      </div>
    </section>
    </Fragment>
  );
};

export default Home;
