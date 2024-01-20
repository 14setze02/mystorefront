"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import { FcGlobe } from "react-icons/fc";
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import SideMenu from "@modules/layout/components/side-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"
import Hamburger from "@modules/common/components/hamburger";

const Nav = () => {
  const { toggle } = useMobileMenu()
  const {
    state: searchModalState,
    close: searchModalClose,
    open: searchModalOpen,
  } = useToggleState()
  const store_title = process.env.STORE_TITLE;
  return (
    <div dir='ltr' className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="txt-xsmall-plus text-ui-fg-subtle flex w-full h-full text-small-regular">


          <div className="flex-0 basis-1 h-full flex items-center">
            <FcGlobe size={'2em'} />
          </div>
          <div className="flex items-center h-full mx-auto">
            <Link
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            >
              MY STORE
            </Link>
          </div>
          <div className="flex-0 basis-1 h-full flex items-center">
            <div className="block ">
              <Hamburger setOpen={toggle} />
            </div>
           
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
