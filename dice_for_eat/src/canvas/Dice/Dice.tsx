import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const Dice: React.FC = () => {
    const playerRef = useRef < RapierRigidBody | null > ();

    useFrame(() => {
        if (!playerRef.current) return;

        const velocity = playerRef.current.linvel();
        const rotateVelocity = playerRef.current.angvel();

        playerRef.current.wakeUp();
        playerRef.current.setLinvel({ x: velocity.x, y: velocity.y, z: velocity.z }, false);
        playerRef.current.setAngvel({ x: rotateVelocity.x, y: rotateVelocity.y, z: rotateVelocity.z }, true);
    });

    useEffect(() => {
        if (!playerRef.current) return;

        playerRef.current.setLinvel({ x: -10, y: -10, z: 10 }, false);
        playerRef.current.setAngvel({ x: 10, y: 10, z: 10 }, true);
    }, [playerRef.current])

    return (
        <RigidBody position={[10, 10, -10]} ref={playerRef} >
            <mesh>
                <dodecahedronGeometry args={[0.75]} />
                <meshStandardMaterial />
            </mesh>
        </RigidBody>
    )
};

export default Dice;