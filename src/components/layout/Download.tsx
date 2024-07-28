import {
    useReactFlow,
    getNodesBounds,
    getViewportForBounds,
    Panel,
} from '@xyflow/react';
import { toPng } from 'html-to-image';
import { SidebarButton } from './SidebarButton';
import { download } from '@/assets';

export const downloadImage = (dataUrl: string) => {
    const a = document.createElement('a');

    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

export const Download = () => {
    const { getNodes } = useReactFlow();

    const onClick = () => {
        const nodesBounds = getNodesBounds(getNodes());
        const viewport = getViewportForBounds(
            nodesBounds,
            imageWidth,
            imageHeight,
            0.5,
            2,
            1,
        );

        const viewportElement = document.querySelector('.react-flow__viewport') as HTMLElement;
        toPng(viewportElement, {
            backgroundColor: '#141414',
            width: imageWidth,
            height: imageHeight,
            style: {
                width: String(imageWidth) + 'px',
                height: String(imageHeight) + 'px',
                transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
            },
        }).then(downloadImage);
    }

    return (
        // <SidebarButton 
        // img={download}
        // label="Download"
        // className="hover:border-l-[1px] hover:border-gray-300 rounded-none"
        // handleClick={() => { onClick() }}
        // />
        null
    );
};