import { useEffect } from "react";
import { DiceForMethodModel } from "../DiceForMethodModel";
import useDiceWithPhysics from "../hooks/useDiceWithPhysics";
import { Vector3 } from "three";
import { DiceForCuisinesModel } from "../DiceForCuisinesModel";

const Dice = () => {
    const { Component: Dice, setVelocity, setRotateVelocity } = useDiceWithPhysics(
        {
            componentModel: <DiceForMethodModel />,
            rigidBodyProps: { position: [3, 0, 0] },
            startVelocity: new Vector3(20, 0, -9),
            startRotateVelocity: new Vector3(20, 20, 0)
        }
    );
    const { Component: Dice2, setVelocity2, setRotateVelocity2 } = useDiceWithPhysics(
        {
            componentModel: <DiceForCuisinesModel />,
            rigidBodyProps: { position: [0, 0, 0] },
            // startVelocity: new Vector3(-24, 2, 12),
            // startRotateVelocity: new Vector3(-20, -20, 0)
        }
    );

    // useEffect(() => {

    //     // setVelocity({ x: 0, y: 0.25, z: 0 });
    //     // setRotateVelocity({ x: 2, y: 2, z: 2 });
    // }, [setRotateVelocity, setVelocity])


    return (
        <>
            {Dice}
            {Dice2}
        </>
    )
}

export default Dice;