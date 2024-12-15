import { MeshBasicMaterialProps, MeshProps } from "@react-three/fiber";
import { useMemo } from "react";
import { Vector3 } from "three";

export type DiceFaceProps = {
    countEdge?: number;
    radius?: number;
    material?: MeshBasicMaterialProps;
} & MeshProps;

const Polygon: React.FC<DiceFaceProps> = (
    {
        countEdge = 6,
        radius = 1,
        children,
        material,
        ...rest
    }
) => {

    //вычисляем точки вершин многоугольника
    const memoizeVertices = useMemo(() => {
        const vertices: Vector3[] = [];

        for (let i = 0; i < countEdge; ++i) {
            const angle = (i / countEdge) * Math.PI * 2;
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);
            vertices.push(new Vector3(x, 0, z));
        }

        return Float32Array.from(
            new Array(vertices.length)
                .fill(0)
                .flatMap((_, index) => vertices[index].toArray()))
    }, [countEdge, radius]);


    //вычисляем индексы для закрашивания области многоугольника треугольниками
    const indices = useMemo(() => {
        const indexCoordinate = [...Array(countEdge).keys()];
        const indices = [];

        for (
            let temp = indexCoordinate;
            temp.length >= 3;
            temp = temp.map(
                (val, index) => index % 2 === 0 ? val : -1)
                .filter((val) => val !== -1)
        ) {
            temp.push(0);
            for (let i = 0; i + 2 < temp.length; i += 2) {
                indices.push(temp[i]);
                indices.push(temp[i + 1]);
                indices.push(temp[i + 2]);
            }
        }

        return new Uint32Array(indices);
    }, [countEdge]);

    return (
        <mesh {...rest} >
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="index"
                    args={[indices, 1]}
                />
                <bufferAttribute
                    attach="attributes-position"
                    args={[memoizeVertices, 3]}
                />
            </bufferGeometry>
            <meshBasicMaterial {...material} />
            {children}
        </mesh>
    )
};

export default Polygon;