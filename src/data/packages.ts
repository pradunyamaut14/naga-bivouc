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
  },
  {
    id: 8,
    category: "wildlife",
    title: "Manas National Park – Brahmaputra Foothill Butterflies",
    destination: "Baksa District, Western Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subtropical moist forests, grasslands, riverbanks",
    bestSpecies: [
      "Kaiser-i-Hind (Teinopalpus imperialis)",
      "Red Helen",
      "Great Nawab",
      "Common Jay",
      "Tailed Jay",
      "Common Bluebottle"
    ],
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Manas",
        description:
          "Arrive at Guwahati Airport – Drive to Manas National Park (137km/3hours). Evening forest edge walk. Stay: Eco-lodge near Bhuyanpara range."
      },
      {
        day: 2,
        title: "Bhuyanpara Trail",
        description:
          "Butterfly walk in Bhuyanpara trail zone. Focus on Nawabs, Jays, and Swallowtails. Photography by streams & undergrowth."
      },
      {
        day: 3,
        title: "Mathanguri Riverside",
        description:
          "Visit Mathanguri riverside and adjacent grassland. Target: Common Mormon, Blue Tiger, Leopard Lacewing. Golden hour photography."
      },
      {
        day: 4,
        title: "Forest Buffer Walk",
        description:
          "Butterfly walk along forest buffer & tea-garden edge habitats. Spotting: Common Snow Flat, Indian Map, Glassy Tiger."
      },
      {
        day: 5,
        title: "Return to Guwahati",
        description:
          "Return to Guwahati with en-route roadside butterfly photography."
      }
    ]
  },

  {
    id: 9,
    category: "wildlife",
    title: "Garbhanga Reserve Forest – Guwahati’s Urban Butterfly Haven",
    destination: "Kamrup District, Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical semi-evergreen forest, stream patches, forest edge",
    bestSpecies: [
      "Blue Mormon",
      "Grey Count",
      "Peacock Pansy",
      "Danaid Eggfly",
      "Common Rose",
      "Glass Bluebottle"
    ],
    itinerary: [
      {
        day: 1,
        title: "Basistha–Garbhanga Walk",
        description:
          "Arrive at Guwahati Airport – Butterfly walk in Basistha–Garbhanga forest patch (51km/1.5hours). Evening light photography."
      },
      {
        day: 2,
        title: "Garbhanga Hotspot",
        description:
          "Full-day trail at Garbhanga. Focus on Papilionidae and Nymphalidae species. Stream puddling photography."
      },
      {
        day: 3,
        title: "Deepor Beel",
        description:
          "Butterfly-watching at Deepor Beel wetland periphery. Target: Grass Yellows, Marsh Skipper, Baronet, Bushbrown. Sunset shoot."
      },
      {
        day: 4,
        title: "Rani Forest Fringe",
        description:
          "Trail at Fatasil and Rani forest fringe. Focus: Count species, Blue Oakleaf, Commander."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Butterfly documentation session and departure."
      }
    ]
  },

  {
    id: 10,
    category: "wildlife",
    title: "Dehing Patkai Wildlife Sanctuary – Eastern Assam Butterfly Zone",
    destination: "Dibrugarh–Tinsukia Region, Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical evergreen rainforest, stream corridors",
    bestSpecies: [
      "Purple Sapphire",
      "Red Spot Duke",
      "Tawny Rajah",
      "Fluffy Tit",
      "Circe",
      "Great Eggfly"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dibrugarh to Dehing",
        description:
          "Arrive Dibrugarh Airport – Drive to Dehing Patkai (97km/2hours). Evening walk at forest trail junction."
      },
      {
        day: 2,
        title: "Jeypore–Upper Dehing",
        description:
          "Butterfly walk targeting Red Spot Duke, Circe, Yellow Orange Tip. Hide photography."
      },
      {
        day: 3,
        title: "Patkai Hills Buffer",
        description:
          "Mid-elevation butterfly walk. Focus on Fluffy Tit, Rajahs, Nabis, Punchinellos."
      },
      {
        day: 4,
        title: "Interface Zone",
        description:
          "Grassland–forest interface exploration. Spotting: Club Beak, Sailor, Common Evening Brown."
      },
      {
        day: 5,
        title: "Return to Dibrugarh",
        description:
          "Return to Dibrugarh with roadside butterfly stop."
      }
    ]
  },

  {
    id: 11,
    category: "wildlife",
    title: "Nameri National Park – Himalayan Foothill Butterflies",
    destination: "Sonitpur District, Assam",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical forest, riverside trails, bamboo patches",
    bestSpecies: [
      "Indian Yellow Nawab",
      "Grey Pansy",
      "Common Maplet",
      "Cruiser",
      "Common Sailor",
      "Commander"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tezpur to Nameri",
        description:
          "Arrive Tezpur Airport – Drive to Nameri (32km/1hour). Evening walk near Jia Bharali riverbed."
      },
      {
        day: 2,
        title: "Bhalukpong Trail",
        description:
          "Butterfly trail at Bhalukpong forest patch. Focus: Sailors, Nawabs, Eggflies."
      },
      {
        day: 3,
        title: "Boat Spotting",
        description:
          "Boat-assisted butterfly spotting along riverbank. Target: Cruiser, Baronet, Pansies, Swallowtails."
      },
      {
        day: 4,
        title: "Potasali Edge Walk",
        description:
          "Edge walk at Potasali & bamboo trail shoot. Target: Grass Yellows, Crimson Rose, Common Mormon."
      },
      {
        day: 5,
        title: "Return to Tezpur",
        description:
          "Return to Tezpur with short morning trail shoot."
      },
    
  {
    id: 12,
    category: "wildlife",
    title: "Talle Valley Wildlife Sanctuary & Ziro",
    destination: "Lower Subansiri District, Arunachal Pradesh",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subtropical evergreen forest, highland glades, and stream zones",
    bestSpecies: [
      "Kaiser-i-Hind (Teinopalpus imperialis)",
      "Bhutan Glory",
      "White Dragontail",
      "Fluffy Tit",
      "Common Windmill",
      "Paris Peacock"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tezpur to Ziro",
        description:
          "Arrive at Ziro from Tezpur Airport (244km/5.5hours). Transfer to Ziro. Evening butterfly photography in Apatani valley grasslands."
      },
      {
        day: 2,
        title: "Talle Valley Trail",
        description:
          "Full-day butterfly trail in Talle Valley Wildlife Sanctuary. Target: Bhutan Glory, White Dragontail, Fluffy Tit."
      },
      {
        day: 3,
        title: "Ridge Trail Walk",
        description:
          "Ridge trail walk and canopy light session. Focus on Kaiser-i-Hind and Windmills. Macro photography near salt licks."
      },
      {
        day: 4,
        title: "Pange River Zone",
        description:
          "Secondary trail near Pange River zone. Species: Paris Peacock, Five-bar Swordtail."
      },
      {
        day: 5,
        title: "Return to Tezpur",
        description:
          "Depart to Tezpur Airport with roadside butterfly stops."
      }
  ,
  {
    id: 13,
    category: "wildlife",
    title: "Mechukha Valley – High-Altitude Swallowtails of Shi-Yomi",
    destination: "Shi-Yomi District, Arunachal Pradesh",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subalpine meadows, rhododendron forest edges, river valleys",
    bestSpecies: [
      "Kaiser-i-Hind",
      "Bhutan Glory",
      "Blue Peacock",
      "Common Blue Apollo",
      "Himalayan Spangle",
      "Indian Tortoiseshell"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dibrugarh to Mechukha",
        description:
          "Transfer to Aalo from Dibrugarh (200km/5hours). Evening photo walk. Drive to Mechukha from Aalo (186km/6hours)."
      },
      {
        day: 2,
        title: "Sepla–Dorjeeling Trail",
        description:
          "Butterfly walk targeting Apollo, Bhutan Glory, Indian Tortoiseshell. Photography near alpine meadows."
      },
      {
        day: 3,
        title: "Samten Yongcha Route",
        description:
          "Explore Samten Yongcha trek route. Focus on Kaiser-i-Hind and Blue Peacock. Macro near spring puddles."
      },
      {
        day: 4,
        title: "Riverine Zone Walk",
        description:
          "Full-day walk near Mechukha riverine zone. Target: Himalayan Spangle, Jezebels, Pansies."
      },
      {
        day: 5,
        title: "Return to Dibrugarh",
        description:
          "Return to Dibrugarh via stop at Aalo."
      
  },

  {
    id: 14,
    category: "wildlife",
    title: "Kamlang Wildlife Sanctuary & Wakro Corridor",
    destination: "Lohit District, Arunachal Pradesh",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical evergreen forest, bamboo brakes, riparian belts",
    bestSpecies: [
      "Dark Freak (Calinaga aborica)",
      "Green-striped Palmer",
      "Tawny Rajah",
      "Club Beak",
      "Yellow Gorgon",
      "Red-spot Duke"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dibrugarh to Wakro",
        description:
          "Transfer from Dibrugarh via Namsai. Evening walk in fringe forest zones."
      },
      {
        day: 2,
        title: "Kamlang Lower Trail",
        description:
          "Full-day exploration of Kamlang WLS. Target: Palmer, Rajahs, Club Beak."
      },
      {
        day: 3,
        title: "Lang Riverine Trek",
        description:
          "Trek to Lang riverine patch. Focus on Dark Freak, Tawny Rajah, Yellow Gorgon."
      },
      {
        day: 4,
        title: "Forest Edge Walk",
        description:
          "Low canopy forest edge walk. Macro session with Beaks and Dukes."
      },
      {
        day: 5,
        title: "Return to Dibrugarh",
        description:
          "Return to Dibrugarh."
      },

  {
    id: 15,
    category: "wildlife",
    title: "Namdapha National Park – Rainforest Realm of Noble’s Helen",
    destination: "Changlang District, Arunachal Pradesh",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical rainforest, riverbanks, and hill slopes",
    bestSpecies: [
      "Noble’s Helen (Papilio noblei)",
      "Blue Helen",
      "Orange Awlet",
      "Common Mime",
      "Common Batwing",
      "Cruiser"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dibrugarh to Miao",
        description:
          "Arrive at Miao from Dibrugarh (152km/3.5hours). Transfer to Deban Camp. Evening walk along Noa Dihing riverbank."
      },
      {
        day: 2,
        title: "Hornbill Trail",
        description:
          "Full-day butterfly walk focusing on Noble’s Helen, Mimes, Orange Awlet."
      },
      {
        day: 3,
        title: "Haldibari Camp Area",
        description:
          "Explore Haldibari Camp. Macro photography by slow-flowing streams."
      },
      {
        day: 4,
        title: "Secondary Forest Zone",
        description:
          "Secondary forest and bamboo patch exploration. Golden hour shoot."
      },
      {
        day: 5,
        title: "Return to Dibrugarh",
        description:
          "Return to Dibrugarh."
      }
    ]
  }
  {
    id: 16,
    category: "wildlife",
    title: "Mawphlang & Sacred Groves – Highland Treasures",
    destination: "East Khasi Hills (near Shillong), Meghalaya",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Highland evergreen forest, sacred groves, streamside clearings",
    bestSpecies: [
      "Indian Tortoiseshell",
      "Common Peacock",
      "Painted Jezebel",
      "Common Five-ring",
      "Punchinello",
      "Grey Pansy"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shillong to Mawphlang",
        description:
          "Arrive at Shillong Airport – Transfer to Mawphlang (51km/1.5hours). Evening butterfly walk in forest edge trails."
      },
      {
        day: 2,
        title: "Mawphlang Sacred Grove",
        description:
          "Full-day butterfly watching. Target: Jezebel, Pansies, Five-rings. Photography in forest glades and streamside puddling."
      },
      {
        day: 3,
        title: "Lawbyrtun Forest",
        description:
          "Explore nearby Lawbyrtun forest and pine slope trails. Species: Indian Tortoiseshell, Common Castor, Blue Tiger."
      },
      {
        day: 4,
        title: "Pomlum–Phlang Trail",
        description:
          "Butterfly walk at Pomlum–Phlang trail zone. Golden hour macro shoot at puddling spots."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart Shillong with optional morning session at Lady Hydari Park trail."
      }
    ]
  },

  {
    id: 17,
    category: "wildlife",
    title: "Nokrek Biosphere Reserve – Butterfly Hotspot of Garo Hills",
    destination: "West Garo Hills, Meghalaya",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Moist deciduous forest, hill ridges, banana groves",
    bestSpecies: [
      "Paris Peacock",
      "Common Bluebottle",
      "Grey Count",
      "Red Helen",
      "Striped Tiger",
      "Common Nawab"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shillong to Tura",
        description:
          "Transfer to Tura (305km/7.5hours). Evening forest edge photography."
      },
      {
        day: 2,
        title: "Nokrek Peak Trail",
        description:
          "Full-day butterfly trail to Nokrek Peak. Target: Nawab, Tigers, Helen, Bluebottle."
      },
      {
        day: 3,
        title: "Rongrenggre Buffer",
        description:
          "Explore Rongrenggre–Daribokgre buffer forest. Macro photography in low canopy zones."
      },
      {
        day: 4,
        title: "Banana Grove Walk",
        description:
          "Banana grove and streamside butterfly walk. Focus: Sailor, Cruiser, Lemon Pansy."
      },
      {
        day: 5,
        title: "Return to Shillong",
        description:
          "Return to Shillong."
      }
    ]
  },

  {
    id: 18,
    category: "wildlife",
    title: "Cherrapunjee & Mawsmai Limestone Trails – Misty Hills & Rock Dwellers",
    destination: "East Khasi Hills, Meghalaya",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Limestone cliffs, rainforest pockets, highland ridges",
    bestSpecies: [
      "Glass Bluebottle",
      "Blue Mormon",
      "Common Mormon",
      "Peacock Pansy",
      "Orange Oakleaf",
      "Large Yeoman"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shillong to Cherrapunjee",
        description:
          "Transfer to Cherrapunjee (79km/2.5hours). Short afternoon trail near Eco Park."
      },
      {
        day: 2,
        title: "Mawsmai Cave Trail",
        description:
          "Butterfly trail around Mawsmai Cave–forest patch. Target: Blue Mormon, Pansies, Glassy Tiger."
      },
      {
        day: 3,
        title: "Nohkalikai Falls Zone",
        description:
          "Cliff-edge butterfly photography. Focus: Oakleaf, Mormon, Yeoman."
      },
      {
        day: 4,
        title: "Laitkynsew Forest",
        description:
          "Forest edge walk near Laitkynsew. Species: Common Pierrot, Chocolate Pansy, Emigrants."
      },
      {
        day: 5,
        title: "Return to Shillong",
        description:
          "Return from Shillong."
      }
    ]
  },

  {
    id: 19,
    category: "wildlife",
    title: "South West Khasi Hills – Kyllang Rock & Mawkyrwat Forest Trails",
    destination: "South West Khasi Hills, Meghalaya",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Granite outcrops, open scrub, moist subtropical forest",
    bestSpecies: [
      "Grey Pansy",
      "Indian Red Admiral",
      "Lemon Pansy",
      "Common Leopard",
      "Tawny Coster",
      "Common Grass Yellow"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shillong to Mawkyrwat",
        description:
          "Drive to Mawkyrwat (98km/3hours). Evening trail walk near Phlangdiloin."
      },
      {
        day: 2,
        title: "Kyllang Rock Trail",
        description:
          "Butterfly walk at Kyllang Rock trail. Focus: Grass Yellows, Coster, Admiral."
      },
      {
        day: 3,
        title: "Riverine Forest Walk",
        description:
          "Forest walk near riverine trail south of Mawkyrwat. Species: Emigrant, Pierrot, Pansy, Castor."
      },
      {
        day: 4,
        title: "Sacred Grove Walk",
        description:
          "Early macro shoot and community sacred grove walk."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Shillong."
      }
    ]
  },
  {
    id: 20,
    category: "wildlife",
    title: "Dampa Tiger Reserve – Western Mizoram’s Butterfly Haven",
    destination: "Mamit District, Mizoram",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical evergreen forest, bamboo groves, streambeds",
    bestSpecies: [
      "Common Birdwing",
      "Tawny Rajah",
      "Punchinello",
      "Common Nawab",
      "Red-base Jezebel",
      "Constable"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aizawl to Dampa",
        description:
          "Arrive at Aizawl Airport – Transfer to Dampa Base Camp (96km/3hours). Evening butterfly trail along Teirei River."
      },
      {
        day: 2,
        title: "Dampa Forest Trail",
        description:
          "Full-day butterfly trail inside Dampa’s tropical forest. Target: Birdwing, Nawabs, Rajah. Macro photography."
      },
      {
        day: 3,
        title: "Phulchhu Canopy Walk",
        description:
          "High-canopy walk to Phulchhu area. Target: Jezebels, Punchinello, Fivebar Swordtail. Light trapping."
      },
      {
        day: 4,
        title: "Buffer Zone Streams",
        description:
          "Buffer zone exploration and butterfly session at forest streams. Focus: Constable, Pansies, Grass Yellows."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Aizawl."
      }
    ]
  },

  {
    id: 21,
    category: "wildlife",
    title: "Lengteng Wildlife Sanctuary – Highland Butterflies of Eastern Mizoram",
    destination: "Champhai District, Mizoram",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subtropical hill forest, moist highland meadows",
    bestSpecies: [
      "Indian Tortoiseshell",
      "Blue Admiral",
      "Common Map",
      "Chocolate Pansy",
      "Grey Count",
      "Himalayan Sergeant"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aizawl to Champhai",
        description:
          "Transfer to Champhai via Saitual (183km/5hours). Evening butterfly spotting in community forest."
      },
      {
        day: 2,
        title: "Lengteng Sanctuary Trail",
        description:
          "Butterfly walk in Lengteng Sanctuary. Target: Himalayan Sergeant, Map, Tortoiseshell."
      },
      {
        day: 3,
        title: "Upper Forest Trail",
        description:
          "Upper forest trail for rare Nymphalids. Macro photography near orchid-lined zones."
      },
      {
        day: 4,
        title: "Murlen Buffer Walk",
        description:
          "Cultural and naturalist walk around Murlen buffer zone. Target: Grey Count, Oakleaf, Peacocks."
      },
      {
        day: 5,
        title: "Return to Aizawl",
        description:
          "Depart from Aizawl."
      }
    ]
  },

  {
    id: 22,
    category: "wildlife",
    title: "Phawngpui National Park – Blue Mountain Butterfly Escape",
    destination: "Lawngtlai District, Mizoram",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "High-elevation evergreen forest, misty cliffs, grassy slopes",
    bestSpecies: [
      "Indian Purple Emperor",
      "Cruiser",
      "Common Mormon",
      "Striped Tiger",
      "Common Pierrot",
      "Baronet"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aizawl to Thaltlang",
        description:
          "Transfer to Thaltlang (265km/7.5hours). Evening walk in forest edge trails."
      },
      {
        day: 2,
        title: "Phawngpui Peak Trail",
        description:
          "Butterfly hike to Phawngpui peak forest trail. Target: Purple Emperor, Tigers, Mormon."
      },
      {
        day: 3,
        title: "Forest & Slope Shoot",
        description:
          "Full-day forest and slope trail shoot. Focus on Nymphalids and Lycaenids."
      },
      {
        day: 4,
        title: "Return Hike",
        description:
          "Return hike with photography stops. Optional light trap session."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Aizawl."
      }
    ]
  },

  {
    id: 23,
    category: "wildlife",
    title: "Reiek Hills and Khawnglung – Central Mizoram Macro Trail",
    destination: "Near Aizawl, Mizoram",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Low mountain scrub, deciduous forest, valley streams",
    bestSpecies: [
      "Glass Bluebottle",
      "Common Grass Yellow",
      "Common Leopard",
      "Striped Albatross",
      "Crimson Rose",
      "Indian Red Admiral"
    ],
    itinerary: [
      {
        day: 1,
        title: "Aizawl to Reiek",
        description:
          "Transfer to Reiek (50km/2hours). Evening butterfly photography on hill slope trail."
      },
      {
        day: 2,
        title: "Reiek Forest Trail",
        description:
          "Full-day butterfly walk. Target: Crimson Rose, Albatross, Grass Yellow."
      },
      {
        day: 3,
        title: "Khawnglung Excursion",
        description:
          "Excursion to Khawnglung Wildlife Sanctuary. Species: Leopard, Admiral, Glass Bluebottle."
      },
      {
        day: 4,
        title: "Cultural Forest Walk",
        description:
          "Forest patch photography and cultural walk."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Aizawl."
      }
    ]
  },
  {
    id: 24,
    category: "wildlife",
    title: "Kitam Bird Sanctuary & Teesta Valley – Lowland Butterfly Zone",
    destination: "South Sikkim",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subtropical sal forest, riverine trails, and forest edges",
    bestSpecies: [
      "Common Jay",
      "Paris Peacock",
      "Common Banded Peacock",
      "Tawny Rajah",
      "Red-base Jezebel",
      "Grey Pansy"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bagdogra to Kitam",
        description:
          "Arrive at Bagdogra Airport – Transfer to Kitam Sanctuary (82km/3hours). Evening butterfly walk near Rangit Riverbank."
      },
      {
        day: 2,
        title: "Kitam Bird Sanctuary Trail",
        description:
          "Full-day butterfly trail. Target: Tawny Rajah, Jezebel, Banded Peacock. Macro photography."
      },
      {
        day: 3,
        title: "Melli–Jorethang Buffer Zone",
        description:
          "Explore forest buffer zone. Focus: Jays, Pansies, Emigrants."
      },
      {
        day: 4,
        title: "Manpur Ridge & Gangtok",
        description:
          "Short trek to Manpur ridge trail. Return to Gangtok in the evening."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Gangtok."
      }
    ]
  },

  {
    id: 25,
    category: "wildlife",
    title: "Pangolakha Wildlife Sanctuary – High-Elevation Hill Butterfly Trail",
    destination: "East Sikkim",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subalpine forest, rhododendron groves, misty slopes",
    bestSpecies: [
      "Himalayan Spangle",
      "Common Map",
      "Indian Tortoiseshell",
      "Cruiser",
      "Satyrids and Browns",
      "Dark Clouded Yellow"
    ],
    itinerary: [
      {
        day: 1,
        title: "Gangtok to Zuluk",
        description:
          "Drive to Zuluk via Rongli (87km/3.5hours). Evening macro shoot on forest trail."
      },
      {
        day: 2,
        title: "Pangolakha Sanctuary Walk",
        description:
          "Full-day butterfly walk. Focus: Spangle, Map, Tortoiseshell, Satyrids."
      },
      {
        day: 3,
        title: "Lungthung Valley Trail",
        description:
          "Higher elevation butterfly trail. Target: Clouded Yellow, Browns, Common Argus."
      },
      {
        day: 4,
        title: "Return to Gangtok",
        description:
          "Return to Gangtok with butterfly stops en route."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Gangtok."
      }
    ]
  },

  {
    id: 26,
    category: "wildlife",
    title: "Barsey Rhododendron Sanctuary – West Sikkim's Hill Jewel",
    destination: "West Sikkim",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Temperate broadleaf forest, bamboo groves, and meadows",
    bestSpecies: [
      "Peacock Pansy",
      "Common Maplet",
      "White Commodore",
      "Glassy Tiger",
      "Punchinello",
      "Common Sailor"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bagdogra to Hilley",
        description:
          "Transfer to Hilley (140km/5hours). Evening butterfly walk in forest edge."
      },
      {
        day: 2,
        title: "Barsey Top Trail",
        description:
          "Full-day butterfly trail to Barsey Top. Macro photography by forest streams."
      },
      {
        day: 3,
        title: "Dentam & Sombaria Ridge",
        description:
          "Trail around Dentam ridge and Sombaria. Target: Maplets, Browns, Swordtails."
      },
      {
        day: 4,
        title: "Upper Pelling Forest",
        description:
          "Forest walk in Upper Pelling forest zone."
      },
      {
        day: 5,
        title: "Departure via Bagdogra",
        description:
          "Drive to Bagdogra for departure."
      }
    ]
  },

  {
    id: 27,
    category: "wildlife",
    title: "Dzongu & Upper Dzongu Valley – Sacred Butterfly Trails of North Sikkim",
    destination: "North Sikkim",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Mid-altitude moist forest, riverbanks, sacred groves",
    bestSpecies: [
      "Common Blue Apollo",
      "Indian Purple Emperor",
      "Commander",
      "Great Eggfly",
      "Tailed Jay",
      "Indian Leafwing"
    ],
    itinerary: [
      {
        day: 1,
        title: "Gangtok to Dzongu",
        description:
          "Transfer to Dzongu (Passingdang) (71km/2.5hours). Evening butterfly walk along Rongyoung River."
      },
      {
        day: 2,
        title: "Lingdem–Pentong Trail",
        description:
          "Butterfly exploration to Lingdem–Pentong trail. Focus: Apollo, Jay, Commander."
      },
      {
        day: 3,
        title: "Upper Dzongu Forest Trek",
        description:
          "Trek to upper forest zones around Kusong or Tingvong. Target: Purple Emperor, Leafwing."
      },
      {
        day: 4,
        title: "Sacred Grove & Gangtok",
        description:
          "Sacred grove trail and orchid zone photography. Return to Gangtok."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Gangtok."
      }
    ]
  },
  {
    id: 28,
    category: "wildlife",
    title: "Shirui Hills and Ukhrul Forests – Highland Beauties",
    destination: "Ukhrul District, Manipur",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subtropical montane forest, grassy slopes, orchid glades",
    bestSpecies: [
      "Kaiser-i-Hind (Teinopalpus imperialis)",
      "Common Blue Apollo",
      "Paris Peacock",
      "Common Mormon",
      "Punchinello",
      "Red-base Jezebel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Imphal to Ukhrul",
        description:
          "Arrive at Bir Tikendrajit International Airport, Imphal – Transfer to Ukhrul (86km/3hours). Evening walk near Shirui village trail."
      },
      {
        day: 2,
        title: "Shirui Peak Trail",
        description:
          "Full-day butterfly trail to Shirui Peak meadow and cloud forest. Photography at ridge trails and rhododendron groves."
      },
      {
        day: 3,
        title: "Phangrei & Khangkhui Trails",
        description:
          "Forest trails around Phangrei and Khangkhui caves. Focus: Punchinello, Mormon, Oakleaf."
      },
      {
        day: 4,
        title: "Return to Imphal",
        description:
          "Return to Imphal via Tangkhul butterfly corridors. Evening macro shoot near Lamlong or Langol hills."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Imphal."
      }
    ]
  },

  {
    id: 29,
    category: "wildlife",
    title: "Dzuko Valley and Mount Iso – Borderland Butterflies",
    destination: "Senapati District, Manipur–Nagaland Border",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Alpine grassland, cloud forest, forest edge",
    bestSpecies: [
      "Common Peacock",
      "Indian Tortoiseshell",
      "Common Map",
      "Indian Red Admiral",
      "Common Bluebottle",
      "Clouded Yellow"
    ],
    itinerary: [
      {
        day: 1,
        title: "Imphal to Mao",
        description:
          "Drive to Mao (112km/4hours). Evening trail walk near Mao village."
      },
      {
        day: 2,
        title: "Mount Iso Trek",
        description:
          "Trek to Mount Iso ridge and Dzuko Valley entrance. Macro photography in grassy slopes."
      },
      {
        day: 3,
        title: "Dzuko Valley Entry",
        description:
          "Butterfly walk through Dzuko Valley entry point via Viswema ridge. Early light photography."
      },
      {
        day: 4,
        title: "Return via Maram",
        description:
          "Return to Imphal via Maram forests with optional spotting stop."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Imphal."
      }
    ]
  },

  {
    id: 30,
    category: "wildlife",
    title: "Keibul Lamjao & Loktak Lake – Wetland and Forest Edge Specialties",
    destination: "Bishnupur District, Manipur",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Floating phumdi, lake edge vegetation, swamp forest",
    bestSpecies: [
      "Common Sailor",
      "Common Leopard",
      "Grey Pansy",
      "Striped Tiger",
      "Tawny Coster",
      "Common Grass Yellow"
    ],
    itinerary: [
      {
        day: 1,
        title: "Imphal to Moirang",
        description:
          "Transfer to Moirang (37km/1hour). Evening butterfly shoot at Loktak lakeside."
      },
      {
        day: 2,
        title: "Keibul Lamjao Trail",
        description:
          "Morning trail in Keibul Lamjao National Park. Focus: Tigers, Pansies, Sailors."
      },
      {
        day: 3,
        title: "Thanga Island Wetlands",
        description:
          "Wetland edge walk and butterfly session at Thanga Island. Optional boat shoot."
      },
      {
        day: 4,
        title: "Return to Imphal",
        description:
          "Return to Imphal. Afternoon forest edge shoot near Langol Hills."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Imphal."
      }
    ]
  },

  {
    id: 31,
    category: "wildlife",
    title: "Yangoupokpi–Lokchao Wildlife Sanctuary – Indo-Myanmar Butterfly Corridor",
    destination: "Tengnoupal District, Manipur",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Semi-evergreen forest, bamboo thickets, river valleys",
    bestSpecies: [
      "Fluffy Tit",
      "Indian Purple Emperor",
      "Common Nawab",
      "Orange Oakleaf",
      "Dark Archduke",
      "Tailed Jay"
    ],
    itinerary: [
      {
        day: 1,
        title: "Imphal to Moreh",
        description:
          "Transfer to Moreh (107km/2.5hours). Evening butterfly session at Yangoupokpi foothills."
      },
      {
        day: 2,
        title: "Yangoupokpi–Lokchao Trail",
        description:
          "Full-day trail in sanctuary. Macro photography in shaded bamboo groves."
      },
      {
        day: 3,
        title: "Lokchao Riverine Walk",
        description:
          "Explore Lokchao riverine trail. Focus: Jay, Purple Emperor, Emigrants."
      },
      {
        day: 4,
        title: "Return to Imphal",
        description:
          "Return to Imphal with stops at Tengnoupal forest."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Imphal."
      }
    ]
  },
  {
    id: 32,
    category: "wildlife",
    title: "Dzukou Valley & Japfu Range – Alpine Butterflies of Southern Nagaland",
    destination: "Kohima District, Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subalpine meadows, bamboo forests, rhododendron thickets",
    bestSpecies: [
      "Kaiser-i-Hind (Teinopalpus imperialis)",
      "Common Blue Apollo",
      "Clouded Yellow",
      "Indian Tortoiseshell",
      "Common Map",
      "Common Argus"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dimapur to Kohima",
        description:
          "Arrive at Dimapur Airport – Drive to Kohima (65km/2hours). Evening butterfly shoot at Kisama Heritage Village trail."
      },
      {
        day: 2,
        title: "Japfu Base Trek",
        description:
          "Trek to Japfu base. Butterfly session in Rhododendron forest. Photography at ridge-top glades."
      },
      {
        day: 3,
        title: "Dzukou Valley Trek",
        description:
          "Dzukou Valley trek and high meadow trail. Macro shoot near streamlets and alpine grassland."
      },
      {
        day: 4,
        title: "Puliebadze & Jakhama Slopes",
        description:
          "Forest walk near Puliebadze and Jakhama slopes. Transfer to Dimapur."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Dimapur Airport."
      }
    ]
  },

  {
    id: 33,
    category: "wildlife",
    title: "Fakim Wildlife Sanctuary – Eastern Border Biodiversity Trail",
    destination: "Kiphire District, Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Semi-evergreen forest, bamboo groves, riverine habitats",
    bestSpecies: [
      "Common Nawab",
      "Red Helen",
      "Fluffy Tit",
      "Striped Blue Crow",
      "Tawny Rajah",
      "Great Nawab"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dimapur to Kiphire",
        description:
          "Transfer to Kiphire (305km/8hours). Evening butterfly walk at forest edge."
      },
      {
        day: 2,
        title: "Fakim WLS Trail",
        description:
          "Full-day butterfly trail in Fakim WLS. Macro shoot in forest puddle zones."
      },
      {
        day: 3,
        title: "Fakim–Dan Corridor",
        description:
          "Explore Fakim–Dan Sanctuary corridor. Species: Blue Crow, Red Helen, Emigrant."
      },
      {
        day: 4,
        title: "Return to Dimapur",
        description:
          "Return to Dimapur with photo stops en route."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Dimapur."
      }
    ]
  },

  {
    id: 34,
    category: "wildlife",
    title: "Mount Saramati Range – High Elevation Rarities",
    destination: "Noklak & Pungro Region, Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Montane forest, coniferous forest, alpine scrub",
    bestSpecies: [
      "Indian Fritillary",
      "Peacock Pansy",
      "Common Sailor",
      "Himalayan Sergeant",
      "Common Castor",
      "Orange Oakleaf"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dibrugarh to Tuensang",
        description:
          "Arrive at Dibrugarh Airport – Travel to Tuensang (250km/7.5hours). Evening forest edge session."
      },
      {
        day: 2,
        title: "Mount Saramati Slopes",
        description:
          "Butterfly trail on Mount Saramati lower slopes. Macro shoot in meadow and shrub zones."
      },
      {
        day: 3,
        title: "Pungro–Thanamir Forest",
        description:
          "Community forest walk. Photography on ridges and forest borders."
      },
      {
        day: 4,
        title: "Return to Dibrugarh",
        description:
          "Long scenic drive back to Dibrugarh."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Dibrugarh."
      }
    ]
  },

  {
    id: 35,
    category: "wildlife",
    title: "Intanki National Park – Lowland Forest Butterfly Safari",
    destination: "Peren District, Nagaland",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Moist tropical forest, riverbank vegetation, sal forest edges",
    bestSpecies: [
      "Common Birdwing",
      "Common Rose",
      "Great Eggfly",
      "Blue Mormon",
      "Striped Tiger",
      "Common Mormon"
    ],
    itinerary: [
      {
        day: 1,
        title: "Dimapur to Peren",
        description:
          "Arrive at Dimapur Airport – Transfer to Peren base (65km/2hours). Evening shoot at forest edge trails."
      },
      {
        day: 2,
        title: "Intanki National Park Trail",
        description:
          "Butterfly trail inside Intanki National Park. Macro setups in riverine and bamboo belts."
      },
      {
        day: 3,
        title: "Stream-edge & Clearing Trail",
        description:
          "Stream-edge butterfly shoot and damp clearing trail."
      },
      {
        day: 4,
        title: "Community Forest Walk",
        description:
          "Community walk and photo shoot in nearby tribal forest zones. Return to Dimapur."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Dimapur."
      }
    ]
  },
  {
    id: 36,
    category: "wildlife",
    title: "Trishna Wildlife Sanctuary – Wetland and Forest Edge Butterflies",
    destination: "South Tripura District, Tripura",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Tropical moist deciduous forest, bamboo groves, seasonal wetlands",
    bestSpecies: [
      "Common Birdwing",
      "Great Eggfly",
      "Common Rose",
      "Blue Mormon",
      "Common Jay",
      "Red-base Jezebel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Agartala to Trishna",
        description:
          "Arrive at Maharaja Bir Bikram Airport, Agartala – Transfer to Trishna WLS (100km/3hours). Evening forest-edge walk."
      },
      {
        day: 2,
        title: "Trishna Forest Photography",
        description:
          "Full-day butterfly photography. Focus: Birdwing, Jay, Jezebel. Puddling and meadow shots."
      },
      {
        day: 3,
        title: "Bamboo & Riverine Trail",
        description:
          "Bamboo grove walk and riverine trail photography. Target: Blue Mormon, Rose, Eggfly."
      },
      {
        day: 4,
        title: "Return to Agartala",
        description:
          "Return to Agartala. Evening shoot at Sipahijala mini trail."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Agartala."
      }
    ]
  },

  {
    id: 37,
    category: "wildlife",
    title: "Sepahijala Wildlife Sanctuary – Lake & Forest Butterfly Hotspot",
    destination: "West Tripura District, Tripura",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Moist deciduous forest, lake margins, bamboo thickets",
    bestSpecies: [
      "Common Mormon",
      "Grey Pansy",
      "Striped Tiger",
      "Chocolate Pansy",
      "Peacock Pansy",
      "Tawny Coster"
    ],
    itinerary: [
      {
        day: 1,
        title: "Agartala to Sepahijala",
        description:
          "Transfer to Sepahijala (37km/1hour). Evening butterfly spotting around the lake trail."
      },
      {
        day: 2,
        title: "Forest & Lake Margins",
        description:
          "Full-day butterfly photography. Focus: Coster, Pansies, Mormon."
      },
      {
        day: 3,
        title: "Orchidarium Trail",
        description:
          "Hike around orchidarium zone. Target: Tigers, Common Sailor, Albatross."
      },
      {
        day: 4,
        title: "Chaturdasha Temple Fringe",
        description:
          "Drive to Chaturdasha Temple forest fringe. Return to Agartala."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Agartala."
      }
    ]
  },

  {
    id: 38,
    category: "wildlife",
    title: "Jampui Hills – Highland Butterflies of North Tripura",
    destination: "North Tripura District, Tripura",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Subtropical hill forest, orange orchards, cloud forest edge",
    bestSpecies: [
      "Indian Tortoiseshell",
      "Common Map",
      "Cruiser",
      "Common Sailor",
      "Red Helen",
      "Common Leopard"
    ],
    itinerary: [
      {
        day: 1,
        title: "Agartala to Jampui Hills",
        description:
          "Transfer to Jampui Hills via Dharmanagar (235km/6hours). Evening butterfly spotting."
      },
      {
        day: 2,
        title: "Vanghmun Trail",
        description:
          "Morning trail to Vanghmun. Macro shoot at hilltop glades."
      },
      {
        day: 3,
        title: "Betlingchhip Forest Walk",
        description:
          "Forest walk toward Betlingchhip. Focus: Cruiser, Leopard, Helen."
      },
      {
        day: 4,
        title: "Return to Agartala",
        description:
          "Return to Agartala with butterfly stops en route."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Agartala."
      }
    ]
  },

  {
    id: 39,
    category: "wildlife",
    title: "Baramura Hills & Deotamura Range – Tribal Sacred Grove Butterflies",
    destination: "Khowai & Gomati Districts, Tripura",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    habitat: "Lateritic hill forest, sacred groves, mixed woodland",
    bestSpecies: [
      "Common Pierrot",
      "Chocolate Albatross",
      "Common Castor",
      "Peacock Pansy",
      "Indian Red Admiral",
      "Lemon Pansy"
    ],
    itinerary: [
      {
        day: 1,
        title: "Agartala to Khowai",
        description:
          "Drive to Khowai (54km/1.5hours). Butterfly walk near sacred grove forest trail."
      },
      {
        day: 2,
        title: "Baramura Hills Trail",
        description:
          "Full-day exploration of Baramura Hills. Macro photography in shaded stream zones."
      },
      {
        day: 3,
        title: "Udaipur & Deotamura Ridges",
        description:
          "Transfer to Udaipur and visit Deotamura ridge trails."
      },
      {
        day: 4,
        title: "Tepania Eco Park Return",
        description:
          "Return to Agartala via Tepania Eco Park. Afternoon photo session."
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Depart from Agartala."
      }
    ]
  },

];

