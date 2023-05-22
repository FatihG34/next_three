import Image from 'next/image';
import * as Three from 'three';


const scene = new Three.Scene();


const geometry = new Three.SphereGeometry(3, 64, 64);
const material = new Three.MeshStandardMaterial({
  color: "#00ff83"
});
const mesh = new Three.Mesh(geometry, material);
scene.add(mesh)

const camera = new Three.PerspectiveCamera(45, 800, 600);
scene.add(camera)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Three.Js</h1>
      <canvas id="webgl "></canvas>

    </main>
  )
}
