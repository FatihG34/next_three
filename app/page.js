import Bananas from '@/components/Bananas';
import Image from 'next/image';
import { Suspense } from 'react';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1>Hello Three.Js</h1> */}
      <Suspense fallback={null}>
        <Bananas speed={3} />
      </Suspense>


    </main>
  )
}
