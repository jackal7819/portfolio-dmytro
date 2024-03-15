import Image from 'next/image';

import ScrollSvg from './ScrollSvg';

const Biography = () => {
	return (
		<div className='flex flex-col justify-center gap-12'>
			{/* BIOGRAPHY TITLE */}
			<h1 className='text-2xl font-bold uppercase'>Biography</h1>
			{/* BIOGRAPHY DESCRIPTION */}
			<p className='md:text-lg'>
				Hi there! My name is Dmytro, and I am a highly skilled mechanic
				with years of experience. My professional journey began at a
				factory, where I not only found stability but also realized the
				importance of continuous skill development. Over the years of
				practice, I have thoroughly studied the repair and maintenance
				of various equipment, as well as the assembly and disassembly of
				structures. Currently, I am open to new professional
				opportunities and ready to apply my extensive knowledge in
				practice. My passion is to bring every job to perfection,
				creating a truly high-quality product. I strive to constantly
				expand my knowledge and skills, mastering the latest
				technologies and techniques. Now, I am seeking an opportunity to
				apply my rich experience and craftsmanship in a professional
				team. I look forward to meeting with you to discuss how my
				qualifications can help improve the efficiency of your repair
				work at the highest level.
			</p>
			{/* BIOGRAPHY QUOTE */}
			<span className='italic md:text-xl'>
				Every day is a new opportunity to become better than yesterday
				and move forward towards your dreams.
			</span>
			{/* BIOGRAPHY SIGN SVG */}
			<div className='self-end'>
				<Image
					src='/name.svg'
					alt='name'
					width={250}
					height={70}
					className='-rotate-3'
				/>
			</div>
			<ScrollSvg />
		</div>
	);
};

export default Biography;
