import Gallery from '../components/Gallery.jsx'
import galleryData from '../data/galleryData.js'

function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-4">
        <h1 className="section-heading">Gallery</h1>
        <div className="divider-line mx-auto mt-6 mb-10" />
      </div>
      <Gallery images={galleryData} />
    </div>
  )
}

export default GalleryPage
