import { useState } from "react";
import { Grid, NewContainer, VideoContainer } from "./styles";
import styled from "styled-components";
import Modal from "../Modal";

const Spacing = styled.div`
  margin-left: 5%;
  @media (max-width: 1070px) {
    display: none;
  }
`;

const ListOfWorks = ({ workSection }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  /*
  const result =
    workSection !== "all"
      ? workList.filter((el) => el.slug.toLowerCase() === workSection)
      : workList;
  */

  return (
    <NewContainer>
      <Spacing className="works-spacing" />
      <Grid>
        {workSection?.items?.length > 0 ? (
          workSection?.items?.map((work) => (
            <>
              <VideoContainer key={work?.sys?.id} onClick={() => setIsOpen(true)}>
                <img src={work?.workImage?.url} alt="team" />
                <div>
                  <h3>{work?.title}</h3>
                  <span>{work?.client}</span>
                </div>
              </VideoContainer>
              <Modal modalIsOpen={modalIsOpen} infoModal={work} setIsOpen={setIsOpen} />
            </>
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
