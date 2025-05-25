import { useGLTF } from "@react-three/drei"
import type { ThreeElements } from "@react-three/fiber"
import type { GLTFResult } from '../../../types/type'

export function DeskComputer(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF("/models/computer-optimized-transformed.glb") as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models/computer-optimized-transformed.glb")

export default DeskComputer