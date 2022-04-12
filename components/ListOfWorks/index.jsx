import { Grid, NewContainer, VideoContainer } from "./styles";
import styled from "styled-components";

const Spacing = styled.div`
  margin-left: 5%;
  @media (max-width: 1070px) {
    display: none;
  }
`;

const ListOfWorks = ({ workSection, setIsOpen, setModalWork }) => {
  const handleWorkClick = (work) => {
    setIsOpen(true)
    setModalWork(work)
  }

  return (
    <NewContainer>
      <Spacing className="works-spacing" />
      <Grid>
        {workSection?.length > 0 ? (
          workSection?.map((work) => (
            <VideoContainer key={work?.sys?.id} onClick={() => handleWorkClick(work)}>
              <img src={work?.workImage?.url} alt={work?.title} />
              <div>
                <h3>{work?.title}</h3>
                <span>{work?.client}</span>
              </div>
            </VideoContainer>
          ))
        ) : (
          <span>{`Were sorry, there is no content in "${workSection}" section`}</span>
        )}
      </Grid>
      <div className="_3" />
    </NewContainer>
  );
};

export default ListOfWorks;
