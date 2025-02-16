import Desc from "../../UI/about/Desc";

import TheTitle from "../../UI/about/TheTitle";
import PropTypes from "prop-types";

const AboutTitle = () => {
  const railwayInfo = [
    {
      title: "Egyptian National Railways Authority",
      description: "The Egyptian National Railways Authority, also known as ENR, is a government agency under the Ministry of Transport. It owns and operates the Egyptian railway network, which is the second oldest in the world after the British railways."
    },
    {
      title: "Infrastructure and Challenges",
      description: "The Egyptian railway infrastructure has suffered from neglect, maintenance issues, and lack of modernization over decades. This has led to severe deterioration and several major accidents. A large-scale project is currently underway to replace locomotives and carriages, renew tracks and stations, electrify lines, improve signaling, and build new stations."
    },
    {
      title: "Rail Network Length",
      description: "As of 2021, the total length of the railway network is approximately 9,570 km, with around 4,872 km forming the main longitudinal lines. The network includes more than 705 stations and blocks, including twenty main stations located in provincial capitals across the Delta, Canal, and Upper Egypt regions."
    },
    {
      title: "Main Stations",
      description: "The railway network connects key urban and economic centers in Egypt, including ports on the Red Sea and Mediterranean, raw material shipping centers, factories, and most major cities. This extensive network spans over 1,000 kilometers across the country."
    },
    {
      title: "Importance of the Railway Network",
      description: "The railway lines connect various urban and industrial centers throughout Egypt, including major ports on the Red Sea and Mediterranean, as well as shipping centers and factories. The network serves all major cities and centers in Egypt."
    },
    {
      title: "History",
      description: "Egyptian Railways was the first railway system to be established in Africa and the Middle East, and the second in the world after the United Kingdom. The construction of the railway started in 1834, with tracks being laid between Alexandria and Suez, but the project was interrupted due to political objections from France. The project was revived 17 years later in 1851."
    },
    {
      title: "The Beginning of Egyptian Railways",
      description: "The first railway line in Egypt was established on July 12, 1851, and started operations in 1854. The project was overseen by British engineer Robert Stephenson."
    }
  ];
  
  return (
    <div className="w-[90%] mx-auto my-2 flex flex-col gap-1">
      {railwayInfo.map((i,index)=>{
        return(
       <div key={index}> 
        <TheTitle tit={i.title} />
        <Desc des={i.description} />
        <div className="border border-sky-100 m-2"/>
       </div>        
        )
      })}.
    
    </div>
  );
};

AboutTitle.propTypes = {
  tit: PropTypes.string,
  des: PropTypes.string,
};

export default AboutTitle;


