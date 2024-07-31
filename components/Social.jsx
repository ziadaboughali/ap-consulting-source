import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles, links }) => {
  return (
    <div className={containerStyles}>
      <Link href={links.github} className={iconStyles} target="_blank">
        <FaGithub />
      </Link>
      <Link href={links.linkedin} className={iconStyles} target="_blank">
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default Social;
