import { Button } from "../ui/button";
import { SidebarButtonProps } from "@/lib/props";

export const SidebarButton = ({ img, className, label, handleClick}: SidebarButtonProps) => {
  return (
    <Button className={`${className} gap-2 hover:bg-zinc-600`} onClick={() => handleClick && handleClick()}>
        <img src={img} alt={label} />
        <p className="sm:block hidden">{label}</p>
    </Button>
  );
};