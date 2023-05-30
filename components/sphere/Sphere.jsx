import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const Sphered = () => {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#8352FD"
                attach="material"
                distort={0.6}
                speed={1.5}
                roughness={0.2}
            />
        </Sphere>
    );
};

export default Sphered;
