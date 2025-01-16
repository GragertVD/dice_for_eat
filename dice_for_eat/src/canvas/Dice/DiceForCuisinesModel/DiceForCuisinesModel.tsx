import { Text, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { MeshPhysicalMaterial } from 'three/webgpu';

const DiceForCuisinesModel = (props: GroupProps) => {
    const { nodes } = useGLTF('src/assets/models/dice_12.glb')
    console.log('log nodes', nodes);
    const scale = 3;
    const r = 0.66 * scale + 0.01;

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mesh1_Group1_Model001.geometry}
                material={new MeshPhysicalMaterial({ ...nodes.Mesh1_Group1_Model001.material })}
                scale={scale}
            />
            <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[0, r, 0]}>
                <Text color={'red'} fontSize={0.4}>
                    Русская
                </Text>
            </mesh>
            <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[0, -r, 0]}>
                <Text color={'red'} fontSize={0.4}>
                    Русская
                </Text>
            </mesh>
            <mesh rotation={[0, Math.PI * 2 / 5, Math.PI]} position={[r * Math.sin(Math.PI / 6), 0.35, r * Math.cos(Math.PI / 6)]}>
                <Text color={'red'} fontSize={0.4}>
                    Итальянская
                </Text>
            </mesh>
            {/* <mesh rotation={[Math.PI / 3, 2 * Math.PI / 5, 0]} position={[0, 0, disctanceForText]}>
                <Text color={'red'} fontSize={0.4}>
                    Приготовить
                </Text>
            </mesh> */}
        </group>
    )
}

useGLTF.preload('/dice_6.glb')

export default DiceForCuisinesModel;