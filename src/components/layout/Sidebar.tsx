import { add } from "@/assets";
import { SidebarProps } from "@/lib/props";
import { SidebarButton } from "./SidebarButton";

const Sidebar = ({ style, addNode }: SidebarProps) => {
  return (
    <aside className={`${style} flex`}>
      <div className="p-1 flex flex-col justify-center items-start w-screen sm:p-6">
        <SidebarButton 
          img={add}
          label="Add"
          handleClick={() => addNode && addNode()}
        />
      </div>
    </aside>
  );
};

export default Sidebar;