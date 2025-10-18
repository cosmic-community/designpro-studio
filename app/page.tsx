import Link from 'next/link'
import { getFeaturedTemplates, getFeaturedTestimonials } from '@/lib/cosmic'
import TemplateCard from '@/components/TemplateCard'
import TestimonialCard from '@/components/TestimonialCard'

export const revalidate = 60

export default async function HomePage() {
  const [featuredTemplates, featuredTestimonials] = await Promise.all([
    getFeaturedTemplates(),
    getFeaturedTestimonials(),
  ])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Design Templates
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Create stunning designs in minutes with our library of professionally crafted templates. Perfect for social media, print, presentations, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse Templates
            </Link>
            <Link
              href="/team"
              className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-colors"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Premium Templates</h2>
            <p className="text-xl text-gray-600">
              Our most popular professionally designed templates
            </p>
          </div>
          
          {featuredTemplates.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No featured templates available at the moment.</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link
              href="/templates"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose DesignPro Studio?</h2>
            <p className="text-xl text-gray-600">
              Professional quality templates created by expert designers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
              <p className="text-gray-600">
                Every template is crafted by experienced designers with attention to detail
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
              <p className="text-gray-600">
                Fully editable templates that adapt to your brand and style
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
              <p className="text-gray-600">
                Available in AI, PSD, Figma, and more formats for your workflow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by creative professionals worldwide
            </p>
          </div>
          
          {featuredTestimonials.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No testimonials available at the moment.</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}