import { useState } from "react";
import { NodesModal } from "./NodesModal";
import { SidebarProps } from "@/lib/props";
import { SidebarButton } from "./SidebarButton";
import { add, edgeIcon, logo, nodeIcon, settings } from "@/assets";
import { EdgesModal } from "./EdgesModal";

const Sidebar = ({ style, addNode }: SidebarProps) => {
  const [openNodeModal, setOpenNodeModal] = useState(false);
  const [openEdgeModal, setOpenEdgeModal] = useState(false);

  const toggleNodeModal = () => {
    setOpenNodeModal(!openNodeModal);
  };

  const toggleEdgeModal = () => {
    setOpenEdgeModal(!openEdgeModal);
  }

  return (
    <aside className={`${style} flex flex-col justify-between sm:p-6 p-2 text-white`}>
      <div className="flex flex-row gap-1 items-center">
        <img src={logo} alt="Drawio" width={38} height={38} className="md:w-[38px] md:h-[38px] w-[50px] h-[50px]" />
        <h1 className="text-2xl md:flex hidden">Drawio</h1>
      </div>

      <div>
        <SidebarButton
          img={add}
          label="Add"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => addNode && addNode()}
        />
        <SidebarButton
          img={nodeIcon}
          label="Nodes"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { toggleNodeModal() }}
        />
        <SidebarButton
          img={edgeIcon}
          label="Edges"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { toggleEdgeModal() }}
        />
        <NodesModal open={openNodeModal} setOpen={setOpenNodeModal} />
        <EdgesModal open={openEdgeModal} setOpen={setOpenEdgeModal} />
      </div>

      <div>
        <SidebarButton
          img={settings}
          label="Settings"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;