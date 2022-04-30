import { useEffect, useMemo } from "react";
import { Grid, NewContainer, VideoContainer, PdfContainer } from "./styles";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Spacing = styled.div`
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

const DEFAULT_SECTION = "all";

const ListOfWorks = ({ workVideos, workSection, setModalWork }) => {
  const router = useRouter();
  const hasParams = Boolean(router.query.project);

  const videos = useMemo(
    () =>
      workSection === DEFAULT_SECTION
        ? workVideos
        : workVideos.filter(
            (it) => it?.category?.toLowerCase() === workSection
          ),
    [workVideos, workSection]
  );

  useEffect(() => {
    if (router.isReady && hasParams) {
      setModalWork(workVideos.find((el) => el?.title === router.query.project));
    }
  }, [hasParams]);

  return (
    <NewContainer>
      <Spacing className="works-spacing" />
      <Grid>
        {videos?.length > 0 ? (
          videos?.map((work) => {
            const isPDF = Boolean(work?.pdf);
            return (
              <AnimatePresence key={work?.sys?.id}>
                {isPDF ? (
                  <PdfContainer
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    target="_blank"
                    href={work?.pdf?.url}
                    alt={work?.title}
                  >
                    <Image
                      layout="fill"
                      className="work-image"
                      objectFit="cover"
                      src={work?.workImage?.url}
                      alt={work?.title}
                    />
                    <div className="work-description">
                      <h3>{work?.title}</h3>
                      <span>{work?.client}</span>
                    </div>
                  </PdfContainer>
                ) : (
                  <Link
                    replace
                    scroll={false}
                    href={{
                      pathname: "/work",
                      query: {
                        category: work?.category,
                        project: work?.title,
                      },
                    }}
                  >
                    <a>
                      <VideoContainer
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                      >
                        <Image
                          layout="fill"
                          className="work-image"
                          objectFit="cover"
                          src={work?.workImage?.url}
                          alt={work?.title}
                        />
                        <div className="work-description">
                          <h3>{work?.title}</h3>
                          <span>{work?.client}</span>
                        </div>
                      </VideoContainer>
                    </a>
                  </Link>
                )}
              </AnimatePresence>
            );
          })
        ) : (
          <span>{`Were sorry, there is no content published for this section`}</span>
        )}
      </Grid>
      <div className="_3" />
    </NewContainer>
  );
};

export default ListOfWorks;
