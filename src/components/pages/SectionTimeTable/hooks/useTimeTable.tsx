import { useState } from 'react'
import styles from '../styles/sectionTimeTable.module.css'
import { ISchedule } from '../types'

const useTimeTable = () => {
  const [activeClass, setActiveClass] = useState<string>('All')

  const handleClassChange = (newClass: string) => {
    setActiveClass(newClass)
  }
  const classButtons: string[] = [
    'All',
    'Gym',
    'Crossfit',
    'Cardio',
    'Body',
    'Yoga'
  ]

  const schedule: ISchedule = {
    '10-00': [
      ['Gym', '10.00 - 11.00', 'John Smith'],
      '',
      ['Yoga', '10.00 - 12.00', 'John Smith'],
      '',
      ['Body', '10.00 - 12.00', 'John Smith'],
      '',
      ['Cardio', '10.00 - 11.00', 'John Smith']
    ],
    '14-00': [
      '',
      ['Running', '14.00 - 16.00', 'John Smith'],
      '',
      ['Box', '14.00 - 15.00', 'John Smith'],
      '',
      ['Gym', '14.00 - 16.00', 'John Smith'],
      ''
    ],
    '16-00': [
      ['Cardio', '16.00 - 18.00', 'John Smith'],
      '',
      ['Gym', '16.00 - 19.00', 'John Smith'],
      '',
      ['Yoga', '16.00 - 18.00', 'John Smith'],
      '',
      ['Gym', '16.00 - 20.00', 'John Smith']
    ],
    '18-00': [
      ['Box', '18.00 - 22.00', 'John Smith'],
      ['Body', '18.00 - 20.00', 'John Smith'],
      '',
      ['Crossfit', '18.00 - 21.00', 'John Smith'],
      '',
      ['Cardio', '18.00 - 22.00', 'John Smith'],
      ''
    ],
    '20-00': [
      '',
      ['Gym', '20.00 - 21.00', 'John Smith'],
      ['Body', '20.00 - 21.00', 'John Smith'],
      '',
      ['Cardio', '20.00 - 22.00', 'John Smith'],
      '',
      ['Crossfit', '20.00 - 21.00', 'John Smith']
    ]
  }
  const filteredSchedule: ISchedule = Object.keys(schedule).reduce(
    (filtered: ISchedule, time) => {
      filtered[time] = schedule[time].map((classType) =>
        activeClass === classType[0] || activeClass === 'All' ? classType : ''
      )
      return filtered
    },
    {}
  )
  const renderTableHeader = () => {
    const daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
    return (
      <tr>
        <th></th>
        {daysOfWeek.map((day, index) => (
          <th key={index}>{day}</th>
        ))}
      </tr>
    )
  }

  const renderTableRows = () => {
    return Object.keys(filteredSchedule).map((time) => (
      <tr key={time}>
        <td className={styles.workoutTime}>{time}</td>
        {filteredSchedule[time].map((classType, index) => (
          <td
            key={index}
            className={`${activeClass === classType[0] ? styles.active : ''} ${
              classType ? styles.filledCell : ''
            }`}
          >
            {classType ? (
              <div>
                <h6>{classType[0]}</h6>
                <span>{classType[1]}</span>
                <div className={styles.trainerName}>{classType[2]}</div>
              </div>
            ) : (
              ''
            )}
          </td>
        ))}
      </tr>
    ))
  }

  return {
    handleClassChange,
    classButtons,
    activeClass,
    renderTableHeader,
    renderTableRows
  }
}
export default useTimeTable
