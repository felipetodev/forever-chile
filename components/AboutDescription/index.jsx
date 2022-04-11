import { AboutTitle } from "./styles";

const AboutDescription = ({ title, description }) => {
  return (
    <div className="container">
      <AboutTitle>
        <h2>
          {title}
        </h2>
        <div className="empty1" />
        <div className="empty2" />
        <p>
          {description}
        </p>
      </AboutTitle>
    </div>
  );
};

export default AboutDescription;
