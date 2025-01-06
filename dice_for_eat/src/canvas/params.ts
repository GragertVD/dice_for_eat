import { Camera, DirectionalLightProps } from "@react-three/fiber";
import { Vector3 } from "three";

export const cameraParams: Camera = { position: new Vector3(0, 20, 0), fov: 90 };

export const directionalLightProps: DirectionalLightProps = { position: new Vector3(0, 25, 0), color: "white" };

export const tableBoxSize = { width: 10, height: 10 };