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
    image: "https://blog.summitersadventures.com/uploads/images/202412/image_750x_675682e996f88.jpg",
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
    image: "https://media.licdn.com/dms/image/v2/D5612AQFBt6Oo4PJ-8w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680490412649?e=2147483647&v=beta&t=UZJS7gakTOH7xifNk745wUzw7WvHDmKjozjVPWJhq38",
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
    image: "https://scontent.fgau4-1.fna.fbcdn.net/v/t39.30808-6/528324966_1180934920732730_264100321488675081_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2f3fU86Lp68Q7kNvwEYqaZt&_nc_oc=AdmhdTrwfREs-i1lrpSjbTG05iFWY5jMWBamZfgi1OfRZPPbYjfaLekCtW5b5DS2QGg&_nc_zt=23&_nc_ht=scontent.fgau4-1.fna&_nc_gid=bDdYsD6oSFt8OTFFu6rxew&oh=00_AftICCfUdPWWsEHW9R_GRdo057ps-FV9qErN2JlaMnCC2g&oe=6984C803",
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
    image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Losar-Festival-Ladakh.jpg?fit=1024%2C683&ssl=1",
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
    image: "https://www.trvme.com/img/tours/assam-meghalaya-arunachal-img2.jpg",
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
    image: "https://www.godigit.com/content/dam/godigit/directportal/en/happy-hiking-woman-stand-on-top-mountain.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYenIqesEFhNX1zpGKOYsiH0iyFk64axi3Tw&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fsmMv1MUlZ9fo6TR637o2_jI_LTndtaYuQ&s",
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
    image: "data:image/jpeg;base64,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",
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
    image: "https://static2.tripoto.com/media/filter/tst/img/2335813/TripDocument/1693193070_1693193068379.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUziOXZJBrsDq4NK3ntrLnfOPOqm1pY9-hQ&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJgwdjC-DYh2sToHagNFmOFNvce8rdct8Vg&s",
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
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726743121180",
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
    image: "https://www.borderlens.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-14.52.42.webp",
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
    image: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2018/07/namdapha-3.jpg?resize=648%2C432&ssl=1",
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
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0b/94/c9/sacred-forest.jpg?w=1400&h=800&s=1",
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
    image: "data:image/jpeg;base64,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",
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
    image: "data:image/jpeg;base64,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",
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
    image: "data:image/jpeg;base64,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",
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
    image: "data:image/jpeg;base64,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",
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
    image: "data:image/jpeg;base64,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",
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
    image: "data:image/jpeg;base64,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",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EUpgtLxp4yu-7bTQSdq810sU7FuJsEIN_Q&s",
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
    image: "https://static3-clubmahindra.gumlet.io/storage/app/media/Resort/Club%20Mahindra%20Baiguney%20Sikkim/Spot%20Butterflies%20and%20Birds%20in%20Kitam%20Bird%20Sanctuary_1436175230.jpg?w=320&dpr=2.6",
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
    image: "https://nebula.wsimg.com/07d1a2db3e08a7275acb30d910764ea1?AccessKeyId=5FD9C895BA52A694E6FC&disposition=0&alloworigin=1",
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
    image: "data:image/jpeg;base64,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",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCypj1TYuMR_PW-LNG3d6pa8DqEco6H2g8ow&s",
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
    image: "https://buoyantlifestyles.com/wp-content/uploads/2023/02/28-scaled-1.jpg",
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
    image: "https://static.toiimg.com/thumb/97834455/Dzukou-Valley-in-Nagaland.jpg?width=1200&height=900",
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
    image: "https://www.islands.com/img/gallery/the-worlds-only-floating-national-park-is-an-ethereal-natural-wonder-worth-exploring-in-india/intro-1746115070.jpg",
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
    image: "data:image/jpeg;base64,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",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jkRRmI3tJDZyWpghLrHUnUv2SjKZlchCaA&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpcX_leRG9lUfOLzw59wUPZyTq7tCRdHkHg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRW_HQUWy-BC0-SgaIVFpFIkHVyaX8qorcUg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8I4UvU0pvskeMslfDFk2iL4QEK4K6k4fdw&s",
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
