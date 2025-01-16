import { Text, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { MeshPhysicalMaterial } from 'three/webgpu';

const DiceForMethodModel = (props: GroupProps) => {
    const { nodes } = useGLTF('src/assets/models/dice_6.glb')

    const scale = 1.5;

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={new MeshPhysicalMaterial({ ...nodes.Cube001.material })}
                scale={scale}
            />
            <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[0, scale + 0.01, 0]}>
                <Text color={'red'} fontSize={0.4}>
                    Заказать
                </Text>
            </mesh>
            <mesh rotation={[0, 0, 0]} position={[0, 0, scale + 0.01]}>
                <Text color={'red'} fontSize={0.4}>
                    Приготовить
                </Text>
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]} position={[scale + 0.01, 0, 0]}>
                <Text color={'red'} fontSize={0.4}>
                    Сходить
                </Text>
            </mesh>
            <mesh rotation={[-Math.PI / 2, Math.PI, 0]} position={[0, -(scale + 0.01), 0]}>
                <Text color={'red'} fontSize={0.4}>
                    Заказать
                </Text>
            </mesh>
            <mesh rotation={[0, Math.PI, 0]} position={[0, 0, -(scale + 0.01)]}>
                <Text color={'red'} fontSize={0.4}>
                    Приготовить
                </Text>
            </mesh>
            <mesh rotation={[0, -Math.PI / 2, 0]} position={[-(scale + 0.01), 0, 0]}>
                <Text color={'red'} fontSize={0.4}>
                    Сходить
                </Text>
            </mesh>
        </group>
    )
}

useGLTF.preload('/dice_6.glb')

export default DiceForMethodModel;