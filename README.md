# DesignPro Studio - Professional Design Template Platform

![App Preview](https://imgix.cosmicjs.com/9574c480-abea-11f0-90fb-8f36ba79c854-photo-1589939705384-5185137a7f0f-1760768446607.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern SaaS platform showcasing professional design templates, expert team profiles, and customer testimonials. Built with Next.js 15 and powered by Cosmic CMS for seamless content management.

## ✨ Features

- 🎨 **Template Gallery**: Browse and filter professional design templates by category
- 👥 **Team Showcase**: Meet the expert designers with detailed profiles and specializations
- ⭐ **Customer Reviews**: Authentic testimonials with ratings and company details
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🚀 **Fast Performance**: Built with Next.js 15 App Router and React Server Components
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML for search engine visibility
- 🔄 **Dynamic Content**: All content managed through Cosmic CMS
- 🎭 **Modern UI**: Clean design with gradient accents and smooth animations

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f32fc0a8c41dcd668710d0&clone_repository=68f332f0a8c41dcd668710ea)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a saas model for graphic designing professional look"

### Code Generation Prompt

> Based on the content model I created for "Create a saas model for graphic designing professional look", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15.1.0 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Cosmic headless CMS
- **Package Manager**: Bun
- **Image Optimization**: Imgix (via Cosmic)
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine ([Download Bun](https://bun.sh))
- A Cosmic account with the provided bucket

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd designpro-studio
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=saas-model-production
COSMIC_READ_KEY=0KsNQQkfu8L8d3FMRKopWNvsxgLvLpJ2JAV9kJHrWOJLEyy939
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Design Templates

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getTemplates() {
  try {
    const response = await cosmic.objects
      .find({ type: 'design-templates' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as DesignTemplate[]
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Filtering by Category

```typescript
export async function getTemplatesByCategory(category: string) {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'design-templates',
        'metadata.category.key': category 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as DesignTemplate[]
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

### Fetching Team Members

```typescript
export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

## 🎨 Cosmic CMS Integration

This application uses three main content types from Cosmic:

### Design Templates
- Template name, description, and preview images
- Category selection (Social Media, Print, Presentation, Marketing, Branding)
- Dimensions and file format specifications
- Customizable and premium template flags

### Team Members
- Full name, role, and professional bio
- Profile photos and portfolio links
- Specialization categories (UI/UX, Brand Design, Illustration, Motion Graphics, Print)

### Testimonials
- Customer name, company, and position
- Detailed testimonial text
- Star ratings (3-5 stars)
- Customer photos and featured flag

All content can be managed through the Cosmic dashboard at [cosmicjs.com](https://www.cosmicjs.com).

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these variables in your deployment platform:

```env
COSMIC_BUCKET_SLUG=saas-model-production
COSMIC_READ_KEY=0KsNQQkfu8L8d3FMRKopWNvsxgLvLpJ2JAV9kJHrWOJLEyy939
```

## 📖 Project Structure

```
designpro-studio/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with hero and featured templates
│   ├── templates/
│   │   └── page.tsx        # All templates with category filter
│   ├── team/
│   │   └── page.tsx        # Team member showcase
│   └── testimonials/
│       └── page.tsx        # Customer reviews
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── TemplateCard.tsx    # Template display card
│   ├── TeamMemberCard.tsx  # Team member profile card
│   ├── TestimonialCard.tsx # Customer review card
│   └── CosmicBadge.tsx     # "Built with Cosmic" badge
├── lib/
│   └── cosmic.ts           # Cosmic SDK configuration
├── types.ts                # TypeScript type definitions
└── public/
    └── dashboard-console-capture.js  # Console logging for dashboard
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Cosmic](https://www.cosmicjs.com) - The headless CMS for modern applications
- Powered by [Next.js](https://nextjs.org) - The React Framework
- Styled with [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework

---

**Need help?** Check out the [Cosmic docs](https://www.cosmicjs.com/docs) or [Next.js documentation](https://nextjs.org/docs).

<!-- README_END -->