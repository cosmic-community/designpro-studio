import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'

export const revalidate = 60

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our talented team of designers brings years of experience and creativity to every template we create
        </p>
      </div>

      {teamMembers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No team members to display at the moment.
          </p>
        </div>
      )}
    </div>
  )
}