import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const { nodes, materials } = useGLTF("/date_fruit.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.8}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["polySurface1_01_-_Default_0"].geometry}
                        material={materials["01_-_Default"]}
                        position={[0, 17.6, 0]}
                        scale={0.4}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/date_fruit.glb");