"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/react";
import NavSearch from "./NavSearch";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";

/*------- TO Do ------

2.nav items
3. search form
4.wishlists
5.cart
6.profile icon

(wishlists, cart and profile will not be visible in login and register page)

*/

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: ["border-b-[0.5px] border-border-1", "pt-10 pb-4"],
        wrapper: ["xl:max-w-[1170px]", "px-0"],
      }}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        {/* logo */}
        <NavbarBrand>
          <Link href="/" className="logo">
            Exclusive
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* nav items */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map(({ label, route }) => {
          const activePath = pathname === route;

          return (
            <NavbarItem
              key={route}
              isActive={activePath}
              className={
                activePath ? "border-b border-border-2 !font-normal" : ""
              }
            >
              <Link href={route}>{label}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        {/* search */}
        <NavSearch />

        {/* wishlists */}
        {/* cart */}
        {/* profile */}
      </NavbarContent>

      {/* mobile menu */}
      {/* <MobileMenu/> */}
    </Navbar>
  );
};

export default Header;
