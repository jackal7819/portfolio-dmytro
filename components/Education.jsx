'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
	const educationRef = useRef();
	const isEducationRefInView = useInView(educationRef);
	return (
		<div
			className='flex flex-col justify-center gap-12 pb-[10vh]'
			ref={educationRef}
		>
			{/* EDUCATION TITLE */}
			<motion.h1
				className='text-2xl font-bold uppercase'
				initial={{ x: '-300px' }}
				animate={isEducationRefInView ? { x: '0px' } : {}}
				transition={{ delay: 0.3 }}
			>
				Education
			</motion.h1>
			{/* EDUCATION LIST */}
			<div>
				{/* EDUCATION LIST ITEM*/}
				<div className='flex justify-between h-48'>
					{/* LEFT */}
					<div className='w-5/6 md:w-1/3'>
						{/* EDUCATION TITLE */}
						<div className='p-3 font-semibold bg-white rounded-b-lg rounded-s-lg'>
							Technician-Metallurgist
						</div>
						{/* EDUCATION DATE */}
						<div className='p-3 text-sm font-semibold text-pink-400'>
							September 1995 - June 1999
						</div>
						{/* EDUCATION COMPANY */}
						<div className='p-3 text-sm font-semibold uppercase bg-white rounded'>
							Vocational School
						</div>
					</div>
					{/* CENTER */}
					<div className='flex justify-center w-1/6'>
						{/* LINE */}
						<div className='relative w-1 h-full bg-gray-600 rounded'>
							{/* LINE CIRCLE */}
							<div className='absolute w-5 h-5 bg-white rounded-full ring-4 ring-pink-400 -left-2'></div>
						</div>
					</div>
					{/* RIGHT */}
					<div className='w-0 md:w-1/3'></div>
				</div>
				{/* EDUCATION LIST ITEM*/}
				<div className='flex flex-row-reverse justify-between h-48 md:flex-row'>
					{/* LEFT */}
					<div className='w-0 md:w-1/3'></div>
					{/* CENTER */}
					<div className='flex justify-center w-1/6'>
						{/* LINE */}
						<div className='relative w-1 h-full bg-gray-600 rounded'>
							{/* LINE CIRCLE */}
							<div className='absolute w-5 h-5 bg-white rounded-full ring-4 ring-pink-400 -left-2'></div>
						</div>
					</div>
					{/* RIGHT */}
					<div className='w-5/6 md:w-1/3'>
						{/* EDUCATION TITLE */}
						<div className='p-3 font-semibold bg-white rounded-b-lg rounded-s-lg'>
							Carpenter
						</div>
						{/* EDUCATION DATE */}
						<div className='p-3 text-sm font-semibold text-pink-400'>
							September 1991 - June 1993
						</div>
						{/* EDUCATION COMPANY */}
						<div className='p-3 text-sm font-semibold uppercase bg-white rounded'>
							Training and Production Facility
						</div>
					</div>
				</div>
				{/* EDUCATION LIST ITEM*/}
				<div className='flex justify-between h-48'>
					{/* LEFT */}
					<div className='w-5/6 md:w-1/3'>
						{/* EDUCATION TITLE */}
						<div className='p-3 font-semibold bg-white rounded-b-lg rounded-s-lg'>
							Secondary School Diploma
						</div>
						{/* EDUCATION DATE */}
						<div className='p-3 text-sm font-semibold text-pink-400'>
							September 1983 - June 1993
						</div>
						{/* EDUCATION COMPANY */}
						<div className='p-3 text-sm font-semibold uppercase bg-white rounded'>
							Secondary School №30
						</div>
					</div>
					{/* CENTER */}
					<div className='flex justify-center w-1/6'>
						{/* LINE */}
						<div className='relative w-1 h-full bg-gray-600 rounded'>
							{/* LINE CIRCLE */}
							<div className='absolute w-5 h-5 bg-white rounded-full ring-4 ring-pink-400 -left-2'></div>
						</div>
					</div>
					{/* RIGHT */}
					<div className='w-0 md:w-1/3'></div>
				</div>
			</div>
		</div>
	);
};

export default Education;
