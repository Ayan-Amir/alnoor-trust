import heroBackground from "../assets/images/IMG_9590.JPG";

function Hero({ content, location }) {
	return (
		<section
			id='top'
			className='relative bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(10, 36, 99, 0.88), rgba(18, 48, 126, 0.82)), url(${heroBackground})`,
			}}
		>
			<div className='mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20'>
				<div>
					<p className='mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300'>
						Empowering Communities Since 2000
					</p>
					<h1 className='text-4xl font-bold leading-tight text-white md:text-5xl'>{content.title}</h1>
					<p className='mt-4 text-lg text-slate-200'>{content.subtitle}</p>
					<p className='mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300'>{location}</p>
					<div className='mt-8 flex flex-wrap gap-3'>
						<a
							href={content.ctaPrimary.href}
							className='rounded-md bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-300'
						>
							{content.ctaPrimary.label}
						</a>
						<a
							href={content.ctaSecondary.href}
							className='rounded-md border border-slate-200 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white hover:text-slate-900'
						>
							{content.ctaSecondary.label}
						</a>
					</div>
				</div>

				<div className='mx-auto w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur'>
					<img
						className='mx-auto w-44 rounded-full border-4 border-amber-300 bg-white p-2'
						src='/logo.png'
						alt='Al Noor Trust crest'
					/>
					<p className='mt-6 text-center text-lg font-semibold text-white'>
						Every contribution helps a child stay in school.
					</p>
					<p className='mt-2 text-center text-sm text-slate-200'>
						Sponsor fees, support teachers, and strengthen school infrastructure.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;
