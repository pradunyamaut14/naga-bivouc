import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mountain, Users, TreePine, X, MapPin } from "lucide-react";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: any;
  location: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    // ================= NAGALAND =================
    {
      icon: Mountain,
      title: "Dzukou Valley",
      location: "Nagaland",
      description: "The legendary valley of flowers on the Nagaland–Manipur border.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/dzukou-valley-kohima-nagaland-attr-hero-1?qlt=82&ts=1727012411648",
      category: "Nagaland"
    },
    {
      icon: TreePine,
      title: "Khonoma Village",
      location: "Nagaland",
      description: "Asia’s first green village and heritage Angami settlement.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/khonoma-village-kohima-nagaland-1-attr-hero?qlt=82&ts=1727012456749",
      category: "Nagaland"
    },
    {
      icon: Mountain,
      title: "Longwa Village",
      location: "Mon, Nagaland",
      description: "The Indo–Myanmar border village of the Konyak tribe.",
      image: "https://www.cheekypassports.com/wp-content/uploads/2019/04/Face-decorations-as-testimony-to-a-violent-headhunting-past-in-Longwa.jpg",
      category: "Nagaland"
    },

    // ================= ASSAM =================
    {
      icon: TreePine,
      title: "Kaziranga National Park",
      location: "Assam",
      description: "Home of the one-horned rhinoceros and rich wildlife.",
      image: "https://i.ytimg.com/vi/-Ucld-GcXOU/maxresdefault.jpg",
      category: "Assam"
    },
    {
      icon: Mountain,
      title: "Majuli River Island",
      location: "Assam",
      description: "World’s largest river island and Vaishnavite cultural hub.",
      image: "https://www.gourav.pro/wp-content/uploads/2025/10/Majuli-Island_-The-Worlds-Largest-River-Island-in-Assam-A-Comprehensive-Travel-Guide-1-1024x573.jpg",
      category: "Assam"
    },
    {
      icon: TreePine,
      title: "Assam Tea Gardens",
      location: "Assam",
      description: "Endless green tea estates producing the world-famous Assam tea.",
      image: "https://www.kaziranga-national-park.com/blog/wp-content/uploads/2024/02/Halmari-Tea-Estate-Assam.jpg",
      category: "Assam"
    },

    // ================= MEGHALAYA =================
    {
      icon: TreePine,
      title: "Living Root Bridges",
      location: "Meghalaya",
      description: "Natural bridges grown by the Khasi tribe over generations.",
      image: "https://res.cloudinary.com/roundglass/image/upload/v1649765953/rg/collective/media/meghalaya-nongriat-double-decker-living-root-bridge-greenery-people-ashwin-ezhumalai_mmdvms.jpg",
      category: "Meghalaya"
    },
    {
      icon: Mountain,
      title: "Dawki River",
      location: "Meghalaya",
      description: "Crystal clear river near Bangladesh border.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdC7HF_ZqHPX_yPc6XeFv1ay-2gZPYiHFaA&s",
      category: "Meghalaya"
    },
    {
      icon: Mountain,
      title: "Cherrapunji",
      location: "Meghalaya",
      description: "One of the wettest places on Earth with dramatic landscapes.",
      image: "https://wanderon-images.gumlet.io/blogs/new/2024/04/things-to-do-in-cherrapunji.jpg",
      category: "Meghalaya"
    },

    // ================= ARUNACHAL =================
    {
      icon: Mountain,
      title: "Tawang Monastery",
      location: "Arunachal Pradesh",
      description: "Largest monastery in India, high in the Himalayas.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/tawang-monastery-tawang-arunachal-pradesh-1-attr-hero?qlt=82&ts=1742169936069",
      category: "Arunachal"
    },
    {
      icon: Mountain,
      title: "Sela Pass",
      location: "Arunachal Pradesh",
      description: "High-altitude mountain pass often covered in snow.",
      image: "https://hblimg.mmtcdn.com/content/hubble/img/tawangdestimgs/mmt/activities/m_Sela_Pass_1_l_426_640.jpg",
      category: "Arunachal"
    },
    {
      icon: TreePine,
      title: "Ziro Valley",
      location: "Arunachal Pradesh",
      description: "Home of the Apatani tribe and famous music festival.",
      image: "https://www.naturetravelagency.com/uploads/1730551339Ziro%20Valley%20resort.jpg",
      category: "Arunachal"
    },

    // ================= SIKKIM =================
    {
      icon: Mountain,
      title: "Gurudongmar Lake",
      location: "Sikkim",
      description: "One of the highest lakes in the world.",
      image: "https://res.cloudinary.com/kmadmin/image/upload/v1618490887/kiomoi/Lachen_Gurudongmar_Lake_1618490886395.jpg",
      category: "Sikkim"
    },
    {
      icon: Mountain,
      title: "Nathula Pass",
      location: "Sikkim",
      description: "Historic Indo-China border mountain pass.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7T08Vxk3cFc-sUWYM-UK0IPdkHo7-aSukwA&s",
      category: "Sikkim"
    },

    // ================= MANIPUR =================
    {
      icon: TreePine,
      title: "Loktak Lake",
      location: "Manipur",
      description: "Famous floating lake with phumdis.",
      image: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/bw-travel/media/media_files/2025/05/15/Ixn6qd9m52TpTViMKO5N.png",
      category: "Manipur"
    },
    {
      icon: Mountain,
      title: "Kangla Fort",
      location: "Manipur",
      description: "Ancient seat of Manipuri kingdom.",
      image: "https://indiano.travel/wp-content/uploads/2022/05/Beautiful-outside-View-of-kangla-fort.-Imphal-Manipur.jpg",
      category: "Manipur"
    },

    // ================= MIZORAM =================
    {
      icon: Mountain,
      title: "Vantawng Falls",
      location: "Mizoram",
      description: "Highest waterfall in Mizoram.",
      image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700050448_04_19_1513678760.jpg.webp",
      category: "Mizoram"
    },
    {
      icon: Mountain,
      title: "Reiek Peak",
      location: "Mizoram",
      description: "Scenic peak near Aizawl.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-tlang-mountain-aizawl-mizoram-blog-ntr-exp-cit-pop?qlt=82&ts=1726674782400",
      category: "Mizoram"
    },

    // ================= TRIPURA =================
    {
      icon: Mountain,
      title: "Ujjayanta Palace",
      location: "Tripura",
      description: "Royal palace turned museum in Agartala.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/ujjayanta-palace-agartala-tripura-1-attr-hero?qlt=82&ts=1726651012562",
      category: "Tripura"
    },
    {
      icon: TreePine,
      title: "Neermahal",
      location: "Tripura",
      description: "Water palace in the middle of Rudrasagar Lake.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghlIJoPnmJsBcPBSgcZNumlB1WxMSzjYTAw&s",
      category: "Tripura"
    }
  ];

  const categories = [
    "All",
    "Nagaland",
    "Assam",
    "Meghalaya",
    "Arunachal",
    "Sikkim",
    "Manipur",
    "Mizoram",
    "Tripura"
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-naga-mist/10 relative">
      <div className="absolute top-0 left-0 right-0 h-1 naga-border"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="text-naga-red">Northeast India</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From the warrior hills of Nagaland to the river islands of Assam and the misty valleys of Meghalaya.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "bg-naga-red text-white" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <Card
              key={idx}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer overflow-hidden group"
            >
              <div className="relative aspect-square">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full relative">
              <img src={selectedItem.image} className="w-full max-h-[80vh] object-contain rounded-xl" />
              <div className="text-white mt-4">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <p className="text-naga-gold flex items-center"><MapPin className="h-4 w-4 mr-1" /> {selectedItem.location}</p>
                <p className="text-gray-300 mt-2">{selectedItem.description}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-4 -right-4 bg-naga-red p-2 rounded-full"
              >
                <X className="text-white" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 naga-border"></div>
    </section>
  );
};

export default Gallery;
