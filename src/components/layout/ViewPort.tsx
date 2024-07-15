import { useCallback } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    MiniMap,
    Background,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';

import { ViewPortProps } from '@/lib/props';
import { initEdges, initNodes, nodeTypes } from '../nodes/node.config';


const ViewPort = ({ style }: ViewPortProps) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            colorMode='dark'
            className={`${style} text-white`}
        >
            <Background />
            <MiniMap className='md:block hidden' />
            <Controls />
        </ReactFlow>
    );
};

export default ViewPort;