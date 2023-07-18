import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar2.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
    <main className='absolute'>
      <div className='py-6 mt-8 relative'></div>
      <div className='text-2xl mt-7 mx-7 text-center inline-flex place-self-center relative'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ipsum! Totam quia et nesciunt fuga sequi accusamus hic. Assumenda repellendus animi molestiae accusamus, minima at praesentium consectetur eligendi maiores velit?
      </div>
      <div className='mx-7 mt-7 container grid grid-cols-3 snap-center relative'>
        <div className='border-green-400 h-10 w-30 mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum distinctio nulla ut, accusantium quaerat incidunt impedit nam voluptates maxime ipsa odit ducimus fugiat dignissimos nostrum aliquid numquam tenetur. Fugiat!</div>
        <div className='border-green-400 h-10 w-30 mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae placeat consectetur praesentium ratione ab recusandae voluptatum. Repellat, quod veritatis in esse obcaecati eos repudiandae doloremque fugit. Sint, autem mollitia?</div>
        <div className='border-green-400 h-10 w-30 mx-8 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere officiis, culpa ipsam consectetur rem numquam omnis praesentium possimus reprehenderit! Enim sed molestias consequuntur rerum exercitationem quae quis impedit vel.</div>
      </div>
      <div className='mx-10 relative inline-block'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam qui consequuntur placeat ea minus culpa consectetur corrupti voluptatibus labore! Blanditiis consectetur, quidem quae mollitia possimus soluta expedita perferendis esse beatae.
      </div>
    </main>
    </>
  )
}
