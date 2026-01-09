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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400",
      category: "Nagaland"
    },
    {
      icon: TreePine,
      title: "Khonoma Village",
      location: "Nagaland",
      description: "Asia’s first green village and heritage Angami settlement.",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1400",
      category: "Nagaland"
    },
    {
      icon: Mountain,
      title: "Longwa Village",
      location: "Mon, Nagaland",
      description: "The Indo–Myanmar border village of the Konyak tribe.",
      image: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=1400",
      category: "Nagaland"
    },

    // ================= ASSAM =================
    {
      icon: TreePine,
      title: "Kaziranga National Park",
      location: "Assam",
      description: "Home of the one-horned rhinoceros and rich wildlife.",
      image: "https://images.unsplash.com/photo-1574068468068-a809653dad67?w=1400",
      category: "Assam"
    },
    {
      icon: Mountain,
      title: "Majuli River Island",
      location: "Assam",
      description: "World’s largest river island and Vaishnavite cultural hub.",
      image: "https://images.unsplash.com/photo-1600359731977-7f4b3c8e3e34?w=1400",
      category: "Assam"
    },
    {
      icon: TreePine,
      title: "Assam Tea Gardens",
      location: "Assam",
      description: "Endless green tea estates producing the world-famous Assam tea.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400",
      category: "Assam"
    },

    // ================= MEGHALAYA =================
    {
      icon: TreePine,
      title: "Living Root Bridges",
      location: "Meghalaya",
      description: "Natural bridges grown by the Khasi tribe over generations.",
      image: "https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=1400",
      category: "Meghalaya"
    },
    {
      icon: Mountain,
      title: "Dawki River",
      location: "Meghalaya",
      description: "Crystal clear river near Bangladesh border.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400",
      category: "Meghalaya"
    },
    {
      icon: Mountain,
      title: "Cherrapunji",
      location: "Meghalaya",
      description: "One of the wettest places on Earth with dramatic landscapes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400",
      category: "Meghalaya"
    },

    // ================= ARUNACHAL =================
    {
      icon: Mountain,
      title: "Tawang Monastery",
      location: "Arunachal Pradesh",
      description: "Largest monastery in India, high in the Himalayas.",
      image: "https://images.unsplash.com/photo-1585136917228-5eadc0ed1fa8?w=1400",
      category: "Arunachal"
    },
    {
      icon: Mountain,
      title: "Sela Pass",
      location: "Arunachal Pradesh",
      description: "High-altitude mountain pass often covered in snow.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400",
      category: "Arunachal"
    },
    {
      icon: TreePine,
      title: "Ziro Valley",
      location: "Arunachal Pradesh",
      description: "Home of the Apatani tribe and famous music festival.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400",
      category: "Arunachal"
    },

    // ================= SIKKIM =================
    {
      icon: Mountain,
      title: "Gurudongmar Lake",
      location: "Sikkim",
      description: "One of the highest lakes in the world.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400",
      category: "Sikkim"
    },
    {
      icon: Mountain,
      title: "Nathula Pass",
      location: "Sikkim",
      description: "Historic Indo-China border mountain pass.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400",
      category: "Sikkim"
    },

    // ================= MANIPUR =================
    {
      icon: TreePine,
      title: "Loktak Lake",
      location: "Manipur",
      description: "Famous floating lake with phumdis.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400",
      category: "Manipur"
    },
    {
      icon: Mountain,
      title: "Kangla Fort",
      location: "Manipur",
      description: "Ancient seat of Manipuri kingdom.",
      image: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=1400",
      category: "Manipur"
    },

    // ================= MIZORAM =================
    {
      icon: Mountain,
      title: "Vantawng Falls",
      location: "Mizoram",
      description: "Highest waterfall in Mizoram.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400",
      category: "Mizoram"
    },
    {
      icon: Mountain,
      title: "Reiek Peak",
      location: "Mizoram",
      description: "Scenic peak near Aizawl.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400",
      category: "Mizoram"
    },

    // ================= TRIPURA =================
    {
      icon: Mountain,
      title: "Ujjayanta Palace",
      location: "Tripura",
      description: "Royal palace turned museum in Agartala.",
      image: "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1?w=1400",
      category: "Tripura"
    },
    {
      icon: TreePine,
      title: "Neermahal",
      location: "Tripura",
      description: "Water palace in the middle of Rudrasagar Lake.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1400",
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
