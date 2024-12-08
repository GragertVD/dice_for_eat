import { Camera, DirectionalLightProps } from "@react-three/fiber";
import { Vector3 } from "three";

export const cameraParams: Camera = { position: new Vector3(0, 20, -25), fov: 45 };

export const directionalLightProps: DirectionalLightProps = { position: new Vector3(0, 25, 0), color: "gold" };

export const tableBoxSize = { width: 10, height: 10 };