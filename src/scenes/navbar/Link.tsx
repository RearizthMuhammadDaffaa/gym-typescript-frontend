import type { AnchorHTMLAttributes, ComponentType } from "react";
import AnchorLinkModule from "react-anchor-link-smooth-scroll"

const AnchorLink = (
  AnchorLinkModule as unknown as {
    default: ComponentType<
      AnchorHTMLAttributes<HTMLAnchorElement>
    >;
  }
).default;

type Props = {
  page:string;
  selectedPage:string;
  setSelectedPage:(value:string) => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage
}:Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g,"")
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500":""}
      transition duration-500 hover:text-primary-300`} 
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link