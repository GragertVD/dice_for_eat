import { DoubleSide, Vector3 } from "three";

const DiceEdge: React.FC = () => {
    const countEdge = 6, q = 0, r = 0;
    const vertices: Vector3[] = [];

    for (let i = 0; i < countEdge; ++i) {
        const angle = (i / countEdge) * Math.PI * 2;
        const x = q + 1 * Math.cos(angle);
        const z = r + 1 * Math.sin(angle);
        vertices.push(new Vector3(x, 2, z));
    }

    const memoizeVertices = Float32Array.from(
        new Array(vertices.length)
            .fill(0)
            .flatMap((_, index) => vertices[index].toArray()));


    return (
        <mesh position={[0, 2, 0]}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach={"attributes-position"}
                    args={[memoizeVertices, 3]}
                    // array={memoizeVertices}
                    itemSize={3}
                    count={memoizeVertices.length}
                />
            </bufferGeometry>
            <meshBasicMaterial attach="material" side={DoubleSide} color={'#5243aa'} />
        </mesh>
    )
};

export default DiceEdge;