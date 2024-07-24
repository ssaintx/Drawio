import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { ModalProps } from "@/lib/props";
import { initialNodes } from "../nodes/node.config";

export const Modal = ({ open, setOpen }: ModalProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-zinc-900 border-none text-white w-auto">
                <DialogHeader>
                    <DialogTitle className="text-center">Nodes</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 p-4">
                    {initialNodes.map((node) => (
                        <div key={node.id} className="border-b-2 border-zinc-700 p-2">
                            <p>{node.data.title as ReactNode} - <span className="text-zinc-400">{node.data.description as ReactNode}</span></p>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};