import { v4 } from 'uuid';
import { useCallback, useRef, useState } from 'react';
import {
    ReactFlow,
    Controls,
    MiniMap,
    Background,
    useEdgesState,
    useNodesState,
    OnNodesChange,
    applyNodeChanges,
    applyEdgeChanges,
    OnEdgesChange,
    OnConnect,
    addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';

import { MenuProps } from './lib/props';
import { ContextMenu } from './components/layout/ContextMenu';
import { initialNodes, nodeTypes } from './components/nodes/node.config';
import { initialEdges, edgeTypes } from './components/edges/edge.config';

import Sidebar from './components/layout/Sidebar';

const App = () => {
    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);
    const [menu, setMenu] = useState<MenuProps | null>(null);

    const ref = useRef<HTMLDivElement | null>(null);

    const nodeXPosition = useRef(0);
    const nodeYPosition = useRef(0);

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );

    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge({ ...connection, type: 'edge' }, eds)),
        [setEdges],
    );

    const addNode = useCallback(() => {
        const newNode = {
            id: v4(),
            type: 'node',
            position: { x: nodeXPosition.current += 50, y: nodeYPosition.current += 50},
            data: { title: 'example', description: 'example' },
            className: 'bg-zinc-900 rounded-[1rem]',
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

    const onNodeContextMenu = useCallback(
        (event: React.MouseEvent<HTMLDivElement>, node: any) => {
          event.preventDefault();
      
          const pane = ref.current?.getBoundingClientRect();
          if (pane) {
            setMenu({
              id: node.id,
              top: event.clientY - pane.top,
              left: event.clientX - pane.left,
            });
          }
        },
        [setMenu],
      );
    
      const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <Sidebar
                style="row-span-5 bg-zinc-900 w-max w-screen h-screen"
                addNode={addNode}
            />
            <ReactFlow
                fitView
                ref={ref}
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeContextMenu={onNodeContextMenu}
                onPaneClick={onPaneClick}
                onConnect={onConnect}
                snapToGrid={true}
                colorMode='dark'
                className="col-span-4 row-span-5 text-white"
            >
                <Background />
                <MiniMap className='md:block hidden' />
                <Controls />
                {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
            </ReactFlow>
        </div>
    );
};

export default App;
