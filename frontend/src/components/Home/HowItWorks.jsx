import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create Account",
      description:
        "Sign up in seconds and get started with a personalized dashboard.",
      path: "/register",
    },
    {
      icon: <MdFindInPage />,
      title: "Find or Post Jobs",
      description:
        "Explore thousands of job listings or post a job as an employer.",
      path: "/job/getall",
    },
    {
      icon: <IoMdSend />,
      title: "Apply or Hire",
      description:
        "Apply to jobs or recruit suitable candidates with one click.",
      path: "/job/getall",
    },
  ];

  return (
    <section className="howItWorks">
      <div className="container">
        <h2>How Jobify Works</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div
              className="stepCard"
              key={index}
              onClick={() => navigate(step.path)}
            >
              <div className="icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
