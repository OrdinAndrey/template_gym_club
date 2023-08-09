import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import styles from './styles/sectionMap.module.scss'
const SectionMap = () => {
  const apiKey = import.meta.env.VITE_YANDEX_KEY
  const mapState = {
    center: [55.76, 37.727],
    zoom: 12
  }

  return (
    <div className={styles.mapWrapper}>
      <YMaps query={{ apikey: apiKey }}>
        <Map
          state={mapState}
          className={styles.sizeMap}
          instanceRef={(ref) => {
            ref && ref.behaviors.disable('scrollZoom')
          }}
        >
          <Placemark geometry={[55.76, 37.727]} />
          <ZoomControl />
        </Map>
      </YMaps>
    </div>
  )
}
export default SectionMap
