import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import Image from 'next/image';
import { LinkIcon } from './Icons/linkIcon';
// Styles
const ProjectContainer = tw.section`flex flex-nowrap pt-40 h-[100vh]`;
const PorjectCard = styled.div`
  ${tw`w-screen grid md:grid-cols-5 gap-5 relative flex-shrink-0`}

  &.active {
    ${tw`bg-white`}
  }
`;
const ProjectTitle = tw.div`text-lg md:ml-[150px] ml-[105px] flex items-end pb-2 `;
const ProjectCover = tw.figure`pl-20 w-[100%] h-[80%] overflow-hidden mx-auto relative`;
const ProjectDate = tw.span`absolute top-0 left-0 z-50 md:w-[200px] w-[100px] md:h-[200px] h-[100px] md:border-8 border-4 md:text-6xl text-3xl bg-black  border-white text-white rounded rounded-full flex items-center justify-center `;
const ProjectLeftContent = tw.div`md:col-span-3 md:p-20 py-10`;
const ProjectRightContent = tw.div`md:col-span-2`;
const PorjectDetails = tw.ul`h-full overflow-y-scroll mt-20`;
const ProjectDetailsList = styled.li`
  ${tw`mb-10 max-w-[300px]  overflow-y-scroll max-h-[300px] block`}
  h3 {
    ${tw`font-display text-4xl sticky top-2 `}
  }
  p {
    ${tw`text-sm ml-3 mb-3 mt-3`}
  }
`;

export const Projects = () => {
  return (
    <ProjectContainer className="projects">
      <PorjectCard className="projects__card">
        <ProjectLeftContent>
          <ProjectDate>2022</ProjectDate>
          <ProjectTitle>
            <h2 className="font-display md:text-4xl text-2xl">MrCatDev</h2>
            <Link href="https://www.mrcatdev.com">
              <a
                title="mrcatdev"
                className="font-body text-sm ml-auto underline"
              >
                <span className="hidden md:block">Visit Website</span>
                <span className="block md:hidden">
                  <LinkIcon />
                </span>
              </a>
            </Link>
          </ProjectTitle>

          <ProjectCover>
            <Image
              src="/mockup/cover.jpg"
              layout="fill"
              objectFit="cover"
              alt="project"
            />
          </ProjectCover>
        </ProjectLeftContent>
        <ProjectRightContent>
          <PorjectDetails>
            <ProjectDetailsList className="project__details-box ">
              <h3>Technologies</h3>
              <p>JavaScript, Figma</p>
            </ProjectDetailsList>
            <ProjectDetailsList className="project__details-box">
              <h3>My Role</h3>
              <p>FrontEnd, Product Designer</p>
            </ProjectDetailsList>

            <ProjectDetailsList className="project__details-box">
              <h3>Goals</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </ProjectDetailsList>
          </PorjectDetails>
        </ProjectRightContent>
      </PorjectCard>

      <PorjectCard className="projects__card">
        <ProjectLeftContent>
          <ProjectDate>2021</ProjectDate>
          <ProjectTitle>
            <h2 className="font-display text-4xl">Digital Art</h2>
            <Link href="https://www.mrcatdev.com">
              <a
                title="mrcatdev"
                className="font-body text-sm ml-auto underline"
              >
                Visit Website
              </a>
            </Link>
          </ProjectTitle>

          <ProjectCover>
            <Image
              src="/mockup/pexels-arthouse-studio-4320726.jpg"
              layout="fill"
              objectFit="cover"
              alt="project"
            />
          </ProjectCover>
        </ProjectLeftContent>
        <ProjectRightContent>
          <PorjectDetails>
            <ProjectDetailsList className="project__details-box">
              <h3>Technologies</h3>
              <p>JavaScript, Figma</p>
            </ProjectDetailsList>
            <ProjectDetailsList className="project__details-box">
              <h3>My Role</h3>
              <p>FrontEnd, Product Designer</p>
            </ProjectDetailsList>

            <ProjectDetailsList className="project__details-box">
              <h3>Goals</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </ProjectDetailsList>
          </PorjectDetails>
        </ProjectRightContent>
      </PorjectCard>

      <PorjectCard className="projects__card">
        <ProjectLeftContent>
          <ProjectDate>2020</ProjectDate>
          <ProjectTitle>
            <h2 className="font-display text-4xl">Turbo Car</h2>
            <Link href="https://www.mrcatdev.com">
              <a
                title="mrcatdev"
                className="font-body text-sm ml-auto underline"
              >
                Visit Website
              </a>
            </Link>
          </ProjectTitle>

          <ProjectCover>
            <Image
              src="/mockup/pexels-michael-warren-574205.jpg"
              layout="fill"
              objectFit="cover"
              alt="project"
            />
          </ProjectCover>
        </ProjectLeftContent>
        <ProjectRightContent>
          <PorjectDetails>
            <ProjectDetailsList className="project__details-box">
              <h3>Technologies</h3>
              <p>JavaScript, Figma</p>
            </ProjectDetailsList>
            <ProjectDetailsList className="project__details-box">
              <h3>My Role</h3>
              <p>FrontEnd, Product Designer</p>
            </ProjectDetailsList>

            <ProjectDetailsList className="project__details-box">
              <h3>Goals</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </ProjectDetailsList>
          </PorjectDetails>
        </ProjectRightContent>
      </PorjectCard>
    </ProjectContainer>
  );
};
