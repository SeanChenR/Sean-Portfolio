import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from 'three';

export type Word = {
  text: string;
  imgPath: string;
}

export type ButtonProps = {
  className?: string
  id?: string
  text: string
}

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  }
  materials: {
    [key: string]: THREE.MeshStandardMaterial | THREE.MeshPhongMaterial | THREE.MeshLambertMaterial;
  }
  scene: THREE.Scene;
}