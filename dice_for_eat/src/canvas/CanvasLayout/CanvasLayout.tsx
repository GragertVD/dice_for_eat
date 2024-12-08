import { Canvas } from "@react-three/fiber";
import { PropsWithChildren } from "react";
import { cameraParams } from "../params";

import styles from "./CanvasLayout.module.scss";

const CanvasLayout: React.FC<PropsWithChildren> = ({ children }) => {

    return <div className={styles.container}>
        <Canvas fallback={<div>Sorry no WebGL supported!</div>} camera={cameraParams}>
            {children}
        </Canvas>
    </div>
};

export default CanvasLayout;