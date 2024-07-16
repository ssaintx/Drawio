import { navItems } from "@/constants";
import { SidebarProps } from "@/lib/props";


const Sidebar = ({ style }: SidebarProps) => {
  return (
    <div className={`${style} flex`}>
      <div className="p-6 flex flex-col justify-center">
        {navItems.map((item) => (
          <div className="flex items-center mb-10" key={item.id}>
            <img
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
            />
            <p className="ml-3 text-lg text-zinc-50">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;