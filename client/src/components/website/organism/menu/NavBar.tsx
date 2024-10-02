import Link from "next/link";
import NavDropDown from "@/components/website/molecule/menu/NavDropDown";
import menuItem from "@/assets/menuItem.json";

export default function NavBar() {
  return (
    <div className="nav-menu h-full flex items-center " id="scrollable-content">
      {menuItem.map((item: any, key: number) => {
        if (item.subMenu)
          return (
            <NavDropDown
              key={key}
              title={item.title}
              dropdownItems={item.subMenu}
              sectionKey={key}
            />
          );
        else
          return (
            <Link
              key={key}
              href={item.href}
              className={`h-full flex items-center menu-item px-4 py-8 nav-button text-[#0C2B4B] font-bold hover:text-[#3662AE] hover:border-[#3662AE] hover:border-b-4 transition-all`}
            >
              {item.title}
            </Link>
          );
      })}
    </div>
  );
}
