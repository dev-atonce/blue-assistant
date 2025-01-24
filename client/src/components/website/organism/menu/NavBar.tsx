import { Link } from "@/i18n/routing";
import NavDropDown from "@/components/website/molecule/menu/NavDropDown";
import menuItem from "@/assets/menuItem.json";
import { usePathname } from "next/navigation";

export default function NavBar({ colors, lng }: any) {
  const pathname = usePathname();

  return (
    <div className="nav-menu h-full flex items-center " id="scrollable-content">
      {menuItem.map((item: any, key: number) => {
        if (item.subMenu)
          return (
            <NavDropDown
              key={key}
              title={item.title.jp}
              dropdownItems={item.subMenu}
              sectionKey={key}
            />
          );
        else
          return (
            <Link
              scroll={true}
              key={key}
              href={item.href}
              className={`${
                pathname == item?.href.toLowerCase()
                  ? "text-[#3562AE]"
                  : "text-[#0C2B4B]"
              } h-full text-sm font-bold flex items-center menu-item px-4 py-4 nav-button hover:text-[#3562AE] transition-all`}
            >
              {item.title[lng]}
            </Link>
          );
      })}
    </div>
  );
}
