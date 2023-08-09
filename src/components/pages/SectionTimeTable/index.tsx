import styles from './styles/sectionTimeTable.module.css'
import useTimeTable from './hooks/useTimeTable.tsx'
import BaseButton from '@/components/global/BaseButton'

const SectionTimeTable = () => {
  const {
    handleClassChange,
    classButtons,
    activeClass,
    renderTableHeader,
    renderTableRows
  } = useTimeTable()
  return (
    <div>
      <div className={styles.classBtn}>
        {classButtons.map((classType, index) => (
          <BaseButton
            variant='clear'
            key={index}
            onClick={() => handleClassChange(classType)}
            className={activeClass === classType ? styles.active : ''}
          >
            {classType}
          </BaseButton>
        ))}
      </div>
      <div className={styles.schedule}>
        <table>
          <thead>{renderTableHeader()}</thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </div>
  )
}
export default SectionTimeTable
