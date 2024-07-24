import { Button } from "../ui/button";
import { SidebarButtonProps } from "@/lib/props";

export const SidebarButton = ({ img, className, label, handleClick }: SidebarButtonProps) => {
  return (
    <Button className={`${className} gap-2 flex sm:flex-row flex-col mr-[50%] sm:my-3 my-5`} onClick={() => handleClick && handleClick()}>
        <img src={img} alt={label} />
        <p className="">{label}</p>
    </Button>
  );
};