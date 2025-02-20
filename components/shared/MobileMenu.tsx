import { NavbarMenu, NavbarMenuItem } from "@heroui/react"

const MobileMenu = () => {
  return (
    <NavbarMenu>
    {navItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
          className="w-full"
          color={
            index === 2
              ? "primary"
              : index === menuItems.length - 1
              ? "danger"
              : "foreground"
          }
          href="#"
          size="lg"
        >
          {item}
        </Link>
      </NavbarMenuItem>
    ))}
  </NavbarMenu>
  )
}

export default MobileMenu