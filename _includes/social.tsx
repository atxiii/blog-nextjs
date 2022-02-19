import Link from 'next/link';

const Social = () => {
  const socialDetails = [
    { name: 'twitter', link: '#twitter' },
    { name: 'facebook', link: '#facebook' },
    { name: 'github', link: '#git' },
  ];
  return (
    <ul className="rotateText absolute flex rotate-180 translate-x-0">
      {socialDetails.map(item => {
        return (
          <li key={item.name}>
            <Link href={item.link}>
              <a className="p-2 text-slate-500" title={item.name}>
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
