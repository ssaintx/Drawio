import { cancel } from '@/assets';
import {
    BaseEdge,
    EdgeLabelRenderer,
    EdgeProps,
    getBezierPath,
    useReactFlow,
} from '@xyflow/react';
import { Button } from '../ui/button';

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) => {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                <Button
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all',
                    }}
                    className="bg-transperent hover:bg-zinc-900 rounded-full p-2"
                    onClick={() => {
                        setEdges((es) => es.filter((e) => e.id !== id));
                    }}
                >
                    <img 
                        src={cancel}
                        width={20}
                        height={20}
                        alt="x"
                        className='text-red-500'
                    />
                </Button>
            </EdgeLabelRenderer>
        </>
    );
};

export default CustomEdge;