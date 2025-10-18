// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Design Template type
export interface DesignTemplate extends CosmicObject {
  type: 'design-templates';
  metadata: {
    template_name: string;
    description: string;
    preview_image: {
      url: string;
      imgix_url: string;
    };
    category: {
      key: string;
      value: string;
    };
    dimensions?: string;
    file_formats?: string;
    customizable: boolean;
    premium_template: boolean;
  };
}

// Team Member type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    role: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    portfolio_link?: string;
    specialization?: {
      key: string;
      value: string;
    };
  };
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name: string;
    company?: string;
    position?: string;
    testimonial_text: string;
    rating: {
      key: string;
      value: string;
    };
    customer_photo?: {
      url: string;
      imgix_url: string;
    };
    featured: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}