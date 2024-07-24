export interface SidebarProps {
    style?: string;
    addNode?: () => void;
};

export interface SidebarButtonProps {
    handleClick?: () => void;
    className?: string;
    label?: string;
    img?: string;
};

export interface AddNodeProps {
    nodes: Node[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}

export interface ContextMenuProps {
    id?: string;
    top?: any;
    left?: any;
    right?: any;
    bottom?: any;
    onClick?: () => void;
};

export interface MenuProps {
    id?: string;
    top?: any;
    left?: any;
    right?: any;
    bottom?: any;
};

export interface ModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};