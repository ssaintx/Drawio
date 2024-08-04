import CustomEdge from "./CustomEdge";
import { Edge, EdgeTypes } from "@xyflow/react";

export const edgeTypes: EdgeTypes = {
    'edge': CustomEdge,
}

export const initialEdges: Edge[] = [];

export const loadEdges = () => {
    const savedEdges = localStorage.getItem('edges');
    return savedEdges ? JSON.parse(savedEdges) : initialEdges;
};