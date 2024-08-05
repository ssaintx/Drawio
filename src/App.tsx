import { v4 } from 'uuid';
import { useCallback, useEffect, useRef, useState } from 'react';
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

import { toPng } from 'html-to-image';
import { MenuProps } from './lib/props';
import { ContextMenu } from './components/layout/ContextMenu';
import { loadNodes, nodeTypes } from './components/nodes/node.config';
import { loadEdges, edgeTypes } from './components/edges/edge.config';

import Sidebar from './components/layout/Sidebar';

const App = () => {
    const [nodes, setNodes] = useNodesState(loadNodes());
    const [edges, setEdges] = useEdgesState(loadEdges());
    const [menu, setMenu] = useState<MenuProps | null>(null);

    const ref = useRef<HTMLDivElement | null>(null);
    const reactFlowWrapper = useRef<HTMLDivElement | null>(null);

    const nodeXPosition = useRef(0);
    const nodeYPosition = useRef(0);

    // SET TO LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('nodes', JSON.stringify(nodes));
    }, [nodes]);

    useEffect(() => {
        localStorage.setItem('edges', JSON.stringify(edges));
    }, [edges]);

    // NODES CHANGE
    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );

    // EDGES CHANGE
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    // EDGE ADDING
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge({ ...connection, type: 'edge' }, eds)),
        [setEdges],
    );

    // NODE ADDING
    const addNode = useCallback((title: string, description: string) => {
        const newNode = {
            id: v4(),
            type: 'node',
            position: { x: nodeXPosition.current += 50, y: nodeYPosition.current += 50 },
            data: { title: title || 'Untitled', description: description || 'No description' },
            className: 'bg-zinc-900 rounded-[1rem]',
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

    // NODE CONTEXT MENU
    const onNodeContextMenu = useCallback(
        (event: React.MouseEvent<Element>, node: any) => {
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

    // IMAGE DOWNLOAD
    const download = () => {
        if (reactFlowWrapper.current === null) {
            return;
        }
        toPng(reactFlowWrapper.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'reactflow-chart.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to capture the image', err);
            });
    };

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <Sidebar
                style="row-span-5 bg-zinc-900 w-max w-screen h-screen"
                addNode={addNode}
                download={download}
            />
            <div ref={reactFlowWrapper} className="col-span-4 row-span-5 text-white">
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
                >
                    <Background />
                    <MiniMap className='md:block hidden' />
                    <Controls />
                    {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
                </ReactFlow>
            </div>
        </div>
    );
};


export default App;
