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

    { src: "https://footloosedev.com/wp-content/uploads/2017/12/naga-village-Copy.jpg", title: "Khonoma Village Morning", location: "Khonoma, Nagaland", category: "Villages" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yhV-fyEvYVkzv0Qb2q6Achxm5HREr7D3-w&s", title: "Khonoma Hills", location: "Khonoma, Nagaland", category: "Mountains" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXsiAnjysVTznB6qFxXR0ofHOw3LtklG0rg&s", title: "Forest Walk", location: "Khonoma, Nagaland", category: "Nature" },
    { src: "https://i0.wp.com/histravelinstincts.com/wp-content/uploads/2020/06/Rice-fields-at-Khonoma-Village5.jpg?fit=1200%2C675&ssl=1", title: "Khonoma Valley", location: "Khonoma, Nagaland", category: "Mountains" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QSdg3el03xegELW6FkqK5Goos0ZEqBX-BQ&s", title: "Dzukou Trail", location: "Nagaland", category: "Nature" },
    { src: "https://unconventionalandvivid.com/wp-content/uploads/2019/07/imgonline-com-ua-compressed-yelTXbnUjBpnVnU.jpg", title: "Terrace Fields", location: "Khonoma, Nagaland", category: "Villages" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16PXk8VSOFrGEA6KvXsd_b4qrJOQqwoTUPw&s", title: "Naga Village Homes", location: "Nagaland", category: "Villages" },
    { src: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/97/73/ce.jpg", title: "Khonoma Waterfall", location: "Khonoma, Nagaland", category: "Water" },

    { src: "https://xplro.com/wp-content/uploads/2024/07/Xplro-2024-07-24T004630.304.jpg.webp", title: "Dzukou Valley Greens", location: "Nagaland", category: "Mountains" },
    { src: "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2022%2F12%2F14%2F421106-forest.webp?rect=0%2C0%2C646%2C363&w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85", title: "Forest Light", location: "Nagaland", category: "Nature" },
    { src: "https://www.thesevensister.com/blog/wp-content/uploads/2017/01/Hornbill-Festival-of-Nagaland.jpg", title: "Naga Cultural Life", location: "Nagaland", category: "Culture" },
    { src: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2018/07/aaa-kaushik-3.jpg?resize=648%2C432&ssl=1", title: "Traditional Festival", location: "Nagaland", category: "Culture" },

    { src: "https://images.squarespace-cdn.com/content/v1/5424e0cfe4b0bfab03c744b9/1517638387972-YPDPKDAQLVX1U10MF5CG/MM8255_131215_11105A.jpg?format=1500w", title: "Morning Mist", location: "Khonoma, Nagaland", category: "Nature" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeXJAHNU6GusnsdDwmxs63O4icusJsnXMb8g&s", title: "Hill Ridges", location: "Nagaland", category: "Mountains" },
    { src: "https://s7ap1.scene7.com/is/image/incredibleindia/Dzukou-Valley-Nagaland-Guide-To-Hidden-Valley19-hero?qlt=82&ts=1726817575460", title: "Valley Trail", location: "Nagaland", category: "Nature" },
    { src: "https://static2.tripoto.com/media/filter/tst/img/371044/TripDocument/1505033137_20161010_120620.jpg.webp", title: "Village Pathway", location: "Khonoma, Nagaland", category: "Villages" },

    // ======================== KOHIMA / HORNBILL ========================

    { src: "https://media.assettype.com/sentinelassam-english%2F2025-02-04%2Fcl8payd4%2FHornbill-Festival-Feature.jpg", title: "Hornbill Festival", location: "Kohima, Nagaland", category: "Culture" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW74mkfu6D4FNQpA8eCvAOUKpO48zNfAf5ZQ&s", title: "Traditional Attire", location: "Kohima, Nagaland", category: "Culture" },
    { src: "https://images.indianexpress.com/2025/12/hornbill-festival_20251201204445.jpg?w=1200", title: "Naga Dance", location: "Kohima, Nagaland", category: "Culture" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZyYngLcPGkdlZnLMLhGo0qssfbXHb8s9gQ&s", title: "Festival Colors", location: "Nagaland", category: "Culture" },

    // ======================== WILDLIFE / NATURE (NAGALAND) ========================

    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqisL4tQYz7gk47_XD-uAV8ZKTJtw61RzhA&s", title: "Forest Wildlife", location: "Nagaland", category: "Wildlife" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwAVccT7y7ZQj9R2uD_ZK2pxoUE_4jyIMrA&s", title: "Bird in Hills", location: "Nagaland", category: "Wildlife" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyI4hJm1sM8LoebwGkvi6sNIguT90-tnswfA&s", title: "Hidden Stream", location: "Nagaland", category: "Water" },
    { src: "https://theholidayscout.com/images/location/21-nagaland.jpg", title: "Village River", location: "Nagaland", category: "Water" },

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
