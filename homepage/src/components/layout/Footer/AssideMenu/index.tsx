import React from "react";

interface SubTitle {
  name: string;
  link?: string;
}

interface AssideMenuProps {
  title: string;
  subTitle: SubTitle[];
}

export const AssideMenu: React.FC<AssideMenuProps> = ({ title, subTitle }) => {
  return (
    <>
      <div className="flex-shrink max-w-full w-1/2 md:w-1/3 mb-6 lg:mb-0">
        <h4 className="text-base leading-normal font-semibold mb-3 uppercase text-gray-800">
          {title}
        </h4>
        <ul>
          {subTitle.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-900 text-gray-500 truncate cursor-pointer pt-1"
            >
              {item.link ? (
                <a href={item.link}>{item.name}</a>
              ) : (
                <span>{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AssideMenu;
