import { Grid, NewContainer, VideoContainer } from "./styles";
import styled from "styled-components"

const workList = [
  {
    src: "/poesia-sin-fin.png",
    slug: "films",
    id: 1,
  },
  {
    src: "/poesia-sin-fin.png",
    slug: "multimedia",
    id: 2,
  },
  {
    src: "/poesia-sin-fin.png",
    slug: "advertising",
    id: 3,
  },
  {
    src: "/poesia-sin-fin.png",
    slug: "3D & Videogames",
    id: 4,
  },
  {
    src: "/poesia-sin-fin.png",
    slug: "Editorial",
    id: 5,
  },
  {
    src: "/poesia-sin-fin.png",
    slug: "Editorial",
    id: 6,
  },
  {
    src: "/poesia-sin-fin.png",
    slug: "3D & Videogames",
    id: 7,
  },
];

const Spacing = styled.div`
  margin-left: 5%;
  @media (max-width: 1070px) {
    display: none;
  }
`

const ListOfWorks = ({ workSection, onClick }) => {
  const result =
    workSection !== "all"
      ? workList.filter((el) => el.slug.toLowerCase() === workSection)
      : workList;

  return (
    <NewContainer>
      <Spacing className="works-spacing" />
      <Grid>
        {result.length > 0 ? (
          result.map((work) => (
            <VideoContainer key={work.id} onClick={onClick}>
              <img src={work.src} alt="team" />
              <div>
                <h3>Poesía sin fin</h3>
                <span>Alejandro Jodorowsky</span>
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
