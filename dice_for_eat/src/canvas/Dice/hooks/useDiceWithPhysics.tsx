import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody, RigidBodyProps } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

export type useDiceWithPhysicsParams = {
    componentModel: React.ReactNode;
    rigidBodyProps: RigidBodyProps;
    startVelocity?: Vector3;
    startRotateVelocity?: Vector3;
}

const useDiceWithPhysics = ({ componentModel, rigidBodyProps, startVelocity, startRotateVelocity }: useDiceWithPhysicsParams) => {
    const playerRef = useRef<RapierRigidBody | null>();

    const [velocity, setVelocity] = useState<Vector3>();
    const [rotateVelocity, setRotateVelocity] = useState<Vector3>();

    useFrame(() => {
        if (!playerRef.current) return;

        playerRef.current.wakeUp();
        if (velocity) {
            playerRef.current.setLinvel(velocity, false);
        }

        if (rotateVelocity) {
            playerRef.current.setAngvel(rotateVelocity, true);
        }
    });

    useEffect(() => {
        if (!playerRef.current) return;

        if (startVelocity) {
            playerRef.current.setLinvel(startVelocity, false);
        }
        
        if (startRotateVelocity) {
            playerRef.current.setAngvel(startRotateVelocity, true);
        }
    }, [startRotateVelocity, startVelocity])

    return {
        Component: (
            <RigidBody {...rigidBodyProps} ref={playerRef} >
                {componentModel}
            </RigidBody>
        ),
        setVelocity,
        setRotateVelocity,
    }
};

export default useDiceWithPhysics;