import type { DesignTemplate } from '@/types'

interface TemplateCardProps {
  template: DesignTemplate
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const { metadata } = template
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative aspect-video">
        <img
          src={`${metadata.preview_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
          alt={metadata.template_name}
          className="w-full h-full object-cover"
        />
        {metadata.premium_template && (
          <span className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Premium
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {metadata.category.value}
          </span>
          {metadata.customizable && (
            <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
              Customizable
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{metadata.template_name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{metadata.description}</p>
        
        <div className="space-y-1 text-sm text-gray-500">
          {metadata.dimensions && (
            <p><span className="font-semibold">Dimensions:</span> {metadata.dimensions}</p>
          )}
          {metadata.file_formats && (
            <p><span className="font-semibold">Formats:</span> {metadata.file_formats}</p>
          )}
        </div>
      </div>
    </div>
  )
}