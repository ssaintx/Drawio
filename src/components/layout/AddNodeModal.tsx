import { useCallback, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ModalProps } from "@/lib/props";
import { Textarea } from "../ui/textarea";

export const AddNodeModal = ({ open, setOpen, addNode }: ModalProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="block bg-zinc-900 border-none text-white w-auto overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="text-center">Add Node</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 p-4">
                    <Textarea
                        required
                        placeholder="Title"
                        className="bg-zinc-900 text-white border-b-[1px] border-gray-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        required
                        placeholder="Description"
                        className="bg-zinc-900 text-white border-b-[1px] border-gray-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button
                        onClick={() => {
                            addNode && addNode(title, description);
                        }}
                        className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 py-2 px-4 rounded-md"
                    >
                        Add
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
