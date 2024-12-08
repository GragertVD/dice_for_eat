import { Physics } from '@react-three/rapier'
import { CanvasLayout } from './canvas/CanvasLayout'
import { Dice } from './canvas/Dice'
import { Light } from './canvas/Light'
import { TableBox } from './canvas/TableBox'
import { OrbitControls } from '@react-three/drei'
import { DiceEdge } from './canvas/DiceEdge'

function App() {

  return (
    <CanvasLayout>
      {/* <PointerLockControls /> */}
      <OrbitControls />
      <Physics gravity={[0, -10, 0]}>
        <Dice />
        <TableBox />
        <DiceEdge />
        <Light />
      </Physics>
    </CanvasLayout>
  )
}

export default App
