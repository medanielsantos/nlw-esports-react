import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'

import logoImg from './assets/logo-nlw.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
     <img src={logoImg} alt="Logo" />
     <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>
     <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-1.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <span className='font-bold text-white block'>League of Legends</span>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-2.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <span className='font-bold text-white block'>Dota 2</span>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-3.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <span className='font-bold text-white block'>Counter Strike 2</span>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-4.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <span className='font-bold text-white block'>Apex Legends</span>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-5.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <span className='font-bold text-white block'>Fortinite</span>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src='/game-6.png' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <span className='font-bold text-white block'>World of Crafts</span>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div>
        </a>
     </div>
     <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#242634] px-8 py-6 flex justify-between'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
     </div>
     </div>
  )
}

export default App
