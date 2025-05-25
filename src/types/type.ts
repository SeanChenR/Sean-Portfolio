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
  name: string
}

export type Ability = {
  format: "ai" | "ops" | "web"
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
  rotation: THREE.Euler
  position: THREE.Vector3
  intensity: number
}

export type TechStackIconProps = {
  model: TechStackIcon
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

export type SocialImg = {
  name: string
  imgPath: string
  url: string
}

export type ComputerProps = {
  isMobile: boolean
}

export interface IconBadgesProps {
  format: "ai" | "ops" | "web"
}

export interface TitleHeaderProps {
  title: string
  sub: string
}