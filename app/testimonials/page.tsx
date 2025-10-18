import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export const revalidate = 60

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Customer Testimonials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See what creative professionals are saying about DesignPro Studio
        </p>
      </div>

      {testimonials.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No testimonials available at the moment.
          </p>
        </div>
      )}
    </div>
  )
}