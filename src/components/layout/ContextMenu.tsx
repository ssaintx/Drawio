import { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { ContextMenuProps } from '@/lib/props';
import { copy, deleteIcon } from '@/assets';
import { SidebarButton } from './SidebarButton';

export const ContextMenu = ({
    id,
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
            id: `${node.id}-copy`,
            position,
        });
    }, [getNode, addNodes, id]);

    const deleteNode = useCallback(() => {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
        setEdges((edges) => edges.filter((edge) => edge.source !== id));
    }, [id, setNodes, setEdges]);

    return (
        <div
            style={{ top, left, right, bottom }}
            className="absolute p-6 rounded-2xl z-10 bg-zinc-900 leading-6"
            {...props}
        >
            <SidebarButton
                img={copy}
                label="Copy"
                className="bg-transparent p-0 text-white w-[100%] flex justify-start font-normal"
                handleClick={duplicateNode}
            />
            <SidebarButton
                img={deleteIcon}
                label="Delete"
                className="bg-transparent p-0 text-red-500 w-[100%] flex justify-start font-normal"
                handleClick={deleteNode}
            />
        </div>
    );
}