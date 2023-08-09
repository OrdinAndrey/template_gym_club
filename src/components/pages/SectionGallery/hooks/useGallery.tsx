import { useState } from 'react'

const useGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  const images = [
    { id: 1, categories: ['Fitness'] },
    { id: 2, categories: ['Fitness', 'Coaching'] },
    { id: 3, categories: ['Coaching'] },
    { id: 4, categories: ['Other'] },
    { id: 5, categories: ['Other'] },
    { id: 6, categories: ['Event'] }
  ]

  return { activeCategory, handleCategoryChange, images }
}
export default useGallery
