import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import Card from "../components/reusables/Card";
import projects from "../data/projects.json";

const OurProjectsPg = () => {
  return (
    <div>
      <Navbar />
      <Card data={projects} />
      <Footer />
    </div>
  );
};

export default OurProjectsPg;
