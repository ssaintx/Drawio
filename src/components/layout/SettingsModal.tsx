import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Label } from "../ui/label";
import { ModalProps } from "@/lib/props";
import { Checkbox } from "../ui/checkbox";

export const SettingsModal = ({ open, setOpen }: ModalProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="block bg-zinc-900 border-none text-white w-auto overflow-visible">
                <DialogHeader>
                    <DialogTitle className="text-center">Settings</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 p-4">
                    <div className="flex flex-row gap-2 items-center">
                        <Checkbox id="minimap" className="border-gray-500" />
                        <Label htmlFor="minimap" className="">
                            Minimap
                        </Label>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <Checkbox id="controls" className="border-gray-500" />
                        <Label htmlFor="controls" className="">
                            Controls
                        </Label>
                    </div>

                    <Select>
                        <SelectTrigger className="w-[200px] bg-zinc-900 outline-none border-gray-500 rounded-md">
                            <SelectValue placeholder="Select a background" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 text-white outline-none border-none">
                            <SelectGroup>
                                <SelectLabel>Background</SelectLabel>
                                <SelectItem value="line">Line</SelectItem>
                                <SelectItem value="dot">Dot</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[200px] bg-zinc-900 outline-none border-gray-500 rounded-md">
                            <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 text-white outline-none border-none">
                            <SelectGroup>
                                <SelectLabel>Theme</SelectLabel>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    
                    <Select>
                        <SelectTrigger className="w-[200px] bg-zinc-900 outline-none border-gray-500 rounded-md">
                            <SelectValue placeholder="Select an
                             edge type" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 text-white outline-none border-none">
                            <SelectGroup>
                                <SelectLabel>Type</SelectLabel>
                                <SelectItem value="straight">Straight</SelectItem>
                                <SelectItem value="step">Step</SelectItem>
                                <SelectItem value="smoothstep">Smoothstep</SelectItem>
                                <SelectItem value="bezier">Bezier</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </DialogContent>
        </Dialog>
    );
};