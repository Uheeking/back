import Image from 'next/image'
import profile from "../../public/profile.png";

export default function Home() {
  return (
    <div>
      <div className='font-bold text-4xl text-brown-900 dark:text-slate-300 tracking-tighter'>Uheeking</div>
      <div className='flex w-full justify-center'>
        <img src="/profile.png" className='bg-white object-cover inset-0 rounded-full h-[114px] w-[114px]'/>
        <div>My name is :: <span className='bg-black text-white'>Uheeking</span></div>
      </div>
    <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
        <p className="text-green-400">$ npm install next</p>
        <p className="text-white">+ next@10.2.3</p>
        <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
        <p className="text-green-400">$</p>
      </div>
    </aside>
    </div>
  )
}
