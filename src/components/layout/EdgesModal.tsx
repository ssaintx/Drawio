import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ModalProps } from "@/lib/props";

export const EdgesModal = ({ open, setOpen }: ModalProps) => {
    const edges = JSON.parse(localStorage.getItem("edges") || "[]");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="block bg-zinc-900 border-none text-white w-auto overflow-visible">
                <DialogHeader>
                    <DialogTitle className="text-center">Edges</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 p-4">
                    {edges && edges.map((edge: any) => (
                        <div className="border-b-[1px] border-zinc-700 h-auto p-2" key={edge.id}>
                            <p className="">
                                Source: <span className="text-gray-500">{edge.source.slice(0,8)}...</span> -&gt; 
                                Target: <span className="text-gray-500">{edge.target.slice(0, 8)}...</span>
                            </p>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};