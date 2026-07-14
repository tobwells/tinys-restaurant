export interface Review {
  id: string
  name: string
  dish: string
  date: string
  text: string
}

// Real guest reviews from tinysrestaurantayer.com/reviews
export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Nautibuoys',
    dish: 'Bacon & Cheese Omelet',
    date: '10 months ago',
    text: 'Absolutely delicious! One of the best, if not THE best, bacon & cheese omelets I ever had. Cooked perfectly. The toast and home fries were also just as good. Friendly, courteous and prompt service from the staff too. So good, I keep coming back for more.',
  },
  {
    id: 'r2',
    name: 'Imanguswinship',
    dish: "Tiny's Top O'The Morning",
    date: '8 months ago',
    text: "Perfect amount of food for a hungry belly! Always looking forward to the atmosphere and vibes of either room I'm in. The staff is super friendly and always attentive. Won't be missing out by visiting them any day of the week!",
  },
  {
    id: 'r3',
    name: 'Bellar',
    dish: 'Grilled Rueben',
    date: 'last year',
    text: 'The grilled rueben was delish, full of flavor and a generous helping of corned beef! I also tried their potato salad which was also very good.',
  },
  {
    id: 'r4',
    name: 'Deborah',
    dish: 'Haddock Dinner',
    date: '8 months ago',
    text: 'Always a great meal here. The people here are always taking care of us.',
  },
  {
    id: 'r5',
    name: 'Melanie',
    dish: 'Grilled Sirloin Tips',
    date: '5 months ago',
    text: 'Delicious steak dinner. I highly recommend it.',
  },
  {
    id: 'r6',
    name: 'Clare',
    dish: 'Fresh Turkey',
    date: 'last year',
    text: 'One of my favorite dishes, always good, very generous helping of food.',
  },
]
