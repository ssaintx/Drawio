import { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { ContextMenuProps } from '@/lib/props';
import { copy, deleteIcon } from '@/assets';
import { SidebarButton } from './SidebarButton';
import { v4 } from 'uuid';

export const ContextMenu = ({
    id = "",
    top,
    left,
    right,
    bottom,
    ...props
}: ContextMenuProps) => {
    const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
    const duplicateNode = useCallback(() => {
        const node = getNode(id);

        if (!node) {
            console.error(`Node with id ${id} not found`);
            return;
        }

        const position = {
            x: node.position.x + 50,
            y: node.position.y + 50,
        };

        addNodes({
            ...node,
            selected: false,
            dragging: false,    
            id: `${node.id}-copy-${v4()}`,
            position,
        });
    }, [getNode, addNodes, id]);

    const deleteNode = useCallback(() => {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
        setEdges((edges) => edges.filter((edge) => edge.source !== id));
    }, [id, setNodes, setEdges]);

    return (
        <div
            style={{
                top: top - 20,
                left: left,
            }}
            className="absolute p-6 rounded-2xl z-10 leading-6 glassmorphism shadow-base"
            {...props}
        >
            <SidebarButton
                img={copy}
                label="Copy"
                className="bg-transparent p-1 text-white w-[100%] flex justify-start font-normal hover:bg-transparent hover:border-l-[1px] hover:border-gray-300 rounded-none"
                handleClick={duplicateNode}
            />
            <SidebarButton
                img={deleteIcon}
                label="Delete"
                className="bg-transparent p-1 text-red-500 w-[100%] flex justify-start font-normal hover:bg-transparent hover:border-l-[1px] hover:border-red-500 rounded-none"
                handleClick={deleteNode}
            />
        </div>
    );
}