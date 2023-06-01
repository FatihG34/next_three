import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Example - NextJs with ThreeJS',
  description: 'This App cretaed for example threejs in NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='text-center h-10 mb-8'>
          <nav className='flex justify-evenly items-center p-4'>
            <Link href={'/'} className='p-2 bg-slate-500 rounded-md text-white'>First Example</Link>
            <Link href={'/second'} className='p-2 bg-slate-500 rounded-md text-white'>Second Example</Link>
            <Link href={'/third'} className='p-2 bg-slate-500 rounded-md text-white'>Mix Example</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
