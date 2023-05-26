"use client"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon'
import React from 'react'


const Box = () => {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 20, 0] }))
    return (
        <mesh ref={ref} onClick={() => {
            api.velocity.set(0, 2, 0)
        }} position={[0, 20, 0]}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpnk" />
        </mesh>
    )
}
const Plane = () => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
    return (
        <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[150, 100]} />
            <meshLambertMaterial attach="material" color="yellow" />
        </mesh>
    )
}

const Second = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 20, 1]} angle={0.1} />
                <Physics>
                    <Box />
                    <Plane />
                </Physics>
            </Canvas>
        </div>
    )
}

export default Second
