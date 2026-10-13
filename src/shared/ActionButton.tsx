import React, { type AnchorHTMLAttributes, type ComponentType } from 'react'
import AnchorLinkModule from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

const AnchorLink = (
  AnchorLinkModule as unknown as {
    default: ComponentType<
      AnchorHTMLAttributes<HTMLAnchorElement>
    >;
  }
).default;

type Props = {
  children:React.ReactNode;
  setSelectedPage: (value:SelectedPage) => void;
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
   <AnchorLink
   className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
   onClick={() => setSelectedPage(SelectedPage.ContactUs)}
   href={`#${SelectedPage.ContactUs}`}
   >
      {children}
   </AnchorLink>
  )
}

export default ActionButton