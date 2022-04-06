import { NextPage } from 'next';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import { useEffect } from 'react';
import { revealAnimation, projectAnimation, imageAnimation } from 'helper';
import { Projects } from '@includes/projects';

const Cover = tw.figure` h-[400px] md:h-[100vh]  w-[30%] overflow-hidden mx-auto sticky top-0`;
const IntroSection = tw.section`mt-10 z-0 md:min-h-[100vh] min-h-[100px]`;
const IntroWrap = tw.div`md:w-[80%] w-[90%] text-center mx-auto mt-40 z-10 relative mix-blend-difference`;
const FirstListWrap = tw.ul`z-10 relative text-center text-2xl h-[200px] text-white`;
const FirstListItem = tw.li`text-4xl font-display`;
const SkillContainer = tw.section`grid grid-cols-5 gap-5 h-screen relative items-center`;
const SkillList = tw.ul`list-disc`;
const SkillItem = tw.li``;
const About: NextPage = () => {
  useEffect(() => {
    revealAnimation();
    projectAnimation();
    imageAnimation();
  }, []);
  return (
    <div>
      <IntroSection className="gs_reveal">
        <IntroWrap>
          <div className="text-[14px] text-center text-gray-500 mb-4">
            1401
          </div>
          <h1 className="mx-10 text-2xl md:text-[6rem] mb-4 text-center font-display text-skyly dark:text-white">
            Rick Forlan
          </h1>
        </IntroWrap>
        <Cover className="hero_cover">
          <Image
            src="/mockup/pexels-maxim-klemedinov-10071187.jpg"
            layout="fill"
            alt="me"
            className="parallax object-cover"
          />
        </Cover>

        <FirstListWrap className="">
          <FirstListItem>Husband</FirstListItem>
          <FirstListItem>Cat Dad</FirstListItem>
          <FirstListItem>Developer</FirstListItem>
          <FirstListItem>Bussines Consoultant</FirstListItem>
        </FirstListWrap>
      </IntroSection>

      <Projects />

      <SkillContainer className="skill gs_change-to-dark">
        <h2 className="text-center col-span-3 text-4xl font-display">
          Skills
        </h2>
        <SkillList className="skill_ul">
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>HTML 5</SkillItem>
          <SkillItem>Laravel</SkillItem>
          <SkillItem>Product Design</SkillItem>
          <SkillItem>Wordpress</SkillItem>
          <SkillItem>Adobe XD</SkillItem>
          <SkillItem>Adobe Photoshop</SkillItem>
          <SkillItem>Figma</SkillItem>
        </SkillList>
      </SkillContainer>
    </div>
  );
};

export default About;
