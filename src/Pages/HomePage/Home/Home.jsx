import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Classess from "../Classess/Classess";
import Instructor from "../Instructor/Instructor";
import TopStudents from "../TopStudents/TopStudents";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SPEAK ACADEMY | HOME</title>
      </Helmet>
      <Banner></Banner>
      <Classess></Classess>
      <Instructor></Instructor>
      <TopStudents></TopStudents>
      {/* TODO: one extra section */}
    </div>
  );
};

export default Home;
