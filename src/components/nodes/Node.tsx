import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const Node = ({ data }: { data: string }) => {
    return (
        <div className="px-4 py-2 rounded-[1rem] bg-zinc-900">
            <div className="flex">
                <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
                    {data.emoji}
                </div>
                <div className="ml-2">
                    <div className="text-lg font-bold">{data.name}</div>
                    <div className="text-gray-500">{data.job}</div>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Top}
            />
            <Handle
                type="source"
                position={Position.Bottom}
            />
        </div>
    );
};

export default memo(Node);