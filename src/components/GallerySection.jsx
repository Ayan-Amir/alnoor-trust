import SectionTitle from './SectionTitle'

function GallerySection({ driveGalleryUrl, images = [] }) {
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Photo Gallery"
          title="Campus life and student activities"
          description="Explore Al Noor Trust photos from school events, classes, and community programs."
        />

        {images.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <article key={image.src} className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
                <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" loading="lazy" />
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-slate-700">
            No local gallery images found yet in <code>public/images</code>. Add photos there and they will appear
            automatically after redeploy.
          </div>
        )}

        <div className="mt-8">
          <a
            href={driveGalleryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-md bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Open Full Photo Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
