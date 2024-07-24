import { Modal } from "./Modal";
import { useState } from "react";
import { Download } from "./Download";
import { SidebarProps } from "@/lib/props";
import { SidebarButton } from "./SidebarButton";
import { add, download, items } from "@/assets";

const Sidebar = ({ style, addNode }: SidebarProps) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  }

  return (
    <aside className={`${style} flex`}>
      <div className="p-1 flex flex-col justify-center items-center sm:items-start sm:ml-0 ml-2 px-0 sm:px-4">
        <SidebarButton
          img={add}
          label="Add"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => addNode && addNode()}
        />
        <SidebarButton
          img={items}
          label="Nodes"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { toggleModal() }}
        />
        <Modal open={open} setOpen={setOpen} />
        <SidebarButton 
          img={download}
          label="Download"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { Download() }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;