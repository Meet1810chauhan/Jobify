import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";


const HeroSection = () => {
  const details = [
    { id: 1, title: "1,23,441", subTitle: "Live Jobs", icon: <FaSuitcase /> },
    { id: 2, title: "91,220", subTitle: "Companies", icon: <FaBuilding /> },
    { id: 3, title: "2,34,200", subTitle: "Job Seekers", icon: <FaUsers /> },
    { id: 4, title: "1,03,761", subTitle: "Employers", icon: <FaUserPlus /> },
  ];

  return (
    <section className="heroSection">
      <div className="heroContainer">
        <div className="heroText">
          <h1>Find a job that suits</h1>
          <h1 className="highlight">your interests and skills</h1>
          <p>
            Discover thousands of jobs across industries and roles tailored to your strengths and passion.
          </p>
        </div>
        <div className="heroImage">
          <img src="/heroS.jpg" alt="hero" />
        </div>
      </div>

      <div className="statsContainer">
        {details.map((item) => (
          <div className="statsCard" key={item.id}>
            <div className="icon">{item.icon}</div>
            <div className="text">
              <p className="count">{item.title}</p>
              <p className="label">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
