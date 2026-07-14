export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'reservations',
    question: 'Do I need a reservation?',
    answer:
      "Walk-ins are always welcome. For larger groups, we recommend calling ahead or using the reservation form on this site so we can have the right table ready for you.",
  },
  {
    id: 'takeout',
    question: 'Do you offer takeout?',
    answer: "Yes! Give us a call and we'll have your order ready for pickup.",
  },
  {
    id: 'delivery',
    question: 'Do you offer delivery?',
    answer:
      "We don't currently partner with a delivery service, but takeout is always available — just call ahead.",
  },
  {
    id: 'large-parties',
    question: 'Can you accommodate large parties?',
    answer:
      'Yes — for parties of 6 or more, please call us directly so we can prepare the right table for your group.',
  },
  {
    id: 'full-bar',
    question: 'Do you have a full bar?',
    answer: 'Yes, we have a full bar available to pair with your meal.',
  },
  {
    id: 'lottery-keno',
    question: 'Do you have lottery, keno, or scratch tickets?',
    answer: 'Yes — we offer lottery, keno, daily games, and scratch tickets in house.',
  },
  {
    id: 'gift-cards',
    question: 'Do you sell gift certificates?',
    answer: 'Yes, gift certificates are available — just ask a member of our staff.',
  },
  {
    id: 'allergies',
    question: 'Can you accommodate dietary restrictions or allergies?',
    answer:
      "We've labeled vegetarian and gluten-free items on our menu where we can. If you have a food allergy, please let your server know before ordering so our kitchen can do its best to help.",
  },
]
