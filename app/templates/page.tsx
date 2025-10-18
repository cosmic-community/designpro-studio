import { getTemplates } from '@/lib/cosmic'
import TemplateCard from '@/components/TemplateCard'
import CategoryFilter from '@/components/CategoryFilter'

export const revalidate = 60

interface PageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function TemplatesPage({ searchParams }: PageProps) {
  const params = await searchParams
  const templates = await getTemplates()
  
  const selectedCategory = params.category || 'all'
  
  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.metadata.category.key === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Design Templates</h1>
        <p className="text-xl text-gray-600">
          Browse our collection of professional design templates
        </p>
      </div>

      <CategoryFilter selectedCategory={selectedCategory} />

      {filteredTemplates.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No templates found in this category.
          </p>
        </div>
      )}
    </div>
  )
}