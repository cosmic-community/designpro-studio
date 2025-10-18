import { createBucketClient } from '@cosmicjs/sdk'
import type { DesignTemplate, TeamMember, Testimonial } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Design Templates
export async function getTemplates(): Promise<DesignTemplate[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'design-templates' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as DesignTemplate[]
  } catch (error: any) {
    if (error?.status === 404) return []
    throw new Error('Failed to fetch templates')
  }
}

export async function getTemplatesByCategory(category: string): Promise<DesignTemplate[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'design-templates',
        'metadata.category.key': category 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as DesignTemplate[]
  } catch (error: any) {
    if (error?.status === 404) return []
    throw new Error('Failed to fetch templates by category')
  }
}

export async function getFeaturedTemplates(): Promise<DesignTemplate[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'design-templates',
        'metadata.premium_template': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const templates = response.objects as DesignTemplate[]
    return templates.slice(0, 3)
  } catch (error: any) {
    if (error?.status === 404) return []
    throw new Error('Failed to fetch featured templates')
  }
}

// Team Members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error: any) {
    if (error?.status === 404) return []
    throw new Error('Failed to fetch team members')
  }
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error: any) {
    if (error?.status === 404) return []
    throw new Error('Failed to fetch testimonials')
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'testimonials',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error: any) {
    if (error?.status === 404) return []
    throw new Error('Failed to fetch featured testimonials')
  }
}