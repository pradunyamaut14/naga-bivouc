import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919876543210";

type GalleryImage = {
  src: string;
  title: string;
  location: string;
  category: string;
};

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    // ======================== KHONOMA & NAGALAND (MAIN) ========================

    { src: "https://nexplore.org/blog/wp-content/uploads/2017/05/khonoma.png", title: "Khonoma Village Morning", location: "Khonoma, Nagaland", category: "Villages" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/View_of_Khonoma_%282024%29.jpg", title: "Khonoma Hills", location: "Khonoma, Nagaland", category: "Mountains" },
    { src: "https://logout.world/media/event/2528/Nagaland_Kohima_Tour.jpg", title: "Forest Walk", location: "Khonoma, Nagaland", category: "Nature" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWofFhoR7y2UT295U-mV1dHHzj_6n2rlc4A&s", title: "Khonoma Valley", location: "Khonoma, Nagaland", category: "Mountains" },
    { src: "https://curlytales.com/wp-content/uploads/2025/11/Untitled-design-2025-11-12T164937.611.jpg", title: "Dzukou Trail", location: "Nagaland", category: "Nature" },
    { src: "https://unconventionalandvivid.com/wp-content/uploads/2017/11/IMG_1997-01-1024x622.jpeg", title: "Terrace Fields", location: "Khonoma, Nagaland", category: "Villages" },
    { src: "https://static2.tripoto.com/media/filter/tst/img/1492189/TripDocument/1635768149_screenshot_2021_11_01_at_5_32_09_pm.png", title: "Naga Village Homes", location: "Nagaland", category: "Villages" },
    { src: "https://pbs.twimg.com/media/Enp0h0LW4AEyX6u.jpg", title: "Khonoma Waterfall", location: "Khonoma, Nagaland", category: "Water" },

    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnlkumhc4dXsZ-i3p4uGSj4EnYJWCKvubrw&s", title: "Dzukou Valley Greens", location: "Nagaland", category: "Mountains" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwaYYwfBFJ2yppv03knhiDKDkxS1EjJ2lM8w&s", title: "Forest Light", location: "Nagaland", category: "Nature" },
    { src: "https://www.thesevensister.com/blog/wp-content/uploads/2017/01/Hornbill-Festival-of-Nagaland.jpg", title: "Naga Cultural Life", location: "Nagaland", category: "Culture" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZPlsEHoLhGDArHSGvl-IHWqGI7e4wvL7wQ&s", title: "Traditional Festival", location: "Nagaland", category: "Culture" },

    { src: "https://xplro.com/wp-content/uploads/2025/07/Eco-Roots-homestay-Khonoma-1-1024x1024.jpg", title: "Morning Mist", location: "Khonoma, Nagaland", category: "Nature" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWLD3nlXlZX9KxXjd24HFINsFqexjPueP-g&s", title: "Hill Ridges", location: "Nagaland", category: "Mountains" },
    { src: "https://www.lostwithpurpose.com/wp-content/uploads/2017/06/DSC06845.jpg", title: "Valley Trail", location: "Nagaland", category: "Nature" },
    { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a8/05/52/khonoma-village.jpg?w=900&h=500&s=1", title: "Village Pathway", location: "Khonoma, Nagaland", category: "Villages" },

    // ======================== KOHIMA / HORNBILL ========================

    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZ8tLQLQdzlcEZSPn5UgCbOK-YUcdAWxNKQ&s", title: "Hornbill Festival", location: "Kohima, Nagaland", category: "Culture" },
    { src: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2018/08/aaa-kaushik-22.jpg?resize=648%2C432&ssl=1", title: "Traditional Attire", location: "Kohima, Nagaland", category: "Culture" },
    { src: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2018/07/aaa-kaushik-3.jpg?resize=648%2C432&ssl=1", title: "Naga Dance", location: "Kohima, Nagaland", category: "Culture" },
    { src: "https://indiaholidaymall.com/images/blog/Hornbill-Festival-in-Nagaland.jpg", title: "Festival Colors", location: "Nagaland", category: "Culture" },

    // ======================== WILDLIFE / NATURE (NAGALAND) ========================

    { src: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Wildlife-Sanctuaries-In-Nagaland-cover-17th_feb.jpg", title: "Forest Wildlife", location: "Nagaland", category: "Wildlife" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwAVccT7y7ZQj9R2uD_ZK2pxoUE_4jyIMrA&s", title: "Bird in Hills", location: "Nagaland", category: "Wildlife" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKjZoGfRsutqBXN2dPCDH8pFukN2njBa6tA&s", title: "Hidden Stream", location: "Nagaland", category: "Water" },
    { src: "https://th-i.thgim.com/public/migration_catalog/article14033281.ece/alternates/FREE_1200/05_YT_Dzuleke.jpg", title: "Village River", location: "Nagaland", category: "Water" },

    // ======================== OTHER NE (SMALL AMOUNT) ========================

    { src: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2021%2F02%2F01%2F194824-tea-garden-1.webp?w=1024", title: "Tea Gardens", location: "Assam", category: "Nature" },
    { src: "https://cdn.britannica.com/53/279553-050-0A596EF9/View-Of-Loktak-Lake-Famous-For-Floating-Islands-Called-Phumdis-Manipur-India.jpg?w=300", title: "Loktak Lake", location: "Manipur", category: "Water" },
    { src: "https://www.trypdeals.com/wp-content/uploads/2024/12/Seven-Sisters-Falls-A-Mesmerizing-Natural-Wonder-in-Meghalaya.jpg", title: "Seven Sisters Falls", location: "Meghalaya", category: "Water" },
    { src: "https://static2.tripoto.com/media/filter/nl/img/245847/TripDocument/1611108770_lachung_city_in_between_the_mountain_ranges.jpg", title: "Sikkim Valley", location: "Sikkim", category: "Mountains" },
  ];

  const categories = ["All", "Mountains", "Nature", "Water", "Culture", "Wildlife", "Villages"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I saw your gallery and I'm interested in booking a Nagaland / Khonoma tour.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">Nagaland <span className="text-primary">Gallery</span></h1>
          <p className="mt-2 text-lg">Khonoma • Dzukou • Kohima • Hornbill</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Button key={cat} variant={selectedCategory === cat ? "default" : "outline"} size="sm" className="rounded-full" onClick={() => setSelectedCategory(cat)}>
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <Card key={index} className="overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image)}>
              <div className="relative h-64">
                <img src={image.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <img src={selectedImage.src} className="w-full max-h-[85vh] object-contain rounded-lg" />
            <div className="text-white mt-4 text-center">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.location}</p>
            </div>
            <button onClick={() => setSelectedImage(null)} className="absolute -top-4 -right-4 bg-white p-2 rounded-full">
              <X />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
