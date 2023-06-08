import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Classess from "../Classess/Classess";
import Instructor from "../Instructor/Instructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> | HOME</title>
      </Helmet>
      <Banner></Banner>
      <Classess></Classess>
      <Instructor></Instructor>
      {/* TODO: one extra section */}
    </div>
  );
};

export default Home;
