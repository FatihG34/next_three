"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei';
import Box from '@/components/box/Box';
import Sphered from '@/components/sphere/Sphere';
import Starwars2 from "@/components/Starwars2";
import StarWars3 from '@/components/starWars/StarWars3';

// import Starwars from "../../components/starWars/Starwars";
// import { GLTFLoader } from '../js/examples/jsm/loaders/GLTFLoader.js';

const Third = () => {
    return (
        <div className='bg-black'>
            <div className='h-96'>
                <Canvas>
                    <pointLight position={[10, 10, 10]} />
                    <mesh>
                        <sphereGeometry />
                        <meshStandardMaterial color="yellow" />
                        <OrbitControls />
                        <Stars />
                    </mesh>
                </Canvas>
            </div>
            <div className='grid grid-cols-2 h-96'>
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Box />
                    </Suspense>
                    <Stars />
                </Canvas>
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Sphered />
                    </Suspense>
                    <Stars />
                </Canvas>
            </div>
            <div className='h-screen'>
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Starwars2 />
                    </Suspense>
                    {/* <Stars /> */}
                    {/* <Stars /> */}
                    {/* <Stars /> */}

                </Canvas>
            </div>
            <div className='h-screen'>
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>

                        <StarWars3 />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Third