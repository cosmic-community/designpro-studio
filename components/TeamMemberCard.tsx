import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { metadata } = member
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {metadata.profile_photo && (
        <div className="aspect-square">
          <img
            src={`${metadata.profile_photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={metadata.full_name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1">{metadata.full_name}</h3>
        <p className="text-primary-600 font-semibold mb-2">{metadata.role}</p>
        
        {metadata.specialization && (
          <span className="inline-block text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full mb-4">
            {metadata.specialization.value}
          </span>
        )}
        
        {metadata.bio && (
          <p className="text-gray-600 mb-4">{metadata.bio}</p>
        )}
        
        {metadata.portfolio_link && (
          <a
            href={metadata.portfolio_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View Portfolio →
          </a>
        )}
      </div>
    </div>
  )
}