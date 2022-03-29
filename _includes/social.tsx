import Link from 'next/link';

interface Links {
  name: string;
  link: string;
}

const Social = ({ links }: { links: Array<Links> }) => {
  return (
    <ul className="rotate-text-vertical-rl z-50 absolute flex rotate-180 translate-x-0">
      {links.map(item => {
        return (
          <li key={item.name}>
            <Link href={item.link}>
              <a
                className="p-2 text-slate-500 cursor-pointer"
                title={item.name}
              >
                {item.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
