import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const animateFrom = (htmlElement: HTMLElement, direction: number) => {
  const axies = { x: 0, y: direction * 100 };
  const htmlClass = htmlElement.classList;

  switch (true) {
    case htmlClass.contains('gs_fromLeft'):
      axies.x = -100;
      axies.y = 0;
      break;

    case htmlClass.contains('gs_fromRight'):
      axies.x = 100;
      axies.y = 0;
      break;

    default:
      break;
  }

  htmlElement.style.transform = `translate(${axies.x}px, ${axies.y}px)`;
  htmlElement.style.opacity = '0';

  gsap.fromTo(
    htmlElement,
    { ...axies, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    },
  );
};

function hide(htmlElement: HTMLElement) {
  gsap.set(htmlElement, { autoAlpha: 0 });
}

export const revealAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let reveal: any;
  // Reveal
  gsap.utils.toArray('.gs_reveal').forEach(function (htmlElement: any) {
    hide(htmlElement); // assure that the element is hidden when scrolled into view

    reveal = ScrollTrigger.create({
      trigger: htmlElement,
      onEnter: function () {
        animateFrom(htmlElement, 1);
      },
      onEnterBack: function () {
        animateFrom(htmlElement, -0.2);
      },
      onLeave: function () {
        hide(htmlElement);
      }, // assure that the element is hidden when scrolled into view
    });
  });

  return () => {
    reveal.kill();
  };
};
