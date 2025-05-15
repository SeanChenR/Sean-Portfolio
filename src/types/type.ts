import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from 'three';

export type Word = {
  text: string;
  imgPath: string;
}

export type ButtonProps = {
  className: string
  id: string
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

export type NavLink = {
  name: string
  link: string
}

export type CounterItem = {
  value: number
  suffix: string
  label: string
}

export type LogoIcon = {
  imgPath: string
}

export type Ability = {
  imgPath: string
  title: string
  desc: string
}

export type TechStackImg = {
  name: string
  imgPath: string
}

export type TechStackIcon = {
  name: string
  modelPath: string
  scale: number
  rotation: number[]
}

export type ExperienceCard = {
  review: string
  imgPath: string
  logoPath: string
  title: string
  date: string
  responsibilities: string[]
}

export type ExperienceLogo = {
  name: string
  imgPath: string
}

export type Testimonial = {
  name: string
  mentions: string
  review: string
  imgPath: string
}

export type SocialImg = {
  name: string
  imgPath: string
}
