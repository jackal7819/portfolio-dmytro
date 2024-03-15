'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<div className='flex flex-col h-full gap-20 pb-24 lg:flex-row lg:pb-0 px-[5vw]'>
				{/* IMAGE CONTAINER */}
				<div className='relative h-1/2 lg:h-full lg:w-1/2'>
					<Image
						src='/image.svg'
						alt=''
						fill
						className='object-contain'
					/>
				</div>
				{/* TEXT CONTAINER */}
				<div className='flex flex-col items-start justify-center gap-8 h-1/2 lg:h-full lg:w-1/2'>
					{/* TITLE */}
					<h1 className='text-4xl font-bold text-center md:text-6xl lg:text-start'>
						Mastery in Every Motion
					</h1>
					{/* DESCRIPTION */}
					<p className='md:text-xl'>
						Welcome to the world of professional repair and
						maintenance! On this website, you'll find a true master
						of the craft, a wizard with tools. Years of experience,
						attention to detail, and a passion for perfection –
						that's what sets me apart from others. Let my skilled
						hands bring your repair projects to life.
					</p>
					{/* BUTTONS */}
					<div className='flex items-center justify-center w-full gap-4 lg:justify-start'>
						<Link
							href='/contact'
							className='w-40 p-3 font-semibold text-center duration-300 border-4 border-black rounded-lg hover:bg-amber-500 hover:text-white hover:border-amber-500 active:bg-amber-400'
						>
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
