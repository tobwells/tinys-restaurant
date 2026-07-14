import chickenSaladRoll from '../assets/images/chicken-salad-roll.jpg'
import chickenPotPie from '../assets/images/chicken-pot-pie.jpg'
import lobsterRoll from '../assets/images/lobster-roll.jpg'
import fishermansPlatter from '../assets/images/fishermans-platter.jpg'
import primeRib from '../assets/images/prime-rib.jpg'
import steakTips from '../assets/images/steak-tips.jpg'

export type Dietary = 'vegetarian' | 'vegan' | 'gluten-free' | 'spicy'

export interface MenuItem {
  id: string
  name: string
  description?: string
  price: string
  dietary?: Dietary[]
  featured?: boolean
  image?: string
}

export interface MenuCategory {
  id: string
  name: string
  note?: string
  items: MenuItem[]
}

export interface MenuGroup {
  id: string
  label: string
  categories: MenuCategory[]
}

export const menuGroups: MenuGroup[] = [
  {
    id: 'lunch-dinner',
    label: 'Lunch & Dinner',
    categories: [
      {
        id: 'appetizers',
        name: 'Appetizers',
        items: [
          { id: 'onion-rings', name: 'Fresh Cut Onion Rings', price: '$8.50', dietary: ['vegetarian'] },
          { id: 'broccoli-cheese-poppers', name: 'Broccoli & Cheese Poppers', price: '$8.50', dietary: ['vegetarian'] },
          { id: 'deep-fried-pickles', name: 'Deep Fried Pickles', price: '$9.95', dietary: ['vegetarian'] },
          { id: 'mozzarella-sticks', name: 'Mozzarella Sticks', price: '$8.50', dietary: ['vegetarian'] },
          { id: 'potato-skins', name: 'Potato Skins w/ Cheese & Bacon', price: '$10.50' },
          { id: 'chili-cheese-app', name: 'Chili w/ Cheese', price: 'Cup $6.25 / Bowl $8.50' },
          { id: 'chicken-tenders-app', name: 'Chicken Tenders', price: '$9.95' },
          { id: 'chicken-wings-app', name: 'Chicken Wings', price: '$10.50' },
          { id: 'chicken-nuggets-app', name: 'Chicken Nuggets', price: '$8.95' },
          { id: 'buffalo-wings', name: 'Buffalo Wings', price: '$10.50', dietary: ['spicy'] },
          { id: 'shrimp-cocktail', name: 'Fresh Shrimp Cocktail (8)', price: 'Market' },
          { id: 'chicken-fries', name: 'Chicken Fries', price: '$9.25' },
          { id: 'fruit-cup-yogurt', name: 'Fresh Fruit Cup w/ Yogurt', price: 'Cup $5.70 / Bowl $6.75', dietary: ['vegetarian'] },
          { id: 'tater-tots-chili-cheese', name: 'Tater Tots with Chili & Cheese', price: '$10.50' },
          {
            id: 'combo-plate',
            name: 'Combo Plate',
            description: 'Onion rings, mozzarella sticks & chicken wings',
            price: '$10.95',
          },
        ],
      },
      {
        id: 'salads',
        name: 'Salads',
        items: [
          { id: 'garden-salad', name: 'Garden Salad', price: 'Side $6.25 / With Tuna $12.95', dietary: ['vegetarian'] },
          { id: 'greek-salad', name: 'Greek Salad', price: '$11.95', dietary: ['vegetarian'] },
          { id: 'taco-salad', name: 'Taco Salad', price: '$12.95' },
          {
            id: 'chef-salad',
            name: 'Chef Salad',
            description: 'Lettuce, tomato, onion, cheese, ham, turkey & egg',
            price: '$12.95',
          },
          {
            id: 'salad-sirloin-tips',
            name: 'Salad w/ Sirloin Tips',
            description: 'Lettuce, tomato, cucumber, onion, cheese with steak tips cooked to your liking',
            price: 'Market',
          },
          { id: 'caesar-salad', name: 'Caesar Salad', price: 'Side $5.60 / Large $6.75 / Large w/ Chicken $12.95' },
        ],
      },
      {
        id: 'plain-sandwiches',
        name: 'Plain Sandwiches',
        note: 'Add French Fries, Soup or Onion Rings for $2.25',
        items: [
          { id: 'hot-dog', name: 'Hot Dog', price: '$6.25' },
          { id: 'grilled-cheese', name: 'Grilled Cheese', price: '$6.25', dietary: ['vegetarian'] },
          { id: 'egg-salad', name: 'Egg Salad', price: '$6.25', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'other-delights',
        name: 'Other Delights',
        note: 'Served w/ French Fries, Soup or Onion Rings',
        items: [
          { id: 'chili-dog', name: 'Chili Dog', price: '$8.95' },
          {
            id: 'grilled-ham-bacon-cheese',
            name: 'Grilled Ham or Bacon & Cheese',
            description: 'Choice of white, wheat or rye bread',
            price: '$8.95',
          },
          { id: 'blt', name: 'B.L.T.', description: 'Choice of white, wheat or rye bread', price: '$9.50' },
          {
            id: 'western',
            name: 'Western',
            description: 'Ham, onion and egg with your choice of white, wheat or rye bread',
            price: '$9.50',
          },
          { id: 'grilled-rueben', name: 'Grilled Rueben', description: 'Served on rye', price: '$10.95' },
          {
            id: 'tuna-salad-sandwich',
            name: 'Tuna Salad',
            description: 'Tuna on a bed of lettuce served on your choice of white, wheat or rye bread',
            price: '$9.50',
          },
          {
            id: 'chicken-salad-roll',
            name: 'Chicken Salad Roll',
            price: '$10.95',
            featured: true,
            image: chickenSaladRoll,
          },
          { id: 'pastrami-cheese-sub', name: 'Pastrami & Cheese Sub', price: '$12.95' },
          { id: 'bbq-pulled-pork', name: 'BBQ Pulled Pork Sandwich', price: '$12.95' },
          {
            id: 'fish-sandwich',
            name: 'Fish Sandwich',
            description: 'Fried haddock served on a bun with tartar sauce',
            price: 'Market',
          },
          {
            id: 'clam-scallop-strip-roll',
            name: 'Clam, Scallop, or Strip Roll',
            description: 'Whole belly clams, scallops or clam strips served on a hot dog roll',
            price: 'Market',
          },
        ],
      },
      {
        id: 'burgers-and-such',
        name: 'Burgers and Such',
        note: 'With choice of French Fries or Onion Rings',
        items: [
          {
            id: 'shaved-steak-cheese-bulkie',
            name: 'Shaved Steak & Cheese Bulkie',
            description: 'Served with lettuce, tomato and mayonnaise',
            price: '$12.95',
          },
          {
            id: 'cheeseburger',
            name: 'Cheeseburger',
            description: 'Served with lettuce, tomato and mayonnaise',
            price: '$8.95',
          },
          {
            id: 'canadian-bacon-burger',
            name: 'Canadian Bacon Burger',
            description: '1/2 lb cheeseburger with Canadian bacon, lettuce, tomato & mayonnaise',
            price: '$15.95',
          },
          {
            id: 'chili-burger',
            name: 'Chili Burger',
            description: '1/4 lb burger topped with chili & cheese',
            price: '$9.95',
          },
          {
            id: 'pepper-burger',
            name: 'Pepper Burger',
            description: '1/4 lb burger topped with red and green peppers',
            price: '$9.95',
          },
          {
            id: 'chicken-burger',
            name: 'Chicken Burger',
            description: 'Chicken burger served with cheddar cheese, bacon, lettuce, tomato and mayonnaise',
            price: '$10.95',
          },
          {
            id: 'italian-chicken-burger',
            name: 'Italian Chicken Burger',
            description: 'Grilled chicken burger with mozzarella cheese & marinara sauce',
            price: '$10.95',
          },
          {
            id: 'twin-cheeseburger-platter',
            name: 'Twin Cheeseburger Platter',
            description: 'Two 1/4 lb burgers with cheese',
            price: '$14.95',
          },
          { id: 'double-dog-platter', name: 'Double Dog Platter', price: '$12.95' },
          {
            id: 'lobster-roll',
            name: 'Fresh Lobster Roll',
            description: 'Fresh lobster salad piled high over a bed of fresh lettuce on a warm toasted roll',
            price: 'Market',
            featured: true,
            image: lobsterRoll,
          },
          {
            id: 'famous-tiny-burger',
            name: 'Famous Tiny Burger',
            description:
              '1/2 pound cheeseburger cooked to your liking, topped with fresh lettuce, tomato, chopped onion, mayo, mustard and relish, served with French fries or onion rings',
            price: '$14.95',
          },
        ],
      },
      {
        id: 'clubs',
        name: "Clubs Of Your Choice",
        note: 'Triple decker sandwich w/ bacon, lettuce, tomato & mayo, served with French Fries or Onion Rings on your choice of white, wheat or rye bread',
        items: [
          { id: 'club-ham-cheese', name: 'Ham & Cheese', price: '$12.95' },
          { id: 'club-tuna', name: 'Tuna', price: '$12.95' },
          { id: 'club-steak-cheese', name: "Steak N' Cheese", price: '$12.95' },
          { id: 'club-roast-beef-cheese', name: 'Roast Beef & Cheese', price: '$12.95' },
          { id: 'club-turkey-cheese', name: 'Turkey & Cheese', price: '$12.95' },
          { id: 'club-cheeseburger', name: 'Cheeseburger', price: '$12.95' },
        ],
      },
      {
        id: 'from-the-deli',
        name: 'From the Deli',
        note: 'Your choice of bulkie, white, wheat or rye with lettuce, tomato & mayonnaise, served with French Fries, Soup or Onion Rings',
        items: [
          { id: 'deli-roast-beef', name: 'Roast Beef', description: 'w/ cheese', price: '$10.95' },
          { id: 'deli-sliced-turkey', name: 'Sliced Turkey', description: 'w/ cheese', price: '$10.95' },
          { id: 'deli-ham', name: 'Ham', description: 'w/ cheese', price: '$10.95' },
          { id: 'deli-chicken-pattie', name: 'Fried/Grilled Chicken Pattie', price: '$10.95' },
          {
            id: 'deli-chicken-parmesan',
            name: 'Chicken Parmesan',
            description: 'w/ mozzarella, no deluxe',
            price: '$10.95',
          },
        ],
      },
      {
        id: 'hot-sandwiches',
        name: 'Hot Sandwiches',
        note: 'Served open face on white or wheat toast with French Fries, Mashed Potato or Onion Rings, Vegetable and Gravy',
        items: [
          { id: 'fresh-pork-cutlet-hot', name: 'Fresh Pork Cutlet', price: '$12.75' },
          { id: 'steak-cutlet', name: 'Steak Cutlet', price: '$13.85' },
          { id: 'hamburg-cutlet', name: 'Hamburg Cutlet', price: '$13.75' },
          { id: 'fresh-veal-cutlet-hot', name: 'Fresh Veal Cutlet', price: '$15.95' },
          { id: 'fresh-turkey-hot', name: 'Fresh Turkey', description: 'w/ stuffing', price: '$15.95' },
          { id: 'fresh-roast-beef-hot', name: 'Fresh Roast Beef', price: '$13.85' },
        ],
      },
      {
        id: 'fresh-from-the-sea',
        name: 'Fresh From the Sea',
        note: 'All fresh hand battered and deep fried, served with choice of potato, rice or onion rings & vegetable, soup or salad',
        items: [
          { id: 'haddock-dinner', name: 'Haddock Dinner', price: 'Market' },
          { id: 'clam-strip-dinner', name: 'Clam Strip Dinner', price: 'Market' },
          {
            id: 'fishermans-platter',
            name: "Fisherman's Platter",
            description: 'Haddock, whole belly clams, scallops, shrimp',
            price: 'Market',
            featured: true,
            image: fishermansPlatter,
          },
          { id: 'clam-dinner', name: 'Clam Dinner', price: 'Market' },
          { id: 'scallop-dinner', name: 'Scallop Dinner', price: 'Market' },
          { id: 'oyster-dinner', name: 'Oyster Dinner', price: 'Market' },
          { id: 'shrimp-dinner', name: 'Shrimp Dinner', price: 'Market' },
        ],
      },
      {
        id: 'italian-side',
        name: 'On the Italian Side',
        note: 'Fresh cooked pasta dinners served with soup or salad and your choice of spaghetti or penne',
        items: [
          { id: 'pasta-meat-sauce', name: 'With Meat Sauce', price: '$12.95' },
          { id: 'pasta-meatballs', name: 'With Meatballs', price: '$14.50' },
          { id: 'pasta-italian-sausage', name: 'With Italian Sausage', price: '$14.95' },
          { id: 'pasta-chicken-veal-parmesan', name: 'With Chicken or Veal Parmesan', price: '$19.95' },
          { id: 'pasta-sirloin-steak', name: 'With 10oz Sirloin Steak', price: 'Market' },
        ],
      },
      {
        id: 'omelets-lunch',
        name: 'Omelets',
        note: 'Served with choice of white or wheat toast, home fries or hash brown',
        items: [
          { id: 'ham-cheese-omelet-lunch', name: 'Ham & Cheese Omelet', price: '$11.95' },
          { id: 'bacon-cheese-omelet-lunch', name: 'Bacon & Cheese Omelet', price: '$11.95' },
          { id: 'western-cheese-omelet-lunch', name: 'Western & Cheese Omelet', price: '$11.95' },
          {
            id: 'cheeseburger-egg-bacon-omelet',
            name: 'Cheeseburger with Egg and Bacon',
            description: 'A quarter-pound cheeseburger served with egg cooked to your liking and bacon on top',
            price: '$10.50',
          },
        ],
      },
      {
        id: 'vegetarian-dishes',
        name: 'Vegetarian Dishes',
        note: 'Served with Soup or Salad',
        items: [
          { id: 'vegetable-stir-fry', name: 'Vegetable Stir-Fry', price: '$13.95', dietary: ['vegetarian'] },
          { id: 'spaghetti-marinara', name: 'Spaghetti', description: 'w/ marinara sauce', price: '$11.95', dietary: ['vegetarian'] },
          {
            id: 'baked-mac-cheese',
            name: 'Baked Macaroni & Cheese',
            description: 'w/ vegetable',
            price: '$13.95',
            dietary: ['vegetarian'],
          },
          {
            id: 'veggie-burger',
            name: 'Veggie Burger',
            description: 'Served with French fries, onion rings or vegetable only',
            price: '$9.95',
            dietary: ['vegetarian'],
          },
        ],
      },
      {
        id: 'dinner-entrees',
        name: 'Dinner Entrees',
        note: 'All entrees served with your choice of potato, rice, or onion rings and vegetable, soup or salad',
        items: [
          {
            id: 'turkey-tips',
            name: 'Grilled Marinated Turkey Tips',
            description: 'Juicy bourbon marinated turkey tips grilled to perfection',
            price: '$18.95',
          },
          {
            id: 'fresh-chicken-cutlet',
            name: 'Fresh Chicken Cutlet',
            description: 'Tenderized chicken breast fried and topped with chicken gravy',
            price: '$18.95',
          },
          {
            id: 'grilled-chicken-breast',
            name: 'Grilled Chicken Breast',
            description: 'BBQ marinated chicken grilled and topped with mushrooms and onions',
            price: '$19.95',
          },
          {
            id: 'fresh-veal-cutlet-dinner',
            name: 'Fresh Veal Cutlet',
            description: 'Tender juicy veal fried & topped with brown gravy',
            price: '$19.95',
          },
          {
            id: 'fresh-pork-cutlet-dinner',
            name: 'Fresh Pork Cutlet',
            description: 'Tenderized pork cutlet fried & topped with brown gravy',
            price: '$16.95',
          },
          {
            id: 'roast-beef-dinner',
            name: 'Roast Beef Dinner',
            description: 'Perfectly roasted Angus beef topped with gravy',
            price: '$17.95',
          },
          {
            id: 'double-pork-chops',
            name: 'Double Pork Chops',
            description: 'Two hand-cut grilled boneless chops',
            price: '$19.95',
          },
          {
            id: 'baby-back-ribs',
            name: 'Baby Back Ribs',
            description: 'Choice of 1/2 rack or full rack, slow cooked and smothered in BBQ sauce',
            price: 'Market',
          },
          {
            id: 'country-fried-steak',
            name: 'Country Fried Steak',
            description: 'Tenderized sirloin steak fried and smothered in sausage gravy',
            price: '$17.95',
          },
          {
            id: 'grilled-sirloin-tips',
            name: 'Grilled Sirloin Tips',
            description: 'Marinated and grilled to your liking, smothered in mushrooms and onions',
            price: 'Market',
            featured: true,
            image: steakTips,
          },
          {
            id: 'liver-onions',
            name: 'Liver and Onions',
            description: 'Perfectly cut liver grilled and topped with sauteed onion and crisp bacon',
            price: '$15.95',
          },
          {
            id: 'meatloaf',
            name: 'Home Style Meatloaf',
            description: 'Thick cut of juicy meatloaf topped with brown gravy',
            price: '$15.95',
          },
          { id: 'fried-chicken-4pc', name: '4 Piece Fried Chicken', price: '$16.95' },
          { id: 'chicken-tenders-dinner', name: 'Chicken Tenders', description: 'Golden fried chicken tenderloins', price: '$11.85' },
          {
            id: 'hamburg-steak',
            name: 'Hamburg Steak',
            description: '1/2 pound juicy burger grilled to your liking, topped with mushrooms, onions and gravy',
            price: '$14.95',
          },
          {
            id: 'chicken-beef-stir-fry',
            name: 'Chicken or Beef Stir-Fry',
            description: 'Crisp vegetables tossed and topped on a bed of rice, served with salad only',
            price: 'Chicken $19.95 / Beef $19.95',
          },
          {
            id: 'franks-beans',
            name: 'Franks and Beans',
            description: 'Two grilled hot dogs served with a side of baked beans, choice of soup or salad only',
            price: '$13.95',
          },
        ],
      },
      {
        id: 'steaks',
        name: 'Steaks',
        note: 'Served with your choice of potato, rice or onion rings and vegetable, soup or salad',
        items: [
          {
            id: 'sirloin-steak',
            name: 'Sirloin Steak',
            description: '10 oz hand cut Angus beef cooked to your liking with grilled mushroom and onions',
            price: 'Market',
          },
          {
            id: 'ribeye-steak',
            name: 'Ribeye Steak',
            description: '14 oz hand cut Angus beef cooked to your liking with grilled mushrooms and onions',
            price: 'Market',
          },
          {
            id: 'prime-rib',
            name: 'Prime Rib',
            description: 'Slow roasted Angus top beef topped with au jus sauce — 12 oz or 14 oz',
            price: 'Market',
            featured: true,
            image: primeRib,
          },
        ],
      },
      {
        id: 'beverages-lunch',
        name: 'Beverages',
        items: [
          { id: 'juice', name: 'Juice', price: '$2.75' },
          { id: 'soda', name: 'Soda', description: 'Bottomless', price: '$3.29' },
          { id: 'lemonade', name: 'Lemonade', description: 'Bottomless', price: '$3.29' },
          { id: 'frappes', name: 'Frappes', price: '$6.25' },
          { id: 'coffee-tea-sanka', name: 'Coffee, Tea, Sanka', description: 'Bottomless', price: '$2.25' },
          { id: 'iced-coffee-tea', name: 'Iced Coffee or Tea', description: 'Bottomless', price: '$2.80' },
          { id: 'hot-chocolate', name: 'Hot Chocolate', price: '$1.75' },
          { id: 'milk', name: 'Milk', price: '$2.75' },
          { id: 'chocolate-milk', name: 'Chocolate Milk', price: '$2.95' },
        ],
      },
      {
        id: 'kids-menu',
        name: 'Kids Menu',
        note: 'For children 10 years or younger. Served with pickles, milk or soda.',
        items: [
          {
            id: 'kids-chicken-tenders',
            name: 'Chicken Tenders',
            description: 'Served with choice of French fries, applesauce, or vegetable',
            price: '$8.95',
          },
          {
            id: 'kids-chicken-nuggets',
            name: 'Chicken Nuggets',
            description: 'Served with choice of French fries, applesauce, or vegetable',
            price: '$8.95',
          },
          {
            id: 'kids-chicken-wings',
            name: 'Chicken Wings',
            description: 'Served with choice of French fries, applesauce, or vegetable',
            price: '$8.95',
          },
          {
            id: 'kids-fried-fish',
            name: 'Fried Fish',
            description: 'Served with choice of French fries, applesauce, or vegetable',
            price: '$8.95',
          },
          {
            id: 'kids-hot-dog',
            name: 'Hot Dog',
            description: 'On a grilled bun, served with choice of French fries, applesauce, or vegetable',
            price: '$8.95',
          },
          {
            id: 'kids-cheeseburger',
            name: 'Cheeseburger',
            description: 'Served with choice of French fries, applesauce, or vegetable',
            price: '$8.95',
          },
          { id: 'kids-mac-cheese', name: 'Macaroni & Cheese', description: 'Served with vegetable', price: '$8.95', dietary: ['vegetarian'] },
          { id: 'kids-spaghetti-meatball', name: 'Spaghetti with Meatball', price: '$8.95' },
        ],
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    categories: [
      {
        id: 'toast-muffins-cereals',
        name: 'Toast, Muffins, Cereals',
        items: [
          { id: 'toast', name: 'Toast', description: 'White, wheat or rye', price: '$1.75', dietary: ['vegetarian'] },
          { id: 'english-muffin', name: 'English Muffin', description: 'Grilled or toasted', price: '$2.25', dietary: ['vegetarian'] },
          { id: 'muffin', name: 'Muffin', description: 'Grilled or toasted', price: '$3.50', dietary: ['vegetarian'] },
          { id: 'oatmeal-toast', name: 'Oatmeal w/ Toast', price: '$6.95', dietary: ['vegetarian'] },
          { id: 'bagel-cream-cheese', name: 'Bagel w/ Cream Cheese', price: 'Plain $3.25 / Everything $3.25', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'side-orders',
        name: 'Side Orders',
        items: [
          { id: 'home-fries-hash-browns', name: 'Home Fries or Hash Browns', price: 'Patty $2.50 / Wedges $3.50', dietary: ['vegetarian'] },
          { id: 'corned-beef-hash', name: 'Corned Beef Hash', price: '$4.95' },
          {
            id: 'bacon-ham-sausage',
            name: 'Bacon, Ham or Sausage',
            price: 'Ham $3.75 / Bacon $3.75 / Sausage Links $3.75 / Sausage Patty $4.75',
          },
          { id: 'baked-beans', name: 'Baked Beans', price: '$4.25', dietary: ['vegetarian'] },
          { id: 'canadian-bacon', name: 'Canadian Bacon', price: '$5.25' },
          { id: 'shredded-hash-browns', name: 'Shredded Hash Browns', price: '$3.50', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'beverages-breakfast',
        name: 'Beverages',
        items: [
          { id: 'coffee', name: 'Coffee', description: 'Bottomless', price: '$2.25' },
          { id: 'decaf', name: 'Decaf', description: 'Bottomless', price: '$2.25' },
          { id: 'hot-tea', name: 'Hot Tea', description: 'Bottomless', price: '$2.25' },
          { id: 'hot-chocolate-bf', name: 'Hot Chocolate', price: '$1.95' },
          { id: 'milk-bf', name: 'Milk', price: '$2.75' },
          { id: 'chocolate-milk-bf', name: 'Chocolate Milk', price: '$2.95' },
          { id: 'juice-bf', name: 'Juice', price: '$2.75' },
        ],
      },
      {
        id: 'healthy-side',
        name: 'The Healthy Side',
        items: [
          { id: 'grain-pancakes', name: '(3) All Grain Pancakes', price: '$7.75', dietary: ['vegetarian'] },
          { id: 'scrambled-egg-whites', name: 'Scrambled Egg Whites', price: '$6.95', dietary: ['vegetarian', 'gluten-free'] },
          {
            id: 'granola',
            name: 'Granola',
            description: 'w/ strawberries or blueberries & yogurt',
            price: '$7.50',
            dietary: ['vegetarian'],
          },
          { id: 'wheat-wrap', name: 'Wheat Wrap', description: 'Egg whites, onions & peppers', price: '$7.25', dietary: ['vegetarian'] },
          { id: 'fruit-yogurt', name: 'Fruit w/ Yogurt', price: 'Cup $5.70 / Bowl $6.75', dietary: ['vegetarian', 'gluten-free'] },
        ],
      },
      {
        id: 'cheeseburger-egg-sandwich',
        name: 'Cheeseburger & Egg Sandwich',
        items: [
          {
            id: 'cheeseburger-egg-sandwich',
            name: 'Cheeseburger & Egg Sandwich',
            description: 'Served on a bulkie w/ home fries or hashbrown',
            price: '$9.95',
          },
        ],
      },
      {
        id: 'from-the-griddle',
        name: 'From the Griddle',
        items: [
          { id: 'pancakes', name: '(3) Pancakes', description: 'w/ syrup', price: '$7.50', dietary: ['vegetarian'] },
          { id: 'texas-french-toast', name: '(3) Texas French Toast', description: 'w/ syrup', price: '$7.50', dietary: ['vegetarian'] },
          { id: 'belgium-waffle', name: '(1) Belgium Waffle', description: 'w/ syrup', price: '$7.25', dietary: ['vegetarian'] },
          { id: 'chocolate-chip-pancakes', name: 'Chocolate Chip Pancakes', price: '$8.50', dietary: ['vegetarian'] },
          {
            id: 'tinys-top-o-morning',
            name: "Tiny's Top O'The Morning",
            description: '(2) French toast or pancakes, served with (2) eggs, ham, bacon or sausage',
            price: '$10.95',
          },
          { id: 'add-fruit-whip-cream', name: 'Add Fruit and Whip Cream to Any of the Above', price: '$2.75', dietary: ['vegetarian'] },
        ],
      },
      {
        id: 'biscuits-gravy',
        name: 'Biscuits & Gravy',
        items: [
          {
            id: 'two-country-biscuits',
            name: 'Two Country Biscuits',
            description: 'Smothered with creamy sausage gravy',
            price: 'Biscuits & Gravy $5.95 / With 2 Eggs $8.95',
          },
        ],
      },
      {
        id: 'tinys-eye-opener',
        name: "Tiny's Eye Opener",
        items: [
          {
            id: 'tinys-eye-opener',
            name: "Tiny's Eye Opener",
            description: 'Scrambled egg, ham, bacon or sausage & cheese on an English muffin',
            price: '$6.25',
          },
        ],
      },
      {
        id: 'three-egg-omelets',
        name: 'Three Egg Omelets',
        note: 'All omelets come with cheese unless otherwise specified. Served with choice of white, wheat, rye or an English muffin.',
        items: [
          { id: 'cheese-omelet', name: 'Cheese Omelet', description: 'American', price: '$7.75', dietary: ['vegetarian'] },
          { id: 'ham-omelet', name: 'Ham Omelet', price: '$8.95' },
          { id: 'bacon-omelet', name: 'Bacon Omelet', price: '$9.95' },
          { id: 'western-omelet', name: 'Western Omelet', description: 'Ham and onions', price: '$9.25' },
          {
            id: 'vegetarian-omelet',
            name: 'Vegetarian Omelet',
            description: 'Tomato, onions, mushrooms, green & red peppers',
            price: '$9.70',
            dietary: ['vegetarian'],
          },
          { id: 'mushroom-omelet', name: 'Mushroom Omelet', price: '$8.95', dietary: ['vegetarian'] },
          { id: 'sausage-omelet', name: 'Sausage Omelet', price: '$8.95' },
          { id: '3-meat-omelet', name: '3 Meat Omelet', price: '$10.25' },
          { id: 'hash-omelet', name: 'Hash Omelet', price: '$10.25' },
          {
            id: 'spanish-omelet',
            name: 'Spanish Omelet',
            description: 'Ham, onions, green & red peppers w/ sauce',
            price: '$10.25',
          },
          { id: 'cheeseburger-omelet', name: 'Cheeseburger Omelet', price: '$10.50' },
          { id: 'steak-tip-omelet', name: 'Steak Tip Omelet', description: 'With mushrooms and onions', price: 'Market' },
        ],
      },
      {
        id: 'eggs-and-such',
        name: 'Eggs and Such',
        note: 'Served with choice of white, wheat, rye or an English muffin',
        items: [
          {
            id: 'two-eggs-any-style',
            name: 'Two Eggs, Any Style',
            description: 'Poached, over easy, over medium, over hard, or scrambled',
            price: '$5.50',
            dietary: ['vegetarian'],
          },
          {
            id: 'eggs-benedict',
            name: 'Eggs Benedict',
            description: 'Poached eggs and Canadian bacon on an English muffin, topped with hollandaise sauce',
            price: '$9.95',
          },
          {
            id: 'eggs-irish',
            name: 'Eggs Irish',
            description: 'Poached eggs and corned beef hash on an English muffin, topped with hollandaise sauce',
            price: '$9.95',
          },
          {
            id: 'two-eggs-steak',
            name: 'Two Eggs with 10oz Steak',
            description: 'Two eggs, any style, with a 10oz steak cooked to your liking, served with home fries and toast',
            price: 'Market',
          },
        ],
      },
    ],
  },
]

export const dailySpecial = {
  name: "Chef's Daily Special: Chicken Pot Pie",
  description:
    "A rotating daily special — flaky puff pastry over home-style chicken pot pie, served with mashed potatoes, gravy, and cranberry sauce. Ask your server what's on today's specials board.",
  image: chickenPotPie,
}

export const dietaryLabels: Record<Dietary, string> = {
  vegetarian: 'Vegetarian',
  vegan: 'Vegan',
  'gluten-free': 'Gluten-Free',
  spicy: 'Spicy',
}

export const featuredDishes = menuGroups.flatMap((g) => g.categories.flatMap((c) => c.items.filter((i) => i.featured)))
