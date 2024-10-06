import { NextPage } from "next";
import React from "react";

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const ListSocialMedia: NextPage<Props> = ({ icon: Icon, link }) => {
  return (
    <li className="inline-block mx-3">
      <a
        target="_blank"
        className="hover:text-gray-800"
        rel="noopener noreferrer"
        href={link}
        title={link}
      >
        <Icon style={{ width: "2rem", height: "2rem" }} />
      </a>
    </li>
  );
};

export default ListSocialMedia;
