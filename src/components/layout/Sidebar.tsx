import { useState } from "react";
import { NodesModal } from "./NodesModal";
import { SidebarProps } from "@/lib/props";
import { SidebarButton } from "./SidebarButton";
import { EdgesModal } from "./EdgesModal";
import { SettingsModal } from "./SettingsModal";
import { AddNodeModal } from "./AddNodeModal";
import { add, downloadIcon, edgeIcon, logo, nodeIcon, settingsIcon } from "@/assets";

const Sidebar = ({ style, addNode, download }: SidebarProps) => {
  const [openNodeModal, setOpenNodeModal] = useState(false);
  const [openEdgeModal, setOpenEdgeModal] = useState(false);
  const [openAddNodeModal, setOpenAddNodeModal] = useState(false);
  const [openSettingsModal, setOpenSettingsModal] = useState(false);

  const toggleNodeModal = () => {
    setOpenNodeModal(!openNodeModal);
  };

  const toggleEdgeModal = () => {
    setOpenEdgeModal(!openEdgeModal);
  };

  const toggleAddNodeModal = () => {
    setOpenAddNodeModal(!openAddNodeModal);
  };

  const toggleSettingsModal = () => {
    setOpenSettingsModal(!openSettingsModal);
  };

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
          handleClick={() => { toggleAddNodeModal() }}
          addNode={addNode}
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
        <SidebarButton
          img={downloadIcon}
          label="Download"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { download && download() }}
        />
        {/* MODALS */}
        <AddNodeModal open={openAddNodeModal} setOpen={setOpenAddNodeModal} addNode={addNode} />
        <NodesModal open={openNodeModal} setOpen={setOpenNodeModal} />
        <EdgesModal open={openEdgeModal} setOpen={setOpenEdgeModal} />
        <SettingsModal open={openSettingsModal} setOpen={setOpenSettingsModal} />
      </div>

      {/* TODO Add Settings Modal Logic */}
      <div>
        <SidebarButton
          img={settingsIcon}
          label="Settings"
          className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
          handleClick={() => { toggleSettingsModal() }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;