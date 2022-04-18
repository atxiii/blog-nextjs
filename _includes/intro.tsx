import Image from 'next/image';
import Link from 'next/link';
import Social from './social';
import { customize } from '_api';
const Intro = () => {
  return (
    <section className="flex flex-wrap mt-8 intro relative z-0">
      <div className="left__side max-w-full md:w-1/3 flex sm:flex-1 sm:w-full sm:h-screen md:flex-none -z-50 relative">
        <div className="image md:ml-6 sm:ml-0 relative">
          <Image
            alt="me"
            layout="fill"
            objectFit="cover"
            src="/mockup/rick3.webp"
          />
        </div>
        <Social links={customize.social} />
      </div>

      <div className="right__side md:w-2/3 md:ml-12 sm:ml-0 mt-4 flex-1 -z-50">
        <h1 className="font-display text-4xl leading-normal ">
          Hi, <br />
          I’m Rick, a Business Consultant with over 10 years of experience.
        </h1>

        <Link href="/about">
          <a className="text-onion/70">
            <h2 className="font-display text-4xl text-onion mt-10 mb-4">
              About Me
            </h2>
          </a>
        </Link>
        <p>
          In publishing and graphic design, lorem ipsum is common
          placeholder text used to demonstrate the graphic elements of a
          document or visual presentation, such as web pages, typography,
          and graphical layout. <br />
          In publishing and graphic design, lorem ipsum is common
          placeholder text used to demonstrate the graphic elements of a
          document or visual presentation, such as web pages, typography,
          and graphical layout.
          <br />
        </p>

        <Link href="/blog">
          <a className="text-onion/70">
            <h2 className="font-display text-4xl text-onion mt-10 mb-4">
              I'll Share...
            </h2>
          </a>
        </Link>

        <p>
          I will share graphic design articles, lorem ipsum is common
          placeholder text used to demonstrate the graphic elements of a
          document or visual presentation, such as web pages, typography,
          and graphical layout. In publishing and graphic design, lorem
          ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation, such as web pages,
          typography, and graphical layout.
        </p>
      </div>
    </section>
  );
};
export default Intro;
