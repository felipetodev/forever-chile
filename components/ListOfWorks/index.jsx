import { useEffect, useMemo } from "react";
import { Grid, NewContainer, VideoContainer, PdfContainer } from "./styles";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const Spacing = styled.div`
  margin-left: 5%;
  width: min(1200px, 13.5555%) !important;
  @media (max-width: 1888px) {
    width: min(1200px, 5%) !important;
  }
  @media (max-width: 1579px) {
    width: min(250px, 1%) !important;
  }
  @media (max-width: 1070px) {
    display: none;
  }
`;

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ListOfWorks = ({ workVideos, workSection, setIsOpen, setModalWork }) => {
  const router = useRouter();
  const hasParams = Boolean(router.query.project);

  const handleWorkClick = (evt, work) => {
    evt.preventDefault();
    setModalWork(work);
    setIsOpen(true);
    router.push(
      `/work?category=${encodeURIComponent(
        workSection
      )}&project=${encodeURIComponent(work.title)}`
    );
  };

  const videos = useMemo(
    () =>
      workSection === "all"
        ? workVideos
        : workVideos.filter(
            (it) =>
              it?.category?.toLowerCase() === decodeURIComponent(workSection)
          ),
    [workVideos, workSection]
  );

  useEffect(() => {
    if (hasParams) {
      setIsOpen(true);
      setModalWork(
        workVideos.find(
          (el) => el?.title === decodeURIComponent(router.query.project)
        )
      );
    }
  }, [hasParams]);

  return (
    <NewContainer>
      <Spacing className="works-spacing" />
      <Grid>
        <AnimatePresence>
          {videos?.length > 0 ? (
            videos?.map((work) => {
              const isPDF = work?.pdf;
              const Component = isPDF ? PdfContainer : VideoContainer;
              return (
                <Component
                  key={work?.sys?.id}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  target={isPDF ? "_blank" : null}
                  href={isPDF ? work?.pdf?.url : null}
                  onClick={isPDF ? () => {} : (e) => handleWorkClick(e, work)}
                >
                  <Image
                    width={332}
                    height={186}
                    layout="responsive"
                    src={work?.workImage?.url}
                    alt={work?.title}
                  />
                  <div>
                    <h3>{work?.title}</h3>
                    <span>{work?.client}</span>
                  </div>
                </Component>
              );
            })
          ) : (
            <span>{`Were sorry, there is no content published for this section`}</span>
          )}
        </AnimatePresence>
      </Grid>
      <div className="_3" />
    </NewContainer>
  );
};

export default ListOfWorks;
