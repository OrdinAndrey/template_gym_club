import { MemberShip } from '../types'

const useMemberShipsList = () => {
  const memberShips: MemberShip[] = [
    {
      id: 1,
      title: 'Basic',
      cost: 17,
      trainer: 0
    },
    {
      id: 2,
      title: 'Standard',
      cost: 57,
      trainer: 1
    },
    {
      id: 3,
      title: 'Premium',
      cost: 98,
      trainer: 1
    }
  ]
  return { memberShips }
}

export default useMemberShipsList
