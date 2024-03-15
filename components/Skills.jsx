'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import ScrollSvg from './ScrollSvg';

const skills = [
	{
		id: 1,
		name: 'In-depth knowledge in repair and maintenance of metallurgical equipment',
	},
	{ id: 2, name: 'Experience working with complex mechanisms and systems' },
	{
		id: 3,
		name: 'Ability to read drawings, diagrams, and technical documentation',
	},
	{
		id: 4,
		name: 'Knowledge of the principles of hydraulic and pneumatic systems',
	},
	{ id: 5, name: 'Experience with hand and power tools' },
	{
		id: 6,
		name: 'Experience in installation, disassembly, and adjustment of equipment',
	},
	{
		id: 7,
		name: 'Ability to work with measuring instruments and diagnostic equipment',
	},
	{ id: 8, name: 'Knowledge of safety standards for repair work' },
	{
		id: 9,
		name: 'Attention to detail, meticulousness, and ability to concentrate',
	},
	{
		id: 10,
		name: 'Responsibility and commitment to continuous professional skill development',
	},
];

const Skills = () => {
	const skillsRef = useRef();
	const isSkillsRefInView = useInView(skillsRef);
	return (
		<div className='flex flex-col justify-center gap-12' ref={skillsRef}>
			{/* SKILLS TITLE */}
			<motion.h1
				initial={{ x: '-300px' }}
				animate={isSkillsRefInView ? { x: '0px' } : {}}
				transition={{ delay: 0.3 }}
				className='text-2xl font-bold uppercase'
			>
				Skills
			</motion.h1>
			{/* SKILLS LIST */}
			<div className='grid grid-cols-1 gap-4'>
				{skills.map((skill) => (
					<div
						key={skill.id}
						className='flex items-center justify-start p-2 text-sm text-white duration-300 bg-black rounded cursor-pointer hover:bg-amber-500'
					>
						{skill.name}
					</div>
				))}
			</div>
			<ScrollSvg />
		</div>
	);
};

export default Skills;
