export interface PackageItinerary {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  id: number;
  featured?: boolean;
  category: "festival" | "adventure";
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  priceNote: string;
  image: string;
  highlights: string[];
  itinerary: PackageItinerary[];
  includes: string[];
  excludes: string[];
  bestTime: string;
}

export const packages: TourPackage[] = [
  // ======================== FESTIVAL ITINERARIES ========================
  {
    id: 1,
    featured: true,
    category: "festival",
    title: "Dehing Patkai & Majuli Music Festival",
    destination: "Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 People",
    price: "₹28,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
    highlights: ["Dehing Patkai Festival", "Majuli Music Festival", "Tribal Culture", "Rainforest Trek", "Brahmaputra Experience"],
    itinerary: [
      { day: 1, title: "Arrival Dibrugarh – Dehing Patkai Festival", description: "Arrive Dibrugarh, drive to Lekhapani (2.5 hrs). Check-in at festival campsite. Explore tribal stalls (Tai Phake, Singpho, Tangsa), crafts & food. Evening: Inaugural ceremony, Bihu & Singpho dance performances, traditional dinner with Singpho tea." },
      { day: 2, title: "Adventure & Culture at Dehing Patkai", description: "Morning: Jungle trekking in Dehing Patkai Rainforest, visit Stilwell Road & WWII cemetery. Afternoon: Cooking workshops, tea-tasting, tribal storytelling. Evening: Musical night with indigenous fusion music, authentic Assamese & tribal cuisine." },
      { day: 3, title: "Travel to Majuli Island", description: "Depart for Majuli via Jorhat (5-6 hrs). Ferry crossing from Nimati Ghat (1 hr). Check-in near festival site. Explore satras (Vaishnavite monasteries) or cycle around villages. Evening: Opening night of Majuli Music Festival, folk & fusion performances, bonfire jam sessions." },
      { day: 4, title: "Full Day Majuli Music Festival", description: "Morning: Music workshops (folk instruments, songwriting), artist installations & handicraft stalls. Afternoon: Open mic sessions, traditional boat music parades, organic food stalls. Evening: Headliner performances, sound & light storytelling show, optional night kayaking." },
      { day: 5, title: "Return via Jorhat", description: "Sunrise jam session at festival. Breakfast and ferry back to Nimati Ghat. Drive to Jorhat Airport for departure." }
    ],
    includes: ["Festival entry passes (both festivals)", "Accommodation (tents/eco-cottages/homestays)", "All internal transport", "Guided treks & workshops", "Daily breakfast & dinner", "Cultural experiences & performances", "Ferry charges"],
    excludes: ["Air/train fare to Dibrugarh & from Jorhat", "Lunches", "Personal expenses", "Travel insurance", "Additional adventure add-ons (night kayaking, premium camping)"],
    bestTime: "Festival Season (Check dates)"
  },
  {
    id: 2,
    category: "festival",
    title: "Majuli Music Festival Experience",
    destination: "Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 People",
    price: "₹24,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
    highlights: ["Majuli Music Festival", "Dehing Patkai Festival", "Sattriya Dance", "Brahmaputra Sunset", "Tea Gardens"],
    itinerary: [
      { day: 1, title: "Dibrugarh to Lekhapani", description: "Arrive Dibrugarh Airport. Drive to Lekhapani. Check-in at eco-camps. Evening: Dehing Patkai Festival inauguration, cultural dance performances (Bihu, Singpho, Tai Phake), traditional tribal welcome, local cuisine stalls, campfire & ethnic musical night." },
      { day: 2, title: "Dehing Patkai Festival + Eco Adventure", description: "Morning: Tribal crafts & textiles fair, traditional games with artisans. Midday: Dehing Patkai Rainforest trekking, visit tea gardens & WWII Stillwell Road. Evening: Regional band performances, local food tasting (bamboo shoot, smoked pork, pitha)." },
      { day: 3, title: "Journey to Majuli Island", description: "Early breakfast and drive to Neemati Ghat, Jorhat (6 hrs). Ferry to Majuli Island. Check-in at bamboo cottages. Evening: Opening of Majuli Music Festival, indie/folk/fusion bands, Sattriya dance interludes, sunset by Brahmaputra with chill music." },
      { day: 4, title: "Full Day Majuli Music Festival", description: "Morning: Visit Sattras for devotional music & mask-making demos. Afternoon: Festival art walk, musical workshops (folk percussion, songwriting), ethnic food court. Evening: Live performances by folk fusion artists, lantern release by river, open-air folk + DJ fusion." },
      { day: 5, title: "Departure via Jorhat", description: "Morning ferry back to Neemati Ghat. Transfer to Jorhat Airport. Optional stop at local tea garden boutique." }
    ],
    includes: ["Accommodation (4 nights)", "Daily breakfast & dinners", "All transfers & ferry charges", "Festival entry passes & guided access", "Trekking & cultural guides"],
    excludes: ["Airfare to Dibrugarh & from Jorhat", "Lunches", "Personal expenses", "Travel insurance", "Additional adventure activities"],
    bestTime: "Festival Season (Check dates)"
  },
  {
    id: 3,
    featured: true,
    category: "festival",
    title: "Ziro Music Festival Experience",
    destination: "Arunachal Pradesh",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    price: "₹26,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200",
    highlights: ["Ziro Music Festival", "Apatani Tribal Culture", "Pine-Clad Hills", "Indie & Fusion Music", "Himalayan Birdlife"],
    itinerary: [
      { day: 1, title: "Dibrugarh to Ziro Valley", description: "Arrive Dibrugarh Airport. Scenic drive to Ziro Valley (6 hrs). Stop at Ranganadi Dam and Apatani villages en route. Check-in at homestay/campsite. Evening: Pre-festival jam sessions, local rice beer tasting, artist interactions." },
      { day: 2, title: "Ziro Music Festival – Opening Day", description: "Explore festival grounds surrounded by pine-clad hills and paddy fields. Attend inauguration with traditional Apatani rituals. Live performances: indie, tribal-fusion, experimental, folk, electronic. Browse artisan stalls, handmade instruments, tribal textiles. Sunset concert, bonfire jam sessions, open-mic nights." },
      { day: 3, title: "Festival + Cultural Exploration", description: "Early morning visit to Hong and Hari Apatani villages. Learn about Apatani facial tattoos, nose plugs & terrace farming. Return for midday performances & food trucks. Music workshops: percussion, loop-based music, tribal chanting. Dance under the stars with top indie headliners." },
      { day: 4, title: "Final Festival Day + Nature", description: "Leisurely breakfast at campsite. Guided Ziro Valley nature walk or birdwatching (rich Himalayan birdlife). Afternoon: closing festival acts. Final night celebration with bonfire, lantern release, and jam night." },
      { day: 5, title: "Return to Dibrugarh", description: "Morning drive back to Dibrugarh. Optional stops at tribal markets en route. Departure with memories of music, mountains & Apatani hospitality." }
    ],
    includes: ["4 nights accommodation", "Breakfast & dinner daily", "Local transfers & festival access", "Cultural guide", "Arunachal Pradesh permits", "Festival entry"],
    excludes: ["Flights to Dibrugarh", "Lunches & snacks", "Personal expenses", "Travel insurance", "Camera/video permits"],
    bestTime: "Late September"
  },
  {
    id: 4,
    category: "festival",
    title: "Losar Festival in Tawang",
    destination: "Arunachal Pradesh",
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    price: "₹32,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1564769625688-13808d09d44e?w=1200",
    highlights: ["Losar (Tibetan New Year)", "Tawang Monastery", "Cham Dance", "Sela Pass", "Buddhist Culture"],
    itinerary: [
      { day: 1, title: "Tezpur to Tawang", description: "Arrive Tezpur Airport (Assam). Transfer to Tawang via Bomdila (6-8 hrs). Enjoy scenic Himalayan views, Dirang Valley, Sela Pass. Evening arrival and rest." },
      { day: 2, title: "Losar Festival – Day 1", description: "Attend Losar festivities at Tawang Monastery (Asia's 2nd largest). Observe Cham dance (masked dance symbolizing good over evil). Prayer sessions & butter lamp lighting. Explore Tibetan-Buddhist markets, ritual displays, Losar flags. Try festive food: khapse, thukpa, butter tea." },
      { day: 3, title: "Losar + Cultural Immersion", description: "Early morning visit to Urgelling Monastery (birthplace of 6th Dalai Lama). Attend community gatherings & local theatre with Buddhist tales. Join traditional dance, exchange 'Tashi Delek' greetings. Visit Giant Buddha Statue, participate in Butter Sculpture making." },
      { day: 4, title: "Scenic Exploration", description: "Visit Sela Pass, Nuranang Waterfalls, Gorichen Peak viewpoints. Stop at Tawang War Memorial. Losar-themed bonfire dinner with folklore music and dance." },
      { day: 5, title: "Return to Tezpur", description: "Early morning drive back to Tezpur. Optional halt at Bomdila Monastery and orchid sanctuaries. Depart with spiritual and cultural blessings." }
    ],
    includes: ["4 nights accommodation", "Breakfast & dinner daily", "Local transfers & festival access", "Cultural guide", "Arunachal Pradesh permits", "Monastery entry"],
    excludes: ["Flights to Tezpur", "Lunches & snacks", "Personal expenses", "Travel insurance", "Camera/video permits"],
    bestTime: "February - March (Losar dates vary)"
  },

  // ======================== ADVENTURE ITINERARIES ========================
  {
    id: 5,
    featured: true,
    category: "adventure",
    title: "Triple State Adventure: Paragliding, Rafting & Trekking",
    destination: "Assam, Meghalaya, Arunachal Pradesh",
    duration: "10 Days / 9 Nights",
    groupSize: "4-10 People",
    price: "₹58,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1200",
    highlights: ["River Rafting (Jia Bhoroli)", "Paragliding (Mawkdok)", "Trekking (Talley Valley)", "Rock Climbing (Ziro)", "Mawsmai Caves"],
    itinerary: [
      { day: 1, title: "Guwahati to Nameri", description: "Arrive Guwahati, drive to Nameri National Park (5 hrs). Short guided forest trail in the evening. Overnight at Nameri Eco Camp." },
      { day: 2, title: "Jia Bhoroli River Rafting", description: "River rafting through Class II–III rapids in crystal-clear waters. Optional birdwatching during rafting. Overnight in Nameri." },
      { day: 3, title: "Transfer to Shillong", description: "Drive from Nameri to Shillong (5.5 hrs). Evening at leisure, explore Police Bazaar. Overnight in Shillong." },
      { day: 4, title: "Paragliding in Mawkdok", description: "Travel to Mawkdok Dympep Valley. Professional paragliding flight over stunning valley (10–15 mins). Return to Shillong for overnight stay." },
      { day: 5, title: "Caving & Waterfall Adventure", description: "Explore Mawsmai & Arwah caves. Short cliff jumps or dip at Wei Sawdong Falls (optional). Overnight in Sohra (Cherrapunji)." },
      { day: 6, title: "Transfer to Ziro", description: "Early drive to Ziro via Tezpur–Kimin (10 hrs) – permits check. Check into local guesthouse. Overnight in Ziro." },
      { day: 7, title: "Talley Valley Trek", description: "Full-day trek into Talley Valley Wildlife Sanctuary. Explore orchids, bamboos, and pine forests. Return to Ziro for overnight." },
      { day: 8, title: "Rock Climbing at Ziro", description: "Climbing at local crags near Ziro valley (beginner/intermediate). Learn knotting, belaying, rappelling techniques. Visit Apatani tribal villages. Overnight in Ziro." },
      { day: 9, title: "Transfer to Itanagar", description: "Drive to Itanagar (2.5 hrs). Explore local market or museum. Overnight in Itanagar/Naharlagun." },
      { day: 10, title: "Departure via Guwahati", description: "Drive to Guwahati Airport (5.5 hrs) for departure." }
    ],
    includes: ["Paragliding flight with instructor", "River rafting with safety equipment", "Climbing & trekking permits", "Certified guides & gear", "Transport & accommodation"],
    excludes: ["Flights", "Personal items", "Meals unless specified", "Adventure activities not mentioned"],
    bestTime: "October - April"
  },
  {
    id: 6,
    category: "adventure",
    title: "Three State Adventure: Rafting, Trekking & Climbing",
    destination: "Assam, Arunachal Pradesh, Nagaland",
    duration: "10 Days / 9 Nights",
    groupSize: "4-8 People",
    price: "₹62,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200",
    highlights: ["River Rafting (Jia Bhoroli)", "Dzukou Valley Trek", "Japfu Peak", "Mechuka Rock Climbing", "Memba Tribal Villages"],
    itinerary: [
      { day: 1, title: "Guwahati to Nameri", description: "Arrive Guwahati, transfer to Nameri National Park (5 hrs). Orientation & nature walk. Overnight at Nameri Eco Camp." },
      { day: 2, title: "Jia Bhoroli River Rafting", description: "White-water rafting through Grade II–III rapids. Optional birdwatching along the river. Overnight in Nameri." },
      { day: 3, title: "Transfer to Kohima", description: "Scenic drive to Kohima via Tezpur–Dimapur (7 hrs). Visit Kisama Heritage Village if time permits. Overnight in Kohima." },
      { day: 4, title: "Trek to Dzukou Valley", description: "Drive to Viswema (1 hr), begin trek. Camp/stay in valley rest house. Overnight in Dzukou Valley." },
      { day: 5, title: "Explore Dzukou + Return", description: "Explore meadows, seasonal flowers, rare orchids. Return trek to Viswema, drive to Kohima. Overnight in Kohima." },
      { day: 6, title: "Japfu Peak Trek", description: "Early morning trek to summit (Nagaland's 2nd highest peak). See world's tallest Rhododendron tree. Return to Kohima by evening." },
      { day: 7, title: "Transfer to Mechuka", description: "Long scenic drive via Dibrugarh and Along (18 hrs). Reach Mechuka Valley in evening. Overnight in Mechuka." },
      { day: 8, title: "Rock Climbing in Mechuka", description: "Half-day rock climbing at local cliffs. Optional hikes to hilltop monastery or Hanging Bridge. Overnight in Mechuka." },
      { day: 9, title: "Cultural Exploration + Along", description: "Visit indigenous Memba tribal villages. Return to Along (Aalo) by road (6 hrs). Overnight in Along." },
      { day: 10, title: "Departure via Dibrugarh", description: "Transfer to Dibrugarh Airport (5 hrs) for departure." }
    ],
    includes: ["All adventure equipment & guides", "Accommodation (hotels, eco camps, rest houses)", "Transport with driver", "Inner Line Permits (ILP) for Arunachal & Nagaland"],
    excludes: ["Flights/train fare", "Personal insurance", "Meals not specified", "Entry fees where applicable"],
    bestTime: "October - April"
  },
  {
    id: 7,
    category: "adventure",
    title: "Ultimate Northeast Adventure Circuit",
    destination: "Assam, Nagaland, Meghalaya",
    duration: "10 Days / 9 Nights",
    groupSize: "4-10 People",
    price: "₹55,000",
    priceNote: "per person",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200",
    highlights: ["River Rafting (Jia Bhoroli)", "Dzukou Valley & Japfu Peak", "Paragliding (Mawkdok)", "Rock Climbing (Shnongpdeng)", "Umngot River"],
    itinerary: [
      { day: 1, title: "Guwahati to Nameri", description: "Arrive Guwahati, travel to Nameri National Park (4.5 hrs). Orientation nature walk. Overnight at Nameri Eco Camp." },
      { day: 2, title: "Jia Bhoroli River Rafting", description: "Rafting through Grade II–III rapids (3–4 hrs). Riverside picnic and birdwatching. Evening campfire. Overnight at Nameri." },
      { day: 3, title: "Transfer to Kohima", description: "Drive to Kohima via Tezpur–Dimapur (6.5 hrs). Check into hotel/homestay. Visit Kisama Heritage Village if time permits. Overnight in Kohima." },
      { day: 4, title: "Trek to Dzukou Valley", description: "Start trek from Viswema base (1 hr drive). Scenic climb to valley. Camp/guesthouse stay in Dzukou Valley." },
      { day: 5, title: "Explore Dzukou + Return", description: "Explore floral landscapes, caves, and streams. Return trek to Viswema and drive to Kohima. Overnight in Kohima." },
      { day: 6, title: "Japfu Peak Trek", description: "Early morning hike to summit (Nagaland's 2nd highest). See world's tallest Rhododendron tree. Descend and return to Kohima. Overnight stay." },
      { day: 7, title: "Transfer to Shillong", description: "Scenic drive via Dimapur–Jorabat–Shillong (7.5 hrs). Check-in at Shillong guesthouse. Overnight in Shillong." },
      { day: 8, title: "Paragliding + Shnongpdeng", description: "Morning paragliding at Mawkdok Dympep Valley. Post-lunch drive to Shnongpdeng near Dawki (3 hrs). Camp by Umngot River. Overnight riverside camping." },
      { day: 9, title: "Rock Climbing & River Adventures", description: "Beginner rock climbing on river-facing limestone cliffs. Optional cliff jumping or kayaking in Umngot River. Evening campfire. Overnight at Shnongpdeng." },
      { day: 10, title: "Departure via Guwahati", description: "Transfer to Guwahati Airport (5.5 hrs) for departure." }
    ],
    includes: ["Certified guides & all adventure gear", "Homestays, eco camps & hotel accommodation", "ILP for Nagaland", "Local transportation throughout"],
    excludes: ["Air/train fare", "Travel insurance", "Meals not specified", "Tips/personal expenses"],
    bestTime: "October - April"
  }
];
