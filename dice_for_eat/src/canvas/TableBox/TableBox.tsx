import { RigidBody } from "@react-three/rapier";

type TableBoxProps = {
  height?: number;
  width?: number;
}

const TableBox: React.FC<TableBoxProps> = ({ height = 30, width = 20 }) => {

  return (
    <>
      <RigidBody type="fixed" restitution={0.9}>
        <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[width / 2, 0, 0]}>
          <boxGeometry args={[1, 10, height]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[-width / 2, 0, 0]}>
          <boxGeometry args={[1, 10, height]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[0, 0, -height / 2]}>
          <boxGeometry args={[width, 10, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={[0, 0, height / 2]}>
          <boxGeometry args={[width, 10, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </RigidBody>
    </>)
};

export default TableBox;