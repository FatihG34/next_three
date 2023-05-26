import React from 'react';
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

const ThreeBox = () => {
    return (
        <div>ThreeBox</div>
    )
}

export default ThreeBox