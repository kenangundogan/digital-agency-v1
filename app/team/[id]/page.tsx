import { CategoryTitle, Testimonials } from '@/components'
import Awards from '@/components/widgets/Awards'
import MemberDetail from '@/components/widgets/team/memberDetail'
import TeamSkills from '@/components/widgets/team/skills'

const page = () => {
  return (
    <main className="space-y-12 sm:space-y-16 lg:space-y-24 pb-12 sm:pb-16 lg:pb-24">
      <CategoryTitle title="Team" title2="Details" />
      <MemberDetail id={1} />
      <TeamSkills />
      <Awards />
      <Testimonials />
    </main>
  )
}

export default page