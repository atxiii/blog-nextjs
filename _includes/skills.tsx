import tw, { styled } from 'twin.macro';

const SkillContainer = tw.section`border grid md:grid-cols-5 grid-cols-1 gap-0 md:gap-5 h-[600px] relative items-center content-center text-white`;
const SkillList = tw.ul`list-disc hidden`;
const SkillItem = tw.li``;
const SkillExperience = styled.h3`
  ${tw`text-xl absolute top-1/2 font-display -top-4 text-black dark:text-white`}

  &>.number {
    ${tw`text-[200px] font-display `}
    ${`text-shadow:
    1px 1px 0 #000,
  -1px -1px 0 #000,  
  1px -1px 0 #000,
  -1px 1px 0 #000,
  1px 1px 0 #000;
  `}
  }

  & > .year {
    ${tw`block m-20 dark:text-white`}
  }
`;
export const Skills = () => {
  return (
    <SkillContainer className="skill gs_change-to-dark overflow-hidden h-screen static">
      <div className="col-span-3">
        <h2 className="text-center text-4xl font-display skill__text hidden translate-y-10">
          Skills
        </h2>
        <SkillExperience className="gs_reveal">
          <div className="number">10 </div>
          <div className="year">Years of experience</div>
        </SkillExperience>
      </div>
      <SkillList className="skill__list translate-y-20">
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
  );
};
