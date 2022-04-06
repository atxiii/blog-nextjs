import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const imageAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let parallax: any;
  let heroCover: any;

  // Parallax cover
  gsap.utils.toArray('img.parallax').forEach((section: any, i) => {
    parallax = gsap.fromTo(
      section,
      {
        y: -150,
      },
      {
        scrollTrigger: {
          trigger: section.parentElement,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.2,
          markers: false,
        },
        y: 0,
        ease: 'none',
      },
    );
  });

  // Hero Cover
  gsap.utils.toArray('.hero_cover').forEach((cover: any, i) => {
    heroCover = gsap.to(cover, {
      scrollTrigger: {
        trigger: cover.parentElement,
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 0.1,
      },
      width: '100%',
    });
  });

  return () => {
    heroCover.kill();
    parallax.kill();
  };
};
