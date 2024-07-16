import { useCallback, useState } from 'react';
import {
    ReactFlow,
    addEdge,
    Controls,
    MiniMap,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    Edge,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';

import { ViewPortProps } from '@/lib/props';
import { initialNodes, nodeTypes } from '../nodes/node.config';
import { initialEdges, edgeTypes } from '../edges/edge.config';

const ViewPort = ({ style }: ViewPortProps) => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );
    const onConnect: OnConnect = useCallback(
        (connection) => {
            const edge = { ...connection, type: 'edge'};
            setEdges((eds) => addEdge(edge, eds))
        },
        [setEdges],
    );

    return (
        <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            edges={edges}
            edgeTypes={edgeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            className={`${style} text-white`}
            colorMode='dark'
        >
            <Background />
            <MiniMap className='md:block hidden' />
            <Controls />
        </ReactFlow >
    );
};

export default ViewPort;