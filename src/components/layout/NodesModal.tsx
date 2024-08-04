import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ModalProps } from "@/lib/props";

export const NodesModal = ({ open, setOpen }: ModalProps) => {
    const nodes = JSON.parse(localStorage.getItem("nodes") || "[]");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="block bg-zinc-900 border-none text-white w-auto overflow-visible">
                <DialogHeader>
                    <DialogTitle className="text-center">Nodes</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 p-4">
                    {nodes && nodes.map((node: any) => (
                        <div className="border-b-[1px] border-zinc-700 h-auto p-2" key={node.id}>
                            <p className="font-thin">Title: {node.data.title}</p>
                            <p className="text-gray-500 text-sm">Description: {node.data.description}</p>
                            <p className="text-gray-500 text-sm">Id: {node.id}</p>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};