import Trainer from '@/components/pages/Trainer'
import useTrainersList from './hooks/useTrainersList.ts'

const TrainersList = () => {
  const { trainers } = useTrainersList()
  return (
    <>
      {trainers.map((trainer) => (
        <Trainer
          key={trainer.id}
          number={trainer.id}
          nameTrainer={trainer.name}
          role={trainer.role}
          description={trainer.description}
        />
      ))}
    </>
  )
}
export default TrainersList
