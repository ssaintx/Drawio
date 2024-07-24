import { memo, ReactNode } from 'react';
import { CustomNodeTypes } from './node.config';
import { Handle, NodeProps, NodeResizer, Position } from '@xyflow/react';

const CustomNode = ({ data, selected }: NodeProps<CustomNodeTypes>) => {
    return (
        <div className="px-4 py-2 rounded-[1rem] bg-zinc-900">
            <NodeResizer
                color="#3f3f46"
                isVisible={selected}
                minWidth={100}
                minHeight={30}
            />

            <div className="flex flex-col gap-2">
                <div className="ml-2 text-center">
                    <p className='text-lg'>{data.title as ReactNode}</p>
                </div>
                <hr />
                <div>
                    <p className="text-gray-500">{data.description as ReactNode}</p>
                </div>

            </div>

            <Handle type="target" position={Position.Top} className="rounded-full bg-zync-500" />
            <Handle type="source" position={Position.Bottom} className="rounded-full " />
        </div>
    );
};

export default memo(CustomNode);