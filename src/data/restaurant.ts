/**
 * ────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR RESTAURANT INFO
 *  Edit everything here — name, phone, address, hours, social links —
 *  and it updates everywhere on the site.
 *  See README.md → "Where to change things" for the full guide.
 * ────────────────────────────────────────────────────────────────────────
 */

export const restaurant = {
  name: "Tiny's Restaurant",
  shortName: "Tiny's",
  tagline: 'Home-Cooked Meals',
  description:
    'Family owned restaurant with home-cooked meals at reasonable prices and a full bar. Great wait staff to make you feel at home. We have lottery, keno, daily games, scratch tickets. We do offer gift certificates. Daily specials, all you can eat specials.',

  address: {
    line1: '2 Groton School Rd',
    city: 'Ayer',
    state: 'MA',
    zip: '01432',
    full: '2 Groton School Rd, Ayer, MA 01432',
  },

  phone: {
    display: '(978) 772-2917',
    tel: '+19787722917',
  },

  map: {
    embedSrc: 'https://www.google.com/maps?q=2+Groton+School+Rd,+Ayer,+MA+01432&output=embed',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=2%20Groton%20School%20Rd%2C%20Ayer%2C%20MA%2001432&query_place_id=ChIJT1WFscPq44kRgaNb7yhH2SQ',
  },

  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '7:00 AM – 8:30 PM' },
    { day: 'Wednesday', time: '7:00 AM – 8:30 PM' },
    { day: 'Thursday', time: '7:00 AM – 8:30 PM' },
    { day: 'Friday', time: '7:00 AM – 8:30 PM' },
    { day: 'Saturday', time: '7:00 AM – 8:30 PM' },
    { day: 'Sunday', time: '8:00 AM – 4:00 PM' },
  ],

  social: {
    facebook: 'https://www.facebook.com/tinysrestaurantayerc',
    instagram: 'https://www.instagram.com/tinysrestaurant/',
  },

  // Tiny's takes takeout orders by phone — there's no online ordering/delivery platform.
  takeout: {
    note: "Call ahead and we'll have your order ready when you arrive.",
  },

  // Tiny's own guest-review page, where the "Our Latest Reviews" testimonials come from.
  reviewsUrl: 'https://www.tinysrestaurantayer.com/reviews',

  menuPdfUrl: '/menu.pdf',

  reservationNote:
    "This form sends your request directly to our front-of-house team. Prefer to just call ahead? We're happy to take your name over the phone too.",
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const
