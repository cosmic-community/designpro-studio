'use client'

import Link from 'next/link'

interface CategoryFilterProps {
  selectedCategory: string
}

const categories = [
  { key: 'all', value: 'All Templates' },
  { key: 'social-media', value: 'Social Media' },
  { key: 'print', value: 'Print' },
  { key: 'presentation', value: 'Presentation' },
  { key: 'marketing', value: 'Marketing' },
  { key: 'branding', value: 'Branding' },
]

export default function CategoryFilter({ selectedCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category.key
          
          return (
            <Link
              key={category.key}
              href={category.key === 'all' ? '/templates' : `/templates?category=${category.key}`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.value}
            </Link>
          )
        })}
      </div>
    </div>
  )
}