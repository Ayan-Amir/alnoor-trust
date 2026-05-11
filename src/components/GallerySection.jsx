import SectionTitle from "./SectionTitle";

function GallerySection({ images = [] }) {
	return (
		<section id='gallery' className='bg-white py-16'>
			<div className='mx-auto max-w-6xl px-4 md:px-6'>
				<SectionTitle
					eyebrow='Photo Gallery'
					title='Campus life and student activities'
					description='Explore Al Noor Trust photos from school events, classes, and community programs.'
				/>

				{images.length > 0 ? (
					<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{images.map(image => (
							<article key={image.src} className='overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm'>
								<img src={image.src} alt={image.alt} className='h-56 w-full object-cover' loading='lazy' />
							</article>
						))}
					</div>
				) : (
					<div className='rounded-xl border border-blue-100 bg-blue-50 p-6 text-slate-700'>
						No local gallery images found yet in <code>src/assets/images</code>. Add photos there and they will appear
						here after you save and refresh.
					</div>
				)}
			</div>
		</section>
	);
}

export default GallerySection;
