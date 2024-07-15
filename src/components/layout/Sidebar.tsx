import { navItems } from "@/constants";
import { SidebarProps } from "@/lib/props";


const Sidebar = ({ style }: SidebarProps) => {
  return (
      <div className={`${style} p-6 flex flex-col justify-center`}>
        {navItems.map((item) => (
          <div className="flex items-center mb-10">
            <img 
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
            />
            <p className="ml-2 text-[14px] sm:block hidden">
              {item.name}
            </p>
          </div>
        ))}
      </div>
  );
};

export default Sidebar;