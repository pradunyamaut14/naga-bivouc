export interface ItineraryDay {
  day: number;
  title: string;
  activities: {
    time: string;
    description: string;
  }[];
  overnight?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  category: "festival" | "adventure" | "butterfly";
  states: string[];
  duration: string;
  groupSize: string;
  bestTime: string;
  difficulty?: "Easy" | "Moderate" | "Challenging";
  image: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export const packages: TourPackage[] = [
  // ==================== FESTIVAL PACKAGES ====================
  {
    id: "dehing-patkai-majuli",
    title: "Dehing Patkai & Majuli Music Festival",
    subtitle: "Tribal culture meets island rhythms in Assam",
    category: "festival",
    states: ["Assam"],
    duration: "5 Days / 4 Nights",
    groupSize: "6-12 persons",
    bestTime: "November",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    featured: true,
    highlights: [
      "Dehing Patkai Rainforest Festival",
      "Majuli Music Festival",
      "Tribal dance performances",
      "Jungle trekking",
      "Brahmaputra ferry crossing",
      "Sattriya monasteries"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dibrugarh – Transfer to Dehing Patkai Festival",
        activities: [
          { time: "Morning", description: "Arrival at Dibrugarh Airport/Railway Station. Drive to Lekhapani/Tinsukia – the festival venue (approx. 2.5 hrs). Check-in to designated festival campsite or eco-cottages." },
          { time: "Afternoon", description: "Explore festival grounds: witness stalls by local tribal communities (Tai Phake, Singpho, Tangsa), traditional crafts, food stalls, and exhibits." },
          { time: "Evening", description: "Enjoy the inaugural ceremony of the Dehing Patkai Festival. Attend tribal dance performances like Bihu, Singpho war dance, and Tai folk drama. Local dinner served with traditional Singpho tea." }
        ],
        overnight: "Lekhapani"
      },
      {
        day: 2,
        title: "Adventure & Culture at Dehing Patkai Festival",
        activities: [
          { time: "Morning", description: "Participate in jungle trekking inside the Dehing Patkai Rainforest (accompanied by guides). Visit historic Stilwell Road and World War II cemetery en route." },
          { time: "Afternoon", description: "Enjoy traditional cooking workshops, tea-tasting sessions, and tribal storytelling sessions." },
          { time: "Evening", description: "Attend the musical night showcasing indigenous and fusion music from Northeast India. Food festival with authentic Assamese and tribal cuisines." }
        ],
        overnight: "Lekhapani"
      },
      {
        day: 3,
        title: "Travel to Majuli Island – Introduction to Majuli Music Festival",
        activities: [
          { time: "Early Morning", description: "Depart from Tinsukia to Majuli Island via Jorhat (5-6 hours). Ferry crossing from Nimati Ghat to Majuli (1 hour)." },
          { time: "Afternoon", description: "Check-in to eco-resorts or music festival tents near the festival site (Salmora or Kamalabari). Free time to explore Majuli's satras (Vaishnavite monasteries) or cycle around riverine villages." },
          { time: "Evening", description: "Attend the opening night of the Majuli Music Festival. Enjoy folk, indie, and fusion music performances against the Brahmaputra backdrop. Bonfire and community jam sessions." }
        ],
        overnight: "Majuli"
      },
      {
        day: 4,
        title: "Full-Day Immersion in Majuli Music Festival",
        activities: [
          { time: "Morning", description: "Participate in interactive music workshops (folk instruments, songwriting). Visit local artist installations, handicraft stalls, and painting exhibitions." },
          { time: "Afternoon", description: "Attend open mic sessions and traditional boat music parades. Sample from organic and vegan food stalls featuring local delicacies." },
          { time: "Evening", description: "Headliner music performances by indie bands, folk icons, and fusion artists. Special sound and light storytelling show on the culture of Majuli. Optional: Join night kayaking experiences along the river." }
        ],
        overnight: "Majuli"
      },
      {
        day: 5,
        title: "Return from Majuli – Departure via Jorhat",
        activities: [
          { time: "Morning", description: "Enjoy a peaceful sunrise jam session at the festival. Breakfast and ferry back to Nimati Ghat." },
          { time: "Late Morning", description: "Drive to Jorhat Airport/Railway Station for onward journey." }
        ]
      }
    ],
    inclusions: [
      "Festival entry passes for Dehing Patkai Festival and Majuli Music Festival",
      "Accommodation in festival tents / eco-cottages / homestays",
      "All internal transportation (Dibrugarh – Tinsukia – Majuli – Jorhat)",
      "Guided activities (treks, workshops, music sessions)",
      "Daily breakfast and dinner at festival venues",
      "Local cultural experiences and performances"
    ],
    exclusions: [
      "Air/train fare to Dibrugarh & from Jorhat",
      "Personal expenses (souvenirs, extra meals)",
      "Travel insurance and tips",
      "Additional adventure add-ons (night kayaking, premium camping)"
    ]
  },
  {
    id: "majuli-music-festival",
    title: "Majuli Music Festival Experience",
    subtitle: "Island rhythms on the world's largest river island",
    category: "festival",
    states: ["Assam"],
    duration: "5 Days / 4 Nights",
    groupSize: "6-15 persons",
    bestTime: "November",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",
    highlights: [
      "Dehing Patkai Festival opening",
      "Majuli Music Festival",
      "Rainforest trekking",
      "Sattriya dance performances",
      "Brahmaputra sunset sessions",
      "Folk & fusion music"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Dibrugarh – Transfer to Lekhapani (105km/2hours)",
        activities: [
          { time: "Day", description: "Arrival at Dibrugarh Airport. Drive to Lekhapani. Check-in at eco-camps or festival-designated stay." },
          { time: "Evening", description: "Attend the Dehing Patkai Festival inauguration ceremony. Cultural dance performances (Bihu, Singpho, Tai Phake). Traditional tribal welcome. Local Assamese cuisine stalls. Campfire experience & ethnic musical night." }
        ],
        overnight: "Lekhapani"
      },
      {
        day: 2,
        title: "Explore Dehing Patkai Festival + Eco Adventure",
        activities: [
          { time: "Morning", description: "Participate in the tribal crafts and textiles fair. Try traditional games and interact with artisans." },
          { time: "Midday", description: "Explore Dehing Patkai Rainforest trekking trails with naturalists. Visit nearby tea gardens and historical WWII sites (Stillwell Road)." },
          { time: "Evening", description: "Enjoy musical performances from regional bands. Local food tasting (bamboo shoot, smoked pork, pitha)." }
        ],
        overnight: "Lekhapani"
      },
      {
        day: 3,
        title: "Travel to Majuli Island (260km/6hours including ferry)",
        activities: [
          { time: "Morning", description: "Early breakfast and drive to Neemati Ghat, Jorhat. Ferry ride to Majuli Island." },
          { time: "Afternoon", description: "Check-in at bamboo cottages near Majuli Music Festival grounds." },
          { time: "Evening", description: "Attend opening sessions of the Majuli Music Festival. Indie, folk, and fusion bands from NE India. Traditional Sattriya dance interludes. Sunset by the Brahmaputra with chill music." }
        ],
        overnight: "Majuli"
      },
      {
        day: 4,
        title: "Full Day at Majuli Music Festival",
        activities: [
          { time: "Morning", description: "Visit Sattras (Vaishnavite monasteries) for devotional music and mask-making demos." },
          { time: "Afternoon", description: "Festival art walk & musical workshops (folk percussion, songwriting). Food court: ethnic Mishing, Assamese & fusion dishes." },
          { time: "Evening", description: "Live performances by Assamese and international folk fusion artists. Lantern release by the river. Open-air dance floor with folk + DJ fusion." }
        ],
        overnight: "Majuli"
      },
      {
        day: 5,
        title: "Return to Jorhat Airport (45km/2hours including ferry)",
        activities: [
          { time: "Morning", description: "Morning ferry back to Neemati Ghat. Transfer to Jorhat Airport. Optional: stop by local tea garden boutique on the way. Depart with memories of Assam's culture, rhythm, and rainforest." }
        ]
      }
    ],
    inclusions: [
      "Accommodation (eco camps/cottages) for 4 nights",
      "Daily breakfast and local-style dinners",
      "Transfers between airports, festivals, and ferry terminals",
      "All festival entry passes and guided access",
      "Trekking guide (Dehing Patkai) and cultural guide (Majuli)",
      "Ferry charges to and from Majuli Island"
    ],
    exclusions: [
      "Airfare to Dibrugarh and from Jorhat",
      "Lunches (available at festival food courts)",
      "Personal expenses (souvenirs, drinks, etc.)",
      "Travel insurance",
      "Additional adventure activities not listed (e.g., ziplining, biking)"
    ]
  },
  {
    id: "ziro-music-festival",
    title: "Ziro Music Festival",
    subtitle: "Indie music in the heart of Apatani land",
    category: "festival",
    states: ["Arunachal Pradesh"],
    duration: "5 Days / 4 Nights",
    groupSize: "6-12 persons",
    bestTime: "Late September",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
    featured: true,
    highlights: [
      "Ziro Music Festival",
      "Apatani tribal villages",
      "Pine-clad valley setting",
      "Indie & folk performances",
      "Traditional rice beer tasting",
      "Himalayan birdwatching"
    ],
    itinerary: [
      {
        day: 1,
        title: "Transfer to Ziro from Dibrugarh Airport (240km/6hours)",
        activities: [
          { time: "Day", description: "Arrive at Dibrugarh Airport. Scenic drive to Ziro Valley. Stop at Ranganadi Dam and Apatani villages en route." },
          { time: "Evening", description: "Check-in at a local homestay/campsite in Ziro. Pre-festival jam sessions, local rice beer tasting, interact with artists." }
        ],
        overnight: "Ziro (Camp or Homestay)"
      },
      {
        day: 2,
        title: "Ziro Music Festival – Opening Day",
        activities: [
          { time: "Day", description: "Explore the festival grounds surrounded by pine-clad hills and paddy fields. Attend inauguration ceremony with traditional Apatani rituals. Live performances: Indie, tribal-fusion, experimental, folk, electronic. Browse local artisan stalls, handmade musical instruments, tribal textiles." },
          { time: "Evening", description: "Sunset concert, bonfire jam sessions, open-mic nights." }
        ],
        overnight: "Ziro"
      },
      {
        day: 3,
        title: "Full Festival Day + Local Cultural Exploration",
        activities: [
          { time: "Morning", description: "Early morning visit to Hong and Hari Apatani villages. Learn about Apatani facial tattoos, nose plugs (older women), and terrace farming." },
          { time: "Afternoon", description: "Return to festival: Midday performances and food trucks (Momos, bamboo shoots, thukpa). Music workshops: percussion, loop-based music, tribal chanting sessions." },
          { time: "Evening", description: "Dance and groove under the stars with top indie headliners." }
        ],
        overnight: "Ziro"
      },
      {
        day: 4,
        title: "Final Festival Day + Nature Walks",
        activities: [
          { time: "Morning", description: "Leisurely breakfast at the campsite. Guided Ziro Valley nature walk or birdwatching (Ziro is rich in Himalayan birdlife)." },
          { time: "Afternoon", description: "Return to festival grounds for closing acts." },
          { time: "Evening", description: "Final night celebration with bonfire, lantern release, and jam night." }
        ],
        overnight: "Ziro"
      },
      {
        day: 5,
        title: "Ziro to Dibrugarh Airport for Departure",
        activities: [
          { time: "Day", description: "Morning drive back to Dibrugarh. Optional stops at tribal markets en route. End of tour with memories of music, mountains, and Apatani hospitality." }
        ]
      }
    ],
    inclusions: [
      "4 nights accommodation (homestay/camp/hotel depending on festival)",
      "Breakfast and dinner daily",
      "Local transfers and festival access",
      "Cultural guide at festival sites",
      "Permits for Arunachal Pradesh",
      "Entry to monasteries / festival events / music grounds"
    ],
    exclusions: [
      "Flights to Dibrugarh",
      "Lunches and snacks",
      "Personal expenses (souvenirs, drinks, etc.)",
      "Travel insurance",
      "Camera/video permits (if applicable)"
    ]
  },
  {
    id: "losar-festival-tawang",
    title: "Losar Festival in Tawang",
    subtitle: "Tibetan New Year in the Himalayan monastery town",
    category: "festival",
    states: ["Arunachal Pradesh"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-10 persons",
    bestTime: "February - March",
    image: "https://images.unsplash.com/photo-1545126898-16aef47847e8?w=800",
    highlights: [
      "Losar Festival celebrations",
      "Tawang Monastery",
      "Cham masked dance",
      "Sela Pass crossing",
      "Tibetan Buddhist culture",
      "Himalayan landscapes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Tezpur Airport – Transfer to Tawang (313km/7.5hours)",
        activities: [
          { time: "Day", description: "Arrive at Tezpur (Assam) and transfer to Tawang (via Bomdila). Drive approx. 6-8 hrs. Enjoy scenic views of the Himalayas, Dirang Valley, Sela Pass." },
          { time: "Evening", description: "Arrival and rest." }
        ],
        overnight: "Tawang"
      },
      {
        day: 2,
        title: "Losar Festival – Day 1 (Tibetan New Year Celebration)",
        activities: [
          { time: "Day", description: "Attend Losar festivities at Tawang Monastery, Asia's second-largest monastery. Observe Cham dance (masked dance by monks symbolizing good over evil). Participate in prayer sessions and butter lamp lighting. Explore vibrant Tibetan-Buddhist markets, ritual displays, and Losar flags." },
          { time: "Evening", description: "Try festive food: khapse, thukpa, butter tea." }
        ],
        overnight: "Tawang"
      },
      {
        day: 3,
        title: "Losar + Cultural Immersion",
        activities: [
          { time: "Morning", description: "Early morning visit to Urgelling Monastery (birthplace of 6th Dalai Lama)." },
          { time: "Afternoon", description: "Attend community gatherings and local theatre depicting Buddhist tales. Join locals for traditional dance and exchange 'Tashi Delek' greetings." },
          { time: "Evening", description: "Visit Giant Buddha Statue, take part in Butter Sculpture making." }
        ],
        overnight: "Tawang"
      },
      {
        day: 4,
        title: "Scenic Exploration Around Tawang",
        activities: [
          { time: "Day", description: "Visit Sela Pass, Nuranang Waterfalls, and Gorichen Peak viewpoints. Stop at Tawang War Memorial." },
          { time: "Evening", description: "Enjoy Losar-themed bonfire dinner with folklore music and dance." }
        ],
        overnight: "Tawang"
      },
      {
        day: 5,
        title: "Return Journey – Depart from Tezpur Airport",
        activities: [
          { time: "Day", description: "Early morning drive back to Tezpur. Optional halt at Bomdila Monastery and orchid sanctuaries. Depart with spiritual and cultural blessings." }
        ]
      }
    ],
    inclusions: [
      "4 nights accommodation (homestay/camp/hotel depending on festival)",
      "Breakfast and dinner daily",
      "Local transfers and festival access",
      "Cultural guide at festival sites",
      "Permits for Arunachal Pradesh",
      "Entry to monasteries / festival events / music grounds"
    ],
    exclusions: [
      "Flights to Tezpur",
      "Lunches and snacks",
      "Personal expenses (souvenirs, drinks, etc.)",
      "Travel insurance",
      "Camera/video permits (if applicable)"
    ]
  },

  // ==================== ADVENTURE PACKAGES ====================
  {
    id: "assam-meghalaya-arunachal-adventure",
    title: "Assam-Meghalaya-Arunachal Adventure",
    subtitle: "Paragliding, Rafting, Trekking & Rock Climbing",
    category: "adventure",
    states: ["Assam", "Meghalaya", "Arunachal Pradesh"],
    duration: "10 Days / 9 Nights",
    groupSize: "4-10 persons",
    bestTime: "October - April",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800",
    featured: true,
    highlights: [
      "River Rafting in Jia Bhoroli (Assam)",
      "Paragliding at Mawkdok (Meghalaya)",
      "Trekking to Talley Valley (Arunachal)",
      "Rock Climbing at Ziro Crag",
      "Mawsmai Cave exploration",
      "Apatani tribal villages"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Guwahati – Transfer to Nameri (243km/5hours)",
        activities: [
          { time: "Day", description: "Drive to Nameri National Park. Short guided forest trail in the evening." }
        ],
        overnight: "Nameri Eco Camp"
      },
      {
        day: 2,
        title: "Jia Bhoroli River Rafting",
        activities: [
          { time: "Day", description: "River rafting through Class II–III rapids in the crystal-clear river. Birdwatching during the rafting (optional)." }
        ],
        overnight: "Nameri"
      },
      {
        day: 3,
        title: "Transfer to Shillong (286km/5.5hours)",
        activities: [
          { time: "Day", description: "Drive from Nameri to Shillong." },
          { time: "Evening", description: "At leisure, explore Police Bazaar." }
        ],
        overnight: "Shillong"
      },
      {
        day: 4,
        title: "Paragliding in Mawkdok",
        activities: [
          { time: "Day", description: "Travel to Mawkdok Dympep Valley. Professional paragliding flight over the stunning valley (10–15 mins). Return to Shillong." }
        ],
        overnight: "Shillong"
      },
      {
        day: 5,
        title: "Caving in Mawsmai and Waterfall Adventure (54km/1.5hours)",
        activities: [
          { time: "Day", description: "Explore Mawsmai & Arwah caves. Short cliff jumps or dip at Wei Sawdong Falls (optional)." }
        ],
        overnight: "Sohra (Cherrapunji)"
      },
      {
        day: 6,
        title: "Transfer to Ziro (522km/10hours)",
        activities: [
          { time: "Day", description: "Early drive to Ziro (via Tezpur–Kimin) – entry permits check. Check into local guesthouse." }
        ],
        overnight: "Ziro"
      },
      {
        day: 7,
        title: "Trek to Talley Valley",
        activities: [
          { time: "Day", description: "Full-day trek into Talley Valley Wildlife Sanctuary. Explore orchids, bamboos, and pine forests. Return to Ziro." }
        ],
        overnight: "Ziro"
      },
      {
        day: 8,
        title: "Rock Climbing at Ziro Crag",
        activities: [
          { time: "Day", description: "Try climbing at local crags near Ziro valley (beginner/intermediate). Learn knotting, belaying, rappelling techniques. Visit Apatani tribal villages." }
        ],
        overnight: "Ziro"
      },
      {
        day: 9,
        title: "Return to Itanagar (103km/2.5hours)",
        activities: [
          { time: "Day", description: "Explore local market or museum." }
        ],
        overnight: "Itanagar or Naharlagun"
      },
      {
        day: 10,
        title: "Drive to Guwahati Airport for Departure (332km/5.5hours)",
        activities: [
          { time: "Day", description: "Transfer to Guwahati Airport for departure." }
        ]
      }
    ],
    inclusions: [
      "Paragliding flight with instructor",
      "River rafting with safety equipment",
      "Climbing & trekking permits",
      "Certified guides & gear",
      "Transport and accommodation"
    ],
    exclusions: [
      "Flights, personal items",
      "Meals unless specified",
      "Any adventure activity not mentioned"
    ]
  },
  {
    id: "assam-arunachal-nagaland-adventure",
    title: "Assam-Arunachal-Nagaland Adventure",
    subtitle: "Rafting, Trekking & Rock Climbing across three states",
    category: "adventure",
    states: ["Assam", "Arunachal Pradesh", "Nagaland"],
    duration: "10 Days / 9 Nights",
    groupSize: "4-10 persons",
    bestTime: "October - April",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    highlights: [
      "River Rafting on Jia Bhoroli (Assam)",
      "Trekking to Dzukou Valley (Nagaland)",
      "Japfu Peak summit",
      "Rock Climbing at Mechuka (Arunachal)",
      "Memba tribal villages",
      "World's tallest Rhododendron tree"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Guwahati – Transfer to Nameri (243km/5hours)",
        activities: [
          { time: "Day", description: "Transfer to Nameri National Park (5 hrs drive). Orientation & nature walk." }
        ],
        overnight: "Nameri Eco Camp"
      },
      {
        day: 2,
        title: "River Rafting in Jia Bhoroli River",
        activities: [
          { time: "Day", description: "White-water rafting through Grade II–III rapids. Optional birdwatching along the river." }
        ],
        overnight: "Nameri"
      },
      {
        day: 3,
        title: "Transfer to Kohima, Nagaland (312km/7hours)",
        activities: [
          { time: "Day", description: "Scenic drive to Kohima (via Tezpur–Dimapur). Visit Kisama Heritage Village (if time permits)." }
        ],
        overnight: "Kohima"
      },
      {
        day: 4,
        title: "Trek to Dzukou Valley",
        activities: [
          { time: "Day", description: "Drive to Viswema and begin trek (26km/1hour). Camp/stay in valley rest house." }
        ],
        overnight: "Dzukou Valley"
      },
      {
        day: 5,
        title: "Explore Dzukou + Trek back",
        activities: [
          { time: "Day", description: "Explore meadows, seasonal flowers, rare orchids. Return trek to Viswema, drive back to Kohima." }
        ],
        overnight: "Kohima"
      },
      {
        day: 6,
        title: "Trek to Japfu Peak (18km/1hour)",
        activities: [
          { time: "Day", description: "Early morning trek to summit (Nagaland's 2nd highest peak). See the world's tallest Rhododendron tree. Return to Kohima by evening." }
        ],
        overnight: "Kohima"
      },
      {
        day: 7,
        title: "Transfer to Mechuka, Arunachal Pradesh (687km/18hours)",
        activities: [
          { time: "Day", description: "Long scenic drive via Dibrugarh and Along. Reach Mechuka Valley in the evening." }
        ],
        overnight: "Mechuka"
      },
      {
        day: 8,
        title: "Rock Climbing & Sightseeing in Mechuka",
        activities: [
          { time: "Day", description: "Half-day rock climbing session at local cliffs. Optional short hikes to hilltop monastery or Hanging Bridge." }
        ],
        overnight: "Mechuka"
      },
      {
        day: 9,
        title: "Cultural Exploration + Return to Along (186km/6hours)",
        activities: [
          { time: "Day", description: "Visit indigenous Memba tribal villages. Return to Along (Aalo) by road." }
        ],
        overnight: "Along"
      },
      {
        day: 10,
        title: "Transfer to Dibrugarh Airport for Departure (201km/5hours)",
        activities: [
          { time: "Day", description: "Transfer to Dibrugarh Airport for departure." }
        ]
      }
    ],
    inclusions: [
      "All adventure equipment and guides",
      "Accommodation (hotels, eco camps, rest houses)",
      "Transport with driver",
      "Inner Line Permits (ILP) for Arunachal & Nagaland"
    ],
    exclusions: [
      "Flights/train fare",
      "Personal insurance",
      "Meals not specified",
      "Entry fees where applicable"
    ]
  },
  {
    id: "assam-nagaland-meghalaya-adventure",
    title: "Assam-Nagaland-Meghalaya Adventure",
    subtitle: "Rafting, Trekking, Paragliding & Rock Climbing",
    category: "adventure",
    states: ["Assam", "Nagaland", "Meghalaya"],
    duration: "10 Days / 9 Nights",
    groupSize: "4-10 persons",
    bestTime: "October - April",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
    highlights: [
      "River Rafting on Jia Bhoroli (Assam)",
      "Trekking to Dzukou Valley & Japfu Peak (Nagaland)",
      "Paragliding in Mawkdok (Meghalaya)",
      "Rock Climbing in Shnongpdeng",
      "Crystal-clear Umngot River",
      "Riverside camping"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Guwahati – Transfer to Nameri (243km/4.5hours)",
        activities: [
          { time: "Day", description: "Travel to Nameri National Park (5–6 hrs). Orientation nature walk." }
        ],
        overnight: "Nameri Eco Camp"
      },
      {
        day: 2,
        title: "River Rafting in Jia Bhoroli",
        activities: [
          { time: "Day", description: "Rafting through Grade II–III rapids (3–4 hours). Riverside picnic and birdwatching." },
          { time: "Evening", description: "Campfire." }
        ],
        overnight: "Nameri"
      },
      {
        day: 3,
        title: "Transfer to Kohima (323km/6.5hours)",
        activities: [
          { time: "Day", description: "Drive to Kohima (via Tezpur–Dimapur route). Check into hotel or homestay. Visit Kisama Heritage Village (if time permits)." }
        ],
        overnight: "Kohima"
      },
      {
        day: 4,
        title: "Trek to Dzukou Valley",
        activities: [
          { time: "Day", description: "Start trek from Viswema base (26km/1hour). Scenic climb and arrival at valley. Camp/guesthouse stay in the valley." }
        ],
        overnight: "Dzukou Valley"
      },
      {
        day: 5,
        title: "Explore Dzukou + Trek back",
        activities: [
          { time: "Day", description: "Explore floral landscapes, caves, and streams. Return to Viswema and drive to Kohima." }
        ],
        overnight: "Kohima"
      },
      {
        day: 6,
        title: "Trek to Japfu Peak",
        activities: [
          { time: "Day", description: "Early morning hike to summit (2nd highest peak of Nagaland). See tallest Rhododendron tree in the world. Descend and return to Kohima (17km/1hour)." }
        ],
        overnight: "Kohima"
      },
      {
        day: 7,
        title: "Transfer to Shillong (405km/7.5hours)",
        activities: [
          { time: "Day", description: "Scenic drive via Dimapur–Jorabat–Shillong. Check-in at Shillong guesthouse." }
        ],
        overnight: "Shillong"
      },
      {
        day: 8,
        title: "Paragliding in Mawkdok + Shnongpdeng Transfer",
        activities: [
          { time: "Morning", description: "Paragliding at Mawkdok Dympep Valley." },
          { time: "Afternoon", description: "Post-lunch drive to Shnongpdeng (near Dawki) (88km/3hours). Camp by Umngot River." }
        ],
        overnight: "Shnongpdeng (Riverside camping)"
      },
      {
        day: 9,
        title: "Rock Climbing & Cliff Jumps",
        activities: [
          { time: "Day", description: "Beginner rock climbing on river-facing limestone cliffs. Optional cliff jumping or kayaking in Umngot River." },
          { time: "Evening", description: "Campfire." }
        ],
        overnight: "Shnongpdeng"
      },
      {
        day: 10,
        title: "Transfer to Guwahati Airport for Departure (230km/5.5hours)",
        activities: [
          { time: "Day", description: "Transfer to Guwahati Airport for departure." }
        ]
      }
    ],
    inclusions: [
      "Certified guides & all adventure gear",
      "Homestays, eco camps, and hotel accommodation",
      "ILP for Nagaland",
      "Local transportation throughout the trip"
    ],
    exclusions: [
      "Air/train fare",
      "Travel insurance",
      "Meals not specified",
      "Tips/personal expenses"
    ]
  },

  // ==================== BUTTERFLY WATCHING PACKAGES ====================
  // ASSAM
  {
    id: "manas-butterfly",
    title: "Manas National Park Butterfly Trail",
    subtitle: "Brahmaputra foothill butterflies in pristine wilderness",
    category: "butterfly",
    states: ["Assam"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
    highlights: [
      "Kaiser-i-Hind sightings",
      "Red Helen & Great Nawab",
      "Manas Tiger Reserve",
      "Stream-side photography",
      "Himalayan birdlife"
    ],
    itinerary: [
      { day: 1, title: "Arrive Guwahati – Drive to Manas (137km/3hours)", activities: [{ time: "Day", description: "Drive to Manas National Park. Evening forest edge walk for early sightings." }], overnight: "Eco-lodge near Bhuyanpara range" },
      { day: 2, title: "Bhuyanpara Trail Zone", activities: [{ time: "Day", description: "Butterfly walk focusing on Nawabs, Jays, and Swallowtails. Photography by streams & undergrowth." }], overnight: "Same" },
      { day: 3, title: "Mathanguri Riverside", activities: [{ time: "Day", description: "Target: Common Mormon, Blue Tiger, Leopard Lacewing. Golden hour photography at riverbank." }], overnight: "Same" },
      { day: 4, title: "Forest Buffer & Tea Garden Edge", activities: [{ time: "Day", description: "Spotting: Common Snow Flat, Indian Map, Glassy Tiger." }], overnight: "Same" },
      { day: 5, title: "Return to Guwahati", activities: [{ time: "Day", description: "En-route roadside butterfly photography. Departure." }] }
    ],
    inclusions: ["Accommodation in eco-lodges (twin-sharing)", "All meals from Day 1 lunch to Day 5 lunch", "Private transport", "Expert butterfly naturalist/guide", "Entry permits & camera fees", "Butterfly checklist booklet", "Macro photography setups"],
    exclusions: ["Flights/trains to Guwahati", "Personal expenses", "Insurance", "High-end macro lens rental"]
  },
  {
    id: "garbhanga-butterfly",
    title: "Garbhanga Reserve Forest Trail",
    subtitle: "Guwahati's urban butterfly haven",
    category: "butterfly",
    states: ["Assam"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=800",
    highlights: ["Blue Mormon", "Grey Count", "Peacock Pansy", "Deepor Beel wetland", "Sunset macro shoots"],
    itinerary: [
      { day: 1, title: "Arrive Guwahati – Basistha-Garbhanga (51km/1.5hours)", activities: [{ time: "Day", description: "Butterfly walk in Basistha–Garbhanga forest patch. Evening light photography of Pansies, Jezebels." }], overnight: "City hotel or forest lodge" },
      { day: 2, title: "Garbhanga Butterfly Hotspot", activities: [{ time: "Day", description: "Full-day trail focusing on Papilionidae and Nymphalidae species. Photography: Stream puddling & sunlit canopy patches." }], overnight: "Guwahati" },
      { day: 3, title: "Deepor Beel Wetland", activities: [{ time: "Day", description: "Target: Grass Yellows, Marsh Skipper, Baronet, Bushbrown. Sunset macro shoot." }], overnight: "Same" },
      { day: 4, title: "Fatasil and Rani Forest Fringe", activities: [{ time: "Day", description: "Focus: Count species, Blue Oakleaf, Commander." }], overnight: "Same" },
      { day: 5, title: "Documentation & Departure", activities: [{ time: "Day", description: "Butterfly documentation session. Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals from Day 1 lunch to Day 5 lunch", "Private transport", "Expert guide", "Entry permits & camera fees", "Butterfly checklist", "Macro setups"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "dehing-patkai-butterfly",
    title: "Dehing Patkai Butterfly Zone",
    subtitle: "Eastern Assam's tropical rainforest treasures",
    category: "butterfly",
    states: ["Assam"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800",
    highlights: ["Purple Sapphire", "Red Spot Duke", "Tawny Rajah", "Tropical evergreen forest", "Stream corridor photography"],
    itinerary: [
      { day: 1, title: "Arrive Dibrugarh – Dehing Patkai (97km/2hours)", activities: [{ time: "Day", description: "Drive to Dehing Patkai (Digboi/Bordumsa). Evening walk at forest trail junction." }], overnight: "Eco camp or guesthouse" },
      { day: 2, title: "Jeypore–Upper Dehing Zone", activities: [{ time: "Day", description: "Target: Red Spot Duke, Circe, Yellow Orange Tip. Hide photography session by forest glades." }], overnight: "Same" },
      { day: 3, title: "Patkai Hills Buffer", activities: [{ time: "Day", description: "Focus: Fluffy Tit, Rajahs, Nabis, Punchinellos." }], overnight: "Same" },
      { day: 4, title: "Grassland-Forest Interface", activities: [{ time: "Day", description: "Spotting: Club Beak, Sailor, Common Evening Brown." }], overnight: "Same" },
      { day: 5, title: "Return to Dibrugarh", activities: [{ time: "Day", description: "Roadside butterfly stop. Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Permits & fees", "Butterfly checklist", "Macro setups"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "nameri-butterfly",
    title: "Nameri Himalayan Foothill Trail",
    subtitle: "Riverside butterflies of the Jia Bharali",
    category: "butterfly",
    states: ["Assam"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1591339468143-f218a8a9e1e4?w=800",
    highlights: ["Indian Yellow Nawab", "Common Maplet", "Cruiser", "Boat-assisted spotting", "Bamboo patch trails"],
    itinerary: [
      { day: 1, title: "Arrive Tezpur – Nameri (32km/1hour)", activities: [{ time: "Day", description: "Drive to Nameri. Evening walk near Jia Bharali riverbed." }], overnight: "Eco camp near forest gate" },
      { day: 2, title: "Bhalukpong Forest Patch", activities: [{ time: "Day", description: "Focus: Sailors, Nawabs, Eggflies. Macro photography in filtered canopy light." }], overnight: "Same" },
      { day: 3, title: "Boat-Assisted Spotting", activities: [{ time: "Day", description: "Target: Cruiser, Baronet, Pansies, Swallowtails along riverbank." }], overnight: "Same" },
      { day: 4, title: "Potasali & Bamboo Trail", activities: [{ time: "Day", description: "Target: Grass Yellows, Crimson Rose, Common Mormon." }], overnight: "Same" },
      { day: 5, title: "Return to Tezpur", activities: [{ time: "Day", description: "Short morning trail shoot. Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Permits & fees", "Butterfly checklist", "Macro setups"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },

  // ARUNACHAL PRADESH BUTTERFLY
  {
    id: "talle-valley-butterfly",
    title: "Talle Valley & Ziro Butterfly Trail",
    subtitle: "Highland treasures of Lower Subansiri",
    category: "butterfly",
    states: ["Arunachal Pradesh"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800",
    featured: true,
    highlights: ["Kaiser-i-Hind", "Bhutan Glory", "White Dragontail", "Apatani valley grasslands", "Subtropical evergreen forest"],
    itinerary: [
      { day: 1, title: "Arrive Ziro from Tezpur (244km/5.5hours)", activities: [{ time: "Day", description: "Transfer to Ziro. Evening butterfly photography in Apatani valley grasslands." }], overnight: "Eco-resort or homestay in Ziro" },
      { day: 2, title: "Talle Valley Wildlife Sanctuary", activities: [{ time: "Day", description: "Target: Bhutan Glory, White Dragontail, Fluffy Tit. Puddle-watching at moist clearings and streams." }], overnight: "Same" },
      { day: 3, title: "Ridge Trail & Canopy Session", activities: [{ time: "Day", description: "Focus on Kaiser-i-Hind and Windmills in high glade openings. Macro photography from hides near salt licks." }], overnight: "Same" },
      { day: 4, title: "Pange River Zone", activities: [{ time: "Day", description: "Species: Paris Peacock, Five-bar Swordtail." }], overnight: "Ziro" },
      { day: 5, title: "Depart to Tezpur", activities: [{ time: "Day", description: "Roadside butterfly stops en route. Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert butterfly guide", "Permits for Arunachal Pradesh", "Entry & camera fees", "Field checklist"],
    exclusions: ["Flights/trains to Tezpur", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "mechuka-butterfly",
    title: "Mechuka Valley High-Altitude Trail",
    subtitle: "Subalpine butterflies of Shi-Yomi",
    category: "butterfly",
    states: ["Arunachal Pradesh"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "May - June, September",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800",
    highlights: ["Kaiser-i-Hind", "Blue Peacock", "Common Blue Apollo", "Himalayan Spangle", "Rhododendron meadows"],
    itinerary: [
      { day: 1, title: "Arrive Aalo from Dibrugarh (200km/5hours)", activities: [{ time: "Day", description: "Transfer to Aalo. Evening photo walk in pine forest margin. Drive to Mechuka (186km/6hours)." }], overnight: "Homestay or eco-lodge" },
      { day: 2, title: "Sepla–Dorjeeling Trail", activities: [{ time: "Day", description: "Target: Apollo, Bhutan Glory, Indian Tortoiseshell. Photography near meadows with alpine flowers." }], overnight: "Same" },
      { day: 3, title: "Samten Yongcha Trek Route", activities: [{ time: "Day", description: "Focus on Kaiser-i-Hind and Blue Peacock. Macro lenses near spring puddles." }], overnight: "Same" },
      { day: 4, title: "Mechuka Riverine Zone", activities: [{ time: "Day", description: "Target: Himalayan Spangle, Jezebels, Pansies." }], overnight: "Same" },
      { day: 5, title: "Return to Dibrugarh via Aalo", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Permits", "Entry & camera fees", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "kamlang-butterfly",
    title: "Kamlang & Wakro Butterfly Corridor",
    subtitle: "Eastern Arunachal's endemic species",
    category: "butterfly",
    states: ["Arunachal Pradesh"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800",
    highlights: ["Dark Freak (Endemic)", "Green-striped Palmer", "Tawny Rajah", "Tropical evergreen forest", "Bamboo brakes"],
    itinerary: [
      { day: 1, title: "Arrive Wakro from Dibrugarh (201km/4hours)", activities: [{ time: "Day", description: "Transfer via Namsai. Evening walk in fringe forest zones." }], overnight: "Forest IB or eco-camp" },
      { day: 2, title: "Kamlang WLS Lower Trail", activities: [{ time: "Day", description: "Target: Palmer, Rajahs, Club Beak. Photography along wet leaf litter patches." }], overnight: "Same" },
      { day: 3, title: "Lang Riverine Patch", activities: [{ time: "Day", description: "Focus on Dark Freak, Tawny Rajah, Yellow Gorgon. Photography in moist, shaded glades." }], overnight: "Same" },
      { day: 4, title: "Low Canopy Forest Edge", activities: [{ time: "Day", description: "Macro session with Beaks and Dukes." }], overnight: "Wakro" },
      { day: 5, title: "Return to Dibrugarh", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Permits", "Entry & camera fees", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "namdapha-butterfly",
    title: "Namdapha Rainforest Butterfly Safari",
    subtitle: "Home of Noble's Helen",
    category: "butterfly",
    states: ["Arunachal Pradesh"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=800",
    highlights: ["Noble's Helen", "Blue Helen", "Orange Awlet", "Common Batwing", "Noa Dihing riverbank"],
    itinerary: [
      { day: 1, title: "Arrive Miao – Transfer to Deban (152km/3.5hours)", activities: [{ time: "Day", description: "Entry through Namdapha gate. Evening butterfly walk along Noa Dihing riverbank." }], overnight: "Forest guest house or tented camp" },
      { day: 2, title: "Hornbill Trail", activities: [{ time: "Day", description: "Focus: Noble's Helen, Mimes, Orange Awlet. Photography from shaded trails and puddle zones." }], overnight: "Same" },
      { day: 3, title: "Haldibari Camp Area", activities: [{ time: "Day", description: "Target: Batwing, Cruiser, Maplets. Macro lens shoot by slow-flowing streams." }], overnight: "Same" },
      { day: 4, title: "Secondary Forest & Bamboo", activities: [{ time: "Day", description: "Golden hour butterfly shoot." }], overnight: "Same" },
      { day: 5, title: "Return to Dibrugarh", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Permits", "Entry & camera fees", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },

  // MEGHALAYA BUTTERFLY
  {
    id: "mawphlang-butterfly",
    title: "Mawphlang Sacred Grove Trail",
    subtitle: "Highland treasures near Shillong",
    category: "butterfly",
    states: ["Meghalaya"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800",
    highlights: ["Indian Tortoiseshell", "Common Peacock", "Painted Jezebel", "Sacred groves", "Highland evergreen forest"],
    itinerary: [
      { day: 1, title: "Arrive Shillong – Mawphlang (51km/1.5hours)", activities: [{ time: "Day", description: "Transfer to Mawphlang. Evening butterfly walk in forest edge trails." }], overnight: "Forest guesthouse/homestay" },
      { day: 2, title: "Mawphlang Sacred Grove", activities: [{ time: "Day", description: "Target: Jezebel, Pansies, Five-rings. Photography: Forest glades and streamside puddling." }], overnight: "Same" },
      { day: 3, title: "Lawbyrtun Forest & Pine Slopes", activities: [{ time: "Day", description: "Species: Indian Tortoiseshell, Common Castor, Blue Tiger." }], overnight: "Same" },
      { day: 4, title: "Pomlum–Phlang Trail Zone", activities: [{ time: "Day", description: "Golden hour macro shoot at butterfly puddling spots." }], overnight: "Shillong" },
      { day: 5, title: "Depart Shillong", activities: [{ time: "Day", description: "Optional morning session at Lady Hydari Park trail. Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees", "Field checklist", "Macro tools"],
    exclusions: ["Flights/trains to Guwahati/Shillong", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "nokrek-butterfly",
    title: "Nokrek Biosphere Reserve Trail",
    subtitle: "Butterfly hotspot of Garo Hills",
    category: "butterfly",
    states: ["Meghalaya"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1444857904071-b93ac0028f5a?w=800",
    highlights: ["Paris Peacock", "Common Bluebottle", "Red Helen", "Moist deciduous forest", "Banana grove habitats"],
    itinerary: [
      { day: 1, title: "Arrive Shillong – Transfer to Tura (305km/7.5hours)", activities: [{ time: "Day", description: "Drive to Tura. Evening forest edge photography." }], overnight: "Forest rest house or eco-lodge" },
      { day: 2, title: "Nokrek Peak Trail (67km/2hours)", activities: [{ time: "Day", description: "Target: Nawab, Tigers, Helen, Bluebottle." }], overnight: "Same" },
      { day: 3, title: "Rongrenggre–Daribokgre Buffer", activities: [{ time: "Day", description: "Macro photography in low canopy and leaf litter zones." }], overnight: "Same" },
      { day: 4, title: "Banana Grove & Streamside", activities: [{ time: "Day", description: "Focus: Sailor, Cruiser, Lemon Pansy." }], overnight: "Tura" },
      { day: 5, title: "Return to Shillong", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees", "Field checklist", "Macro tools"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "cherrapunji-butterfly",
    title: "Cherrapunji Limestone Trails",
    subtitle: "Misty hills and rock dweller butterflies",
    category: "butterfly",
    states: ["Meghalaya"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "October - April",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800",
    highlights: ["Glass Bluebottle", "Blue Mormon", "Orange Oakleaf", "Limestone cliffs", "Nohkalikai Falls"],
    itinerary: [
      { day: 1, title: "Arrive Shillong – Cherrapunji (79km/2.5hours)", activities: [{ time: "Day", description: "Short afternoon trail near Eco Park." }], overnight: "Eco-resort" },
      { day: 2, title: "Mawsmai Cave–Forest Patch", activities: [{ time: "Day", description: "Target: Blue Mormon, Pansies, Glassy Tiger." }], overnight: "Same" },
      { day: 3, title: "Nohkalikai Falls Cliff-Edge", activities: [{ time: "Day", description: "Focus: Oakleaf, Mormon, Yeoman." }], overnight: "Same" },
      { day: 4, title: "Laitkynsew Forest Edge", activities: [{ time: "Day", description: "Species: Common Pierrot, Chocolate Pansy, Emigrants." }], overnight: "Shillong" },
      { day: 5, title: "Return from Shillong", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees", "Field checklist", "Macro tools"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "kyllang-rock-butterfly",
    title: "South West Khasi Hills Trail",
    subtitle: "Kyllang Rock & Mawkyrwat forests",
    category: "butterfly",
    states: ["Meghalaya"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
    highlights: ["Indian Red Admiral", "Lemon Pansy", "Common Leopard", "Granite outcrops", "Sacred grove walks"],
    itinerary: [
      { day: 1, title: "Arrive Shillong – Mawkyrwat (98km/3hours)", activities: [{ time: "Day", description: "Drive to Mawkyrwat. Evening trail walk near Phlangdiloin." }], overnight: "Homestay or guesthouse" },
      { day: 2, title: "Kyllang Rock Trail", activities: [{ time: "Day", description: "Focus: Grass Yellows, Coster, Admiral. Photography in open sunny patches." }], overnight: "Same" },
      { day: 3, title: "Riverine Trail South of Mawkyrwat", activities: [{ time: "Day", description: "Species: Emigrant, Pierrot, Pansy, Castor." }], overnight: "Same" },
      { day: 4, title: "Sacred Grove Walk", activities: [{ time: "Day", description: "Early macro shoot + community sacred grove walk." }], overnight: "Shillong" },
      { day: 5, title: "Depart from Shillong", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees", "Field checklist", "Macro tools"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },

  // MIZORAM BUTTERFLY
  {
    id: "dampa-butterfly",
    title: "Dampa Tiger Reserve Trail",
    subtitle: "Western Mizoram's butterfly haven",
    category: "butterfly",
    states: ["Mizoram"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800",
    highlights: ["Common Birdwing", "Tawny Rajah", "Red-base Jezebel", "Tropical evergreen forest", "Night moth bonus"],
    itinerary: [
      { day: 1, title: "Arrive Aizawl – Dampa Base (96km/3hours)", activities: [{ time: "Day", description: "Transfer to Dampa. Evening butterfly trail along Teirei River." }], overnight: "Forest rest house/camp" },
      { day: 2, title: "Dampa Tropical Forest Trail", activities: [{ time: "Day", description: "Target: Birdwing, Nawabs, Rajah. Macro photography at puddling spots and bamboo clusters." }], overnight: "Same" },
      { day: 3, title: "Phulchhu High-Canopy Walk", activities: [{ time: "Day", description: "Target: Jezebels, Punchinello, Fivebar Swordtail. Forest glade photography and light trapping (night moth bonus)." }], overnight: "Same" },
      { day: 4, title: "Buffer Zone Exploration", activities: [{ time: "Day", description: "Focus: Constable, Pansies, Grass Yellows." }], overnight: "Aizawl" },
      { day: 5, title: "Depart from Aizawl", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro kit setup", "Field checklist"],
    exclusions: ["Flights/trains to Aizawl", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "lengteng-butterfly",
    title: "Lengteng Sanctuary Trail",
    subtitle: "Highland butterflies of Eastern Mizoram",
    category: "butterfly",
    states: ["Mizoram"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800",
    highlights: ["Indian Tortoiseshell", "Blue Admiral", "Himalayan Sergeant", "Subtropical hill forest", "Orchid-lined zones"],
    itinerary: [
      { day: 1, title: "Arrive Aizawl – Champhai (183km/5hours)", activities: [{ time: "Day", description: "Transfer to Champhai via Saitual. Evening butterfly spotting in community forest." }], overnight: "Homestay or tourist lodge" },
      { day: 2, title: "Lengteng Sanctuary Trail", activities: [{ time: "Day", description: "Target: Himalayan Sergeant, Map, Tortoiseshell. Photography in ridge forest and damp trail junctions." }], overnight: "Same" },
      { day: 3, title: "Upper Forest for Rare Nymphalids", activities: [{ time: "Day", description: "Macro photography near orchid-lined forest zones." }], overnight: "Same" },
      { day: 4, title: "Murlen Buffer Zone", activities: [{ time: "Day", description: "Target: Grey Count, Oakleaf, Peacocks." }], overnight: "Aizawl" },
      { day: 5, title: "Depart from Aizawl", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro kit", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "phawngpui-butterfly",
    title: "Phawngpui Blue Mountain Trail",
    subtitle: "High-elevation butterflies of the Blue Mountain",
    category: "butterfly",
    states: ["Mizoram"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "March - May, September - November",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    highlights: ["Indian Purple Emperor", "Cruiser", "Striped Tiger", "Misty cliffs", "High-elevation evergreen forest"],
    itinerary: [
      { day: 1, title: "Arrive Aizawl – Thaltlang (265km/7.5hours)", activities: [{ time: "Day", description: "Transfer to Thaltlang. Evening walk in surrounding forest edge trails." }], overnight: "Eco-lodge or camp base" },
      { day: 2, title: "Phawngpui Peak Forest Hike", activities: [{ time: "Day", description: "Target: Purple Emperor, Tigers, Mormon. Macro shoot at cliff edges and open meadows." }], overnight: "Same" },
      { day: 3, title: "Forest & Slope Trail", activities: [{ time: "Day", description: "Focus on Nymphalids and Lycaenids." }], overnight: "Same" },
      { day: 4, title: "Return Hike + Light Trap", activities: [{ time: "Day", description: "Optional light trap for nocturnal moth photography." }], overnight: "Aizawl" },
      { day: 5, title: "Depart from Aizawl", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro kit", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "reiek-butterfly",
    title: "Reiek Hills Macro Trail",
    subtitle: "Central Mizoram's accessible butterfly spots",
    category: "butterfly",
    states: ["Mizoram"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1517685352859-a5a81a26904f?w=800",
    highlights: ["Glass Bluebottle", "Crimson Rose", "Indian Red Admiral", "Low mountain scrub", "Valley streams"],
    itinerary: [
      { day: 1, title: "Arrive Aizawl – Reiek (50km/2hours)", activities: [{ time: "Day", description: "Transfer to Reiek. Evening butterfly photography on hill slope trail." }], overnight: "Reiek tourist lodge" },
      { day: 2, title: "Reiek Forest Trail", activities: [{ time: "Day", description: "Target: Crimson Rose, Albatross, Grass Yellow. Macro setup near puddles and flowering bushes." }], overnight: "Same" },
      { day: 3, title: "Khawnglung Wildlife Sanctuary", activities: [{ time: "Day", description: "Species: Leopard, Admiral, Glass Bluebottle." }], overnight: "Aizawl" },
      { day: 4, title: "Forest Patch & Cultural Walk", activities: [{ time: "Day", description: "Photography session." }], overnight: "Aizawl" },
      { day: 5, title: "Depart from Aizawl", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro kit", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },

  // SIKKIM BUTTERFLY
  {
    id: "kitam-butterfly",
    title: "Kitam Bird Sanctuary Trail",
    subtitle: "Lowland butterflies of South Sikkim",
    category: "butterfly",
    states: ["Sikkim"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
    highlights: ["Common Jay", "Paris Peacock", "Tawny Rajah", "Subtropical sal forest", "Rangit riverbank"],
    itinerary: [
      { day: 1, title: "Arrive Bagdogra – Kitam (82km/3hours)", activities: [{ time: "Day", description: "Transfer to Kitam. Evening butterfly walk near Rangit Riverbank." }], overnight: "Homestay near Kitam" },
      { day: 2, title: "Kitam Bird Sanctuary Trail", activities: [{ time: "Day", description: "Target: Tawny Rajah, Jezebel, Banded Peacock. Macro photography on puddling spots & leaf litter trails." }], overnight: "Same" },
      { day: 3, title: "Melli–Jorethang Forest Buffer", activities: [{ time: "Day", description: "Focus: Jays, Pansies, Emigrants." }], overnight: "Same" },
      { day: 4, title: "Manpur Ridge Trail + Gangtok Transfer (69km/2hours)", activities: [{ time: "Day", description: "Short trek to Manpur ridge trail – canopy edge shoot. Return to Gangtok in the evening." }], overnight: "Gangtok" },
      { day: 5, title: "Depart from Gangtok", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro gear", "Field checklist"],
    exclusions: ["Flights/trains to Bagdogra/NJP", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "pangolakha-butterfly",
    title: "Pangolakha Wildlife Sanctuary Trail",
    subtitle: "High-elevation hill butterflies of East Sikkim",
    category: "butterfly",
    states: ["Sikkim"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    highlights: ["Himalayan Spangle", "Common Map", "Indian Tortoiseshell", "Subalpine forest", "Rhododendron groves"],
    itinerary: [
      { day: 1, title: "Arrive Gangtok – Zuluk via Rongli (87km/3.5hours)", activities: [{ time: "Day", description: "Transfer to Zuluk. Evening macro shoot on forest trail." }], overnight: "Homestay at Padamchen" },
      { day: 2, title: "Pangolakha Sanctuary Trail", activities: [{ time: "Day", description: "Focus: Spangle, Map, Tortoiseshell, Satyrids. Stream-side photography & open slope sessions." }], overnight: "Same" },
      { day: 3, title: "Lungthung Valley (Higher Elevation)", activities: [{ time: "Day", description: "Target: Clouded Yellow, Browns, Common Argus." }], overnight: "Same" },
      { day: 4, title: "Return to Gangtok", activities: [{ time: "Day", description: "Butterfly stops en route." }], overnight: "Gangtok" },
      { day: 5, title: "Depart from Gangtok", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro gear", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "barsey-butterfly",
    title: "Barsey Rhododendron Sanctuary Trail",
    subtitle: "West Sikkim's hill jewel",
    category: "butterfly",
    states: ["Sikkim"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
    highlights: ["Peacock Pansy", "White Commodore", "Common Maplet", "Temperate broadleaf forest", "Rhododendron blooms"],
    itinerary: [
      { day: 1, title: "Arrive Bagdogra – Hilley (140km/5hours)", activities: [{ time: "Day", description: "Transfer to Hilley. Evening butterfly walk in forest edge." }], overnight: "Hilley eco-lodge" },
      { day: 2, title: "Barsey Top Trail", activities: [{ time: "Day", description: "Focus: Pansy, Sailor, Tiger, Commodore. Macro photography by forest streams." }], overnight: "Barsey forest camp" },
      { day: 3, title: "Dentam Ridge & Sombaria (71km/2.5hours)", activities: [{ time: "Day", description: "Target: Maplets, Browns, Swordtails." }], overnight: "Pelling" },
      { day: 4, title: "Upper Pelling Forest Zone", activities: [{ time: "Day", description: "Forest walk." }], overnight: "Pelling" },
      { day: 5, title: "Drive to Bagdogra (137km/4.5hours)", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro gear", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "dzongu-butterfly",
    title: "Dzongu Sacred Butterfly Trails",
    subtitle: "North Sikkim's pristine valleys",
    category: "butterfly",
    states: ["Sikkim"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
    highlights: ["Common Blue Apollo", "Indian Purple Emperor", "Commander", "Sacred groves", "Orchid zone photography"],
    itinerary: [
      { day: 1, title: "Arrive Gangtok – Dzongu/Passingdang (71km/2.5hours)", activities: [{ time: "Day", description: "Transfer to Dzongu. Evening butterfly walk along Rongyoung River." }], overnight: "Dzongu homestay" },
      { day: 2, title: "Lingdem–Pentong Trail", activities: [{ time: "Day", description: "Focus: Apollo, Jay, Commander. Macro setups near streams & open trails." }], overnight: "Same" },
      { day: 3, title: "Upper Forest Zones (Kusong/Tingvong)", activities: [{ time: "Day", description: "Target: Purple Emperor, Leafwing." }], overnight: "Same" },
      { day: 4, title: "Sacred Grove & Orchid Zone", activities: [{ time: "Day", description: "Photography session." }], overnight: "Gangtok" },
      { day: 5, title: "Depart from Gangtok", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro gear", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },

  // MANIPUR BUTTERFLY
  {
    id: "shirui-butterfly",
    title: "Shirui Hills & Ukhrul Trail",
    subtitle: "Highland beauties of Manipur",
    category: "butterfly",
    states: ["Manipur"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    highlights: ["Kaiser-i-Hind", "Common Blue Apollo", "Paris Peacock", "Shirui Lily habitat", "Rhododendron groves"],
    itinerary: [
      { day: 1, title: "Arrive Imphal – Ukhrul (86km/3hours)", activities: [{ time: "Day", description: "Transfer to Ukhrul. Evening walk near Shirui village trail for initial spotting." }], overnight: "Homestay in Ukhrul" },
      { day: 2, title: "Shirui Peak Meadow & Cloud Forest", activities: [{ time: "Day", description: "Target: Kaiser-i-Hind, Apollo, Jezebel. Photography at ridge trails and rhododendron groves." }], overnight: "Same" },
      { day: 3, title: "Phangrei & Khangkhui Caves", activities: [{ time: "Day", description: "Focus: Punchinello, Mormon, Oakleaf. Golden hour butterfly shoot in open glades." }], overnight: "Same" },
      { day: 4, title: "Return to Imphal", activities: [{ time: "Day", description: "Stop at Tangkhul butterfly corridors. Evening macro shoot near Lamlong or Langol hills." }], overnight: "Imphal" },
      { day: 5, title: "Depart from Imphal", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert butterfly guide", "Entry fees & permits", "Macro photography aids", "Field checklist"],
    exclusions: ["Flights/trains to Imphal", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "dzuko-manipur-butterfly",
    title: "Dzuko Valley & Mount Iso Trail",
    subtitle: "Borderland butterflies of Senapati",
    category: "butterfly",
    states: ["Manipur"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "April - June, September - October",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800",
    highlights: ["Common Peacock", "Indian Tortoiseshell", "Indian Red Admiral", "Alpine grassland", "Cloud forest edge"],
    itinerary: [
      { day: 1, title: "Arrive Imphal – Mao (112km/4hours)", activities: [{ time: "Day", description: "Transfer to Mao. Evening trail walk near Mao village." }], overnight: "Local homestay" },
      { day: 2, title: "Mount Iso Ridge & Dzuko Valley Entrance", activities: [{ time: "Day", description: "Target: Clouded Yellow, Map, Red Admiral. Macro photography in grassy slopes and spring puddles." }], overnight: "Tent camp or return to base village" },
      { day: 3, title: "Dzuko Valley Entry Point (via Viswema Ridge)", activities: [{ time: "Day", description: "Photography at early light in alpine meadow sections." }], overnight: "Same" },
      { day: 4, title: "Return to Imphal via Maram Forests", activities: [{ time: "Day", description: "Optional spotting stop." }], overnight: "Imphal" },
      { day: 5, title: "Depart from Imphal", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees & permits", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "keibul-lamjao-butterfly",
    title: "Keibul Lamjao & Loktak Lake Trail",
    subtitle: "Wetland and forest edge specialties",
    category: "butterfly",
    states: ["Manipur"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "October - April",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?w=800",
    highlights: ["Common Sailor", "Grey Pansy", "Striped Tiger", "Floating phumdis", "Loktak lakeside photography"],
    itinerary: [
      { day: 1, title: "Arrive Imphal – Moirang (37km/1hour)", activities: [{ time: "Day", description: "Transfer to Moirang. Evening butterfly shoot at Loktak lakeside." }], overnight: "Homestay or eco-resort" },
      { day: 2, title: "Keibul Lamjao National Park", activities: [{ time: "Day", description: "Focus: Tigers, Pansies, Sailors on floating phumdis. Macro photography near lake inlets." }], overnight: "Same" },
      { day: 3, title: "Thanga Island Wetland Edge", activities: [{ time: "Day", description: "Midday shoot at flowering aquatic plants. Optional boat shoot for water-edge butterflies." }], overnight: "Same" },
      { day: 4, title: "Return to Imphal – Langol Hills", activities: [{ time: "Day", description: "Afternoon forest edge shoot." }], overnight: "Imphal" },
      { day: 5, title: "Depart from Imphal", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees & permits", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "yangoupokpi-butterfly",
    title: "Yangoupokpi-Lokchao Butterfly Corridor",
    subtitle: "Indo-Myanmar border butterflies",
    category: "butterfly",
    states: ["Manipur"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800",
    highlights: ["Fluffy Tit", "Indian Purple Emperor", "Dark Archduke", "Semi-evergreen forest", "Bamboo thickets"],
    itinerary: [
      { day: 1, title: "Arrive Imphal – Moreh (107km/2.5hours)", activities: [{ time: "Day", description: "Transfer to Moreh. Evening butterfly session at Yangoupokpi foothills." }], overnight: "Forest rest house or guest lodge" },
      { day: 2, title: "Yangoupokpi–Lokchao Sanctuary Trail", activities: [{ time: "Day", description: "Target: Nawab, Oakleaf, Tit, Archduke. Macro lens photography in shaded bamboo groves and ridges." }], overnight: "Same" },
      { day: 3, title: "Lokchao Riverine Trail", activities: [{ time: "Day", description: "Focus: Jay, Purple Emperor, Emigrants." }], overnight: "Same" },
      { day: 4, title: "Return to Imphal via Tengnoupal Forest", activities: [{ time: "Day", description: "Photography stops." }], overnight: "Imphal" },
      { day: 5, title: "Depart from Imphal", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry fees & permits", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },

  // NAGALAND BUTTERFLY
  {
    id: "dzukou-nagaland-butterfly",
    title: "Dzukou Valley & Japfu Range Trail",
    subtitle: "Alpine butterflies of Southern Nagaland",
    category: "butterfly",
    states: ["Nagaland"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "April - June, September - October",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    highlights: ["Kaiser-i-Hind", "Common Blue Apollo", "Indian Tortoiseshell", "Rhododendron thickets", "Subalpine meadows"],
    itinerary: [
      { day: 1, title: "Arrive Dimapur – Kohima (65km/2hours)", activities: [{ time: "Day", description: "Transfer to Kohima. Evening butterfly shoot at Kisama Heritage Village trail." }], overnight: "Homestay in Kohima" },
      { day: 2, title: "Japfu Base – Rhododendron Forest Trek (18km/1hour)", activities: [{ time: "Day", description: "Target: Tortoiseshell, Apollo, Map. Photography at ridge-top glades." }], overnight: "Tent camp or rest house" },
      { day: 3, title: "Dzukou Valley Trek & High Meadow", activities: [{ time: "Day", description: "Species: Clouded Yellow, Argus, Maplet. Macro shoot near streamlets and alpine grassland." }], overnight: "Kohima" },
      { day: 4, title: "Puliebadze & Jakhama Slopes", activities: [{ time: "Day", description: "Forest walk." }], overnight: "Dimapur" },
      { day: 5, title: "Depart from Dimapur", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains to Dimapur", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "fakim-butterfly",
    title: "Fakim Wildlife Sanctuary Trail",
    subtitle: "Eastern border biodiversity",
    category: "butterfly",
    states: ["Nagaland"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "March - May, September - November",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    highlights: ["Common Nawab", "Red Helen", "Fluffy Tit", "Tawny Rajah", "Semi-evergreen forest"],
    itinerary: [
      { day: 1, title: "Arrive Dimapur – Kiphire (305km/8hours)", activities: [{ time: "Day", description: "Long transfer to Kiphire. Evening butterfly walk at forest edge." }], overnight: "Rest house or community lodge" },
      { day: 2, title: "Fakim WLS Trail", activities: [{ time: "Day", description: "Target: Nawab, Rajah, Tit. Macro shoot in forest puddle zones and stream crossings." }], overnight: "Same" },
      { day: 3, title: "Fakim–Dan Sanctuary Corridor", activities: [{ time: "Day", description: "Species: Blue Crow, Red Helen, Emigrant." }], overnight: "Same" },
      { day: 4, title: "Return to Dimapur", activities: [{ time: "Day", description: "Photo stops en route." }], overnight: "Dimapur" },
      { day: 5, title: "Depart from Dimapur", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "saramati-butterfly",
    title: "Mount Saramati Range Trail",
    subtitle: "High elevation rarities of Noklak",
    category: "butterfly",
    states: ["Nagaland"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-6 persons",
    bestTime: "April - June, September - October",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
    highlights: ["Indian Fritillary", "Orange Oakleaf", "Himalayan Sergeant", "Montane forest", "Alpine scrub"],
    itinerary: [
      { day: 1, title: "Arrive Dibrugarh – Tuensang (250km/7.5hours)", activities: [{ time: "Day", description: "Long transfer to Tuensang. Evening forest edge session." }], overnight: "Local lodge or homestay" },
      { day: 2, title: "Mount Saramati Lower Slopes", activities: [{ time: "Day", description: "Target: Sailor, Fritillary, Oakleaf. Macro shoot in meadow & shrub zones." }], overnight: "Same" },
      { day: 3, title: "Pungro–Thanamir Community Forest", activities: [{ time: "Day", description: "Photography: Butterflies basking on ridges and forest borders." }], overnight: "Same" },
      { day: 4, title: "Return to Dibrugarh", activities: [{ time: "Day", description: "Long scenic drive." }], overnight: "Dibrugarh" },
      { day: 5, title: "Depart from Dibrugarh", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  },
  {
    id: "intanki-butterfly",
    title: "Intanki National Park Trail",
    subtitle: "Lowland forest butterfly safari",
    category: "butterfly",
    states: ["Nagaland"],
    duration: "5 Days / 4 Nights",
    groupSize: "4-8 persons",
    bestTime: "March - May, September - November",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    highlights: ["Common Birdwing", "Common Rose", "Great Eggfly", "Blue Mormon", "Moist tropical forest"],
    itinerary: [
      { day: 1, title: "Arrive Dimapur – Peren Base (65km/2hours)", activities: [{ time: "Day", description: "Transfer to Peren. Evening shoot at forest edge trails near Benreu." }], overnight: "Forest IB or eco-lodge" },
      { day: 2, title: "Intanki National Park Trail", activities: [{ time: "Day", description: "Target: Birdwing, Rose, Mormon, Eggfly. Macro setups in riverine and bamboo belts." }], overnight: "Same" },
      { day: 3, title: "Stream-Edge & Damp Clearing Trail", activities: [{ time: "Day", description: "Species: Tigers, Glass Bluebottle." }], overnight: "Same" },
      { day: 4, title: "Riverine & Bamboo Belt Photography", activities: [{ time: "Day", description: "Golden hour shoot." }], overnight: "Dimapur" },
      { day: 5, title: "Depart from Dimapur", activities: [{ time: "Day", description: "Departure." }] }
    ],
    inclusions: ["Accommodation (twin-sharing)", "All meals", "Private transport", "Expert guide", "Entry permits & fees", "Macro aids", "Field checklist"],
    exclusions: ["Flights/trains", "Personal expenses", "Insurance", "Lens rental"]
  }
];
