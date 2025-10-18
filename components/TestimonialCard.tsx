import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-gray-300'
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }
  
  const rating = parseInt(metadata.rating.key)
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="flex text-yellow-400 mb-4">
        {renderStars(rating)}
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{metadata.testimonial_text}"</p>
      
      <div className="flex items-center gap-4">
        {metadata.customer_photo && (
          <img
            src={`${metadata.customer_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={metadata.customer_name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold">{metadata.customer_name}</p>
          {metadata.position && metadata.company && (
            <p className="text-sm text-gray-600">
              {metadata.position} at {metadata.company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}