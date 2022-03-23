import Link from 'next/link';
import tw from 'twin.macro';

interface Headings {
  text: string;
  link: string;
  headNumber: string;
}
const ItemContainer = tw.ul``;
const ItemLink = tw.a` block underline`;
const Item = tw.li`px-2 mb-2`;
export const TableOfContent = ({ content }: { content: string }) => {
  const getHeadings = (source: any) => {
    const regex = /<h[0-6].*?\>(.*?)<\/.\d?>/g;

    let headings: Headings[] = [];
    let m;

    while ((m = regex.exec(source)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      const tagHead = {
        text: '',
        link: '',
        headNumber: '',
      };

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        // Head Number
        if (groupIndex === 0) {
          const headNumber = match.match(/h(\d)/i);
          if (headNumber)
            tagHead.headNumber = headNumber[0]
              .toLowerCase()
              .replace('h', '');
        }

        // Add Text
        if (groupIndex === 1) {
          tagHead.text = match;

          // Make Link
          tagHead.link = `#${tagHead.text
            .replaceAll(' ', '_')
            .toLowerCase()}`;

          headings.push(tagHead);
        }
      });
    }

    return headings;
  };

  const headings = getHeadings(content);

  return (
    <section className="relatvie mt-20 block">
      <div className="rotateText absolute flex -rotate-180 -translate-x-10 h-fit text-onion text-2xl ">
        Table Of Content
      </div>
      <ItemContainer>
        {headings.map((item, key) => {
          return (
            <Item key={key + item.link}>
              <ItemLink
                href={item.link}
                className={` ${
                  +item.headNumber == 2 && 'pl-4 opacity-90'
                } ${+item.headNumber >= 3 && 'pl-8 opacity-80'}`}
              >
                {item.text}
              </ItemLink>
            </Item>
          );
        })}
      </ItemContainer>
    </section>
  );
};
