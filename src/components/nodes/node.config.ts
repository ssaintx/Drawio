import CustomNode from './CustomNode';
import { Node, NodeTypes } from '@xyflow/react';

export const nodeTypes: NodeTypes = {
    node: CustomNode,
};

export const initialNodes: Node[] = [];

export const loadNodes = () => {
    const savedNodes = localStorage.getItem('nodes');
    return savedNodes ? JSON.parse(savedNodes) : initialNodes;
};