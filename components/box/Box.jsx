"use client"
import React from 'react'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';



const Box = () => {
    const colorMap = useLoader(TextureLoader, "./NorwayForest.jpg")
    // const colorMap = useLoader(TextureLoader, "./SpaceBlanketFolds.png")
    return (
        <mesh rotation={[90, 0, 20]}>
            <torusKnotBufferGeometry attach="geometry" />
            {/* <meshLambertMaterial attach="material" color="hotpink" /> */}
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}

export default Box