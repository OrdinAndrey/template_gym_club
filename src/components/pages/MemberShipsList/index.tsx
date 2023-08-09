import MemberShip from '@/components/pages/MemberShip'
import useMemberShipsList from './hooks/useMemberShipsList.ts'

const MemberShipsList = () => {
  const { memberShips } = useMemberShipsList()
  return (
    <>
      {memberShips.map((plan) => (
        <MemberShip
          key={plan.id}
          cost={plan.cost}
          title={plan.title}
          trainer={plan.trainer}
        />
      ))}
    </>
  )
}
export default MemberShipsList
