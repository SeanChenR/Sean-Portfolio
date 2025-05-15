import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from 'three'
import type { Object3D } from 'three';
import type { GLTFResult } from '../../types/type'

export function Room(props: React.JSX.IntrinsicElements['group']) {
  const gltf = useGLTF('/models/optimized-room.glb') as unknown as GLTFResult
  const { nodes, materials } = gltf
  const screensRef = useRef<THREE.Mesh>(null)
  const matcapTexture = useTexture('/images/textures/mat1.png')

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#00e3e3",
  })

  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  })

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#3A006F",
  })

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  })

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  })

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  })

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  })

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef as unknown as Object3D}
          intensity={1} // Strength of the bloom
          luminanceThreshold={0.3} // Minimum luminance needed
          luminanceSmoothing={0.9} // Smooth transition
          blendFunction={BlendFunction.ADD} // How it blends
        />
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  )
}

useGLTF.preload('/models/optimized-room.glb')