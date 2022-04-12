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
      section.style.height = window.outerHeight;
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
      scrub: 0.1,
      start: '+=30',
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: '+=3500',
      invalidateOnRefresh: true,
      preventOverlaps: true,
      fastScrollEnd: true,
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
  const changeToDark = gsap.utils.toArray('.gs_change-to-dark');
  const darkTimeline = gsap.timeline({
    defaults: {
      duration: 0.4,
    },
  });

  // show skill content
  darkTimeline
    .to(changeToDark, {
      background: '#000',
      color: '#fff',
      ease: 'none',
      scrollTrigger: {
        id: 'changeToDark',
        trigger: '.gs_change-to-dark',
        start: '-=100',
        end: '10',
        scrub: 0.1,
      },
    })
    .to('.skill__text', {
      scrollTrigger: {
        id: 'skillContent',
        trigger: '.gs_change-to-dark',
        start: '-=100',
        end: '10',
        scrub: 0.1,
      },
      display: 'block',
      y: 0,
    })
    .to('.skill__list', {
      scrollTrigger: {
        id: 'skillList',
        trigger: '.gs_change-to-dark',
        start: '-=100',
        end: '10',
        scrub: true,
      },
      display: 'block',
      y: 0,
      ease: 'power2.inOut',
    });

  //

  // marquee
  const contactList = document.querySelector('.contact-wrapper');
  gsap.set(contactList, { xPercent: 100, yPercent: 0 });

  gsap.to(contactList, {
    xPercent: -150,
    ease: 'none',
    duration: 20,
    repeat: -1,
  });

  return () => {
    ScrollTrigger.getById('projectsCard').kill();
    ScrollTrigger.getById('changeToDark').kill();
    darkTimeline.kill();
    horiz.kill();
  };
};
