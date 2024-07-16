import CustomNode from './CustomNode';
import { Node, NodeTypes } from '@xyflow/react';

export type NodeTitleType = Node<{ title: string }, 'title'>;
export type NodeDescripionType = Node<{ description: string }, 'description'>;

export type CustomNodeTypes = NodeTitleType | NodeDescripionType;

export const nodeTypes: NodeTypes = {
    node: CustomNode,
};

export const initialNodes: Node[] = [
    {
        id: '1',
        type: 'node',
        data: { title: 'Jane Doe', description: 'CEO' },
        position: { x: 0, y: 0 },
        className: 'bg-zinc-900 rounded-[1rem]',
    },
];