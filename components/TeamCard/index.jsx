import Image from "next/image";
import { Description, DescriptionHeader, Paragraph, Timeline, Years } from "./styles"

const TeamCard = ({ name, title, src, description, timeline }) => {
  return (
    <div className="div1 img-container">
      <Image priority quality={100} height={500} width={590} src={src} alt={name} />
      <Description>
        <DescriptionHeader>
          <h3>{name}</h3>
          <span>{title}</span>
        </DescriptionHeader>
        <Paragraph>{description}</Paragraph>
        <Timeline>
          {timeline?.items.map(el => (
            <Years key={el?.sys?.id}>
              <span>{el?.name}</span>
              <span>{el?.year}</span>
            </Years>
          ))}
        </Timeline>
      </Description>
    </div>
  );
};

export default TeamCard;
