import { Physics } from '@react-three/rapier'
import { OrbitControls } from '@react-three/drei'
import { Dice } from './Dice'
import { TableBox } from './TableBox'
import { Canvas } from '@react-three/fiber'
import { cameraParams, directionalLightProps } from './params'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'

type Props = {
    className?: string;
}

const Main: React.FC<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [ratio, setRatio] = useState(1);
    console.log('log ratio', ratio)
    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const rect = ref.current.getBoundingClientRect();

        setRatio(rect.height / rect.width);
    }, []);

    return <div className={className} ref={ref}>
        <Canvas fallback={<div>Sorry no WebGL supported!</div>} camera={{ position: new Vector3(0, 30, 0), fov: 90, aspect: 1/ratio }}>
            <OrbitControls />
            <ambientLight />
            <directionalLight {...directionalLightProps} />
            <Physics gravity={[0, -10, 0]}>
                <TableBox height={30 * ratio} width={30} />
                <Dice />
            </Physics>
        </Canvas>
    </div>
}

export default Main;