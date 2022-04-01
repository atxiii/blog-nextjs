import React from 'react';
import tw from 'twin.macro';
import { decode } from 'html-entities';

interface Headings {
  text: string;
  link: string;
  headNumber: string;
}

const TableOfContentWrapper = tw.section``;
const ItemContainer = tw.ul`mb-20 list-none!`;
const ItemLink = tw.a` block underline dark:text-white! text-black!  `;
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
          tagHead.text = decode(match);

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
    <TableOfContentWrapper>
      <div className="font-bold flex text-lg mb-5 font-display text-black dark:text-white text-lg md:text-3xl">
        Table Of Contents
      </div>
      <ItemContainer>
        {headings.map((item, key) => {
          return (
            <Item key={key + item.link}>
              <ItemLink
                href={item.link}
                className={` ${+item.headNumber == 2 && 'pl-4'} ${
                  +item.headNumber >= 3 && 'pl-8 '
                }`}
              >
                {item.text}
              </ItemLink>
            </Item>
          );
        })}
      </ItemContainer>
    </TableOfContentWrapper>
  );
};
