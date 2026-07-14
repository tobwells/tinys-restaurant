import heroFriedHaddock from '../assets/images/hero-fried-haddock.webp'
import chickenSaladRoll from '../assets/images/chicken-salad-roll.webp'
import chickenPotPie from '../assets/images/chicken-pot-pie.webp'
import lobsterRoll from '../assets/images/lobster-roll.webp'
import fishermansPlatter from '../assets/images/fishermans-platter.webp'
import primeRib from '../assets/images/prime-rib.webp'
import steakTips from '../assets/images/steak-tips.webp'

export interface GalleryImage {
  id: string
  src: string
  alt: string
}

// Real food photos from Tiny's Restaurant.
export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: heroFriedHaddock, alt: 'Fried haddock plate with french fries, coleslaw and tartar sauce' },
  { id: 'g2', src: lobsterRoll, alt: 'Fresh lobster roll served with onion rings' },
  { id: 'g3', src: fishermansPlatter, alt: "Fisherman's Platter with green beans and mashed potatoes" },
  { id: 'g4', src: primeRib, alt: 'Slow roasted prime rib with mashed potatoes and au jus' },
  { id: 'g5', src: steakTips, alt: 'Grilled sirloin tips with mushrooms, onions and rice pilaf' },
  { id: 'g6', src: chickenSaladRoll, alt: 'Chicken salad roll served with french fries' },
  { id: 'g7', src: chickenPotPie, alt: 'Chicken pot pie with mashed potatoes, gravy and cranberry sauce' },
]
