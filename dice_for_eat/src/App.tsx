import { Physics } from '@react-three/rapier'
import { CanvasLayout } from './canvas/CanvasLayout'
import { Dice } from './canvas/Dice'
import { Light } from './canvas/Light'
import { TableBox } from './canvas/TableBox'
import { OrbitControls, Text } from '@react-three/drei'
import { Polygon } from './canvas/Polygon'
import { DoubleSide } from 'three'
import * as THREE from "three";

function App() {

	return (
		<CanvasLayout>
			{/* <PointerLockControls /> */}
			<OrbitControls />
			<Physics gravity={[0, -10, 0]}>
				<Dice />
				<TableBox />
				<Polygon countEdge={6} position={[0, 2, -3]} rotation={[0, 0, 0]} material={{ color: new THREE.Color(0xffffff), side: DoubleSide }}>
					<mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[0, 0.001, 0]}>
						<Text color={'red'} fontSize={0.4}>
							Test
						</Text>
					</mesh>
				</Polygon>
				<Light />
			</Physics>
		</CanvasLayout>
	)
}

export default App
