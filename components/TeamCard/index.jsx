import Image from "next/image";
import { Description, DescriptionHeader, Paragraph, Timeline, Years } from "./styles"

const TeamCard = ({ name, title, src, description }) => {
  return (
    <div className="div1 img-container">
      <Image quality={100} height={500} width={590} src={src} alt={name} />
      <Description>
        <DescriptionHeader>
          <h3>{name}</h3>
          <span>{title}</span>
        </DescriptionHeader>
        <Paragraph>{description}</Paragraph>
        <Timeline>
          {[1, 2, 3].map((el) => (
            <Years key={el}>
              <span>Consectetur adipiscing</span>
              <span>2002</span>
            </Years>
          ))}
        </Timeline>
      </Description>
    </div>
  );
};

export default TeamCard;
