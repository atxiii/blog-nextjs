import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const projectAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  // Projects
  let projectsCard = gsap.utils.toArray('.projects__card');

  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    projectsCard.forEach((section: any, i: number) => {
      maxWidth += section.offsetWidth;
    });
  };
  getMaxWidth();

  ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

  let horiz = gsap.to(projectsCard, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: 'none',
    scrollTrigger: {
      trigger: '.projects',
      pin: true,
      scrub: true,
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true,
    },
  });

  projectsCard.forEach((project: any, i) => {
    ScrollTrigger.create({
      trigger: project,
      id: 'projectsCard',
      start: () =>
        'top top-=' +
        (project.offsetLeft - window.innerWidth / 2) *
          (maxWidth / (maxWidth - window.innerWidth)),

      end: () =>
        '+=' +
        project.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),

      toggleClass: { targets: project, className: 'active' },
    });
  });

  // change background to black
  gsap.utils.toArray('.gs_change-to-dark').forEach((bg: any, i) => {
    ScrollTrigger.create({
      trigger: bg,
      id: 'changeToDark',
      start: `top 20%`,
      end: `bottom bottom`,
      markers: true,
    });
  });

  return () => {
    ScrollTrigger.getById('projectsCard').kill();
    ScrollTrigger.getById('changeToDark').kill();
    horiz.kill();
  };
};
