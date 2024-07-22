export interface SidebarProps {
    style?: string;
    addNode?: () => void;
};

export interface SidebarButtonProps {
    handleClick?: () => void | undefined;
    className?: string;
    label?: string;
    img?: string;
};

export interface AddNodeProps {
    nodes: Node[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}

export interface ContextMenuProps {
    id: string;
    top: number;
    left: number;
    right: number;
    bottom: number;
};

export interface MenuProps {
    id: string;
    top: number | boolean;
    left: number | boolean;
    right: number | boolean;
    bottom: number | boolean;
}