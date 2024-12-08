import { RigidBody } from "@react-three/rapier";

const TableBox: React.FC = () => {

  return (
    <>
      <RigidBody>
        <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh position={[5, 0, 0]}>
          <boxGeometry args={[1, 1, 10]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={[-5, 0, 0]}>
          <boxGeometry args={[1, 1, 10]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[10, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={[0, 0, 5]}>
          <boxGeometry args={[10, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </RigidBody>
    </>)
};

export default TableBox;