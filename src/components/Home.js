import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

const Home = () => {

   const data = { name : "E-Shop"};

    return <>
      <HeroSection myData={data}/>
      <Services />
      <Trusted />
    </>
  };

  
  export default Home;