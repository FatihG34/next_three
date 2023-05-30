"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./starwars.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fuselage_A-Wing_0_1"].geometry}
            material={materials["A-Wing"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Fuselage_A-Wing_0"].geometry}
            material={materials["A-Wing"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Cannons_A-Wing_0"].geometry}
            material={materials["A-Wing"]}
          />
          <group scale={[1, 0.98, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Power_Pack_A-Wing_0"].geometry}
              material={materials["A-Wing"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Canopy_Canopy_0.geometry}
            material={materials.Canopy}
          />
          <group
            position={[406.82, -2, -31.5]}
            rotation={[0.84, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cameras_A-Wing_0"].geometry}
              material={materials["A-Wing"]}
            />
          </group>
          <group position={[195, 0, -569]} rotation={[0, 0, 0.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["L_Rudder_A-Wing_0"].geometry}
              material={materials["A-Wing"]}
            />
          </group>
          <group position={[-195, 0, -569]} rotation={[0, 0, -0.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["R_Rudder_A-Wing_0"].geometry}
              material={materials["A-Wing"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mesh_(2)_Displays_0"].geometry}
            material={materials.Displays}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mesh_(3)_Lens_0"].geometry}
            material={materials.Lens}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Mesh_(4)_Engine_Glow_0"].geometry}
            material={materials.Engine_Glow}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./starwars.gltf");