import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Calendar, Route, Users, Info } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Sikkim = () => {
  const attractions = [
    {
      name: "Kanchenjunga",
      description:
        "Third highest mountain in the world, visible from various viewpoints.",
      image:
        "https://media.istockphoto.com/id/543183018/photo/sunrise-on-mount-kanchenjugha-at-dawn-sikkim.jpg?s=612x612&w=0&k=20&c=ONnlaZ9ny-HD9P3li-5t0tzpm0dHdahYRdmN_WxrMsc=",
      category: "Mountain",
    },
    {
      name: "Gangtok",
      description:
        "Capital city with monasteries, cable cars, and Himalayan views.",
      image:
        "https://www.esikkimtourism.in/wp-content/uploads/2019/03/gangtok-tour-boxx.jpg",
      category: "City",
    },
    {
      name: "Yumthang Valley",
      description:
        "Valley of flowers with hot springs and rhododendron blooms.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCdQd3qshPFJKe8jMw3tPQvc_FoD8ZMIfZg&s",
      category: "Nature",
    },
    {
      name: "Rumtek Monastery",
      description:
        "Major Buddhist monastery with ancient architecture.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Z-rR4x1gEGz477bM3KdoQidtOjoTnx-fyg&s",
      category: "Spiritual",
    },
    {
      name: "Nathula Pass",
      description: "Historic Indo-China border pass at high altitude.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDJyMa-De-uhRc6xaUgekW09lmZ1EkIBFbw&s",
      category: "Adventure",
    },
    {
      name: "Pelling",
      description: "Scenic town with Kanchenjunga views and monasteries.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4KOmTQZIKvJJao2hTmRmiBjse1ExkRrf1Q&s",
      category: "Hill Station",
    },
    {
      name: "Tsomgo Lake",
      description: "Glacial lake near Gangtok, sacred to locals.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742160335690",
      category: "Lake",
    },
    {
      name: "Lachung",
      description: "Mountain village gateway to Yumthang Valley.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YK9fEpiy0lg2qqt0G_LAce-uijqAm2dipw&s",
      category: "Village",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920"
            alt="Sikkim"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Sikkim, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Sikkim</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Hidden Paradise — snow peaks, monasteries, and pristine valleys.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Mountain />, title: "Landscape", text: "Himalayas & Valleys" },
            { icon: <Users />, title: "Culture", text: "Lepcha, Bhutia & Nepali" },
            { icon: <Calendar />, title: "Best Season", text: "Mar – Jun, Sep – Nov" },
            { icon: <Compass />, title: "Famous For", text: "Kanchenjunga, Nathula, Monasteries" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl shadow border text-center"
            >
              <div className="flex justify-center mb-3 text-primary">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Sikkim</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sikkim is a serene Himalayan state known for its snow-clad peaks,
            Buddhist monasteries, alpine lakes, and eco-friendly tourism. It is
            India’s first organic state and offers a perfect blend of adventure,
            spirituality, and natural beauty.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox
            icon={<Calendar />}
            title="Best Time to Visit"
            text="Spring and autumn are ideal. Winters for snow lovers."
          />
          <InfoBox
            icon={<Route />}
            title="How to Reach"
            text="Nearest airport: Bagdogra. Road via Siliguri."
          />
          <InfoBox
            icon={<Info />}
            title="Permit Required"
            text="Permits needed for Nathula, Lachung, Yumthang."
          />
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Top Attractions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <Card
                key={i}
                className="group hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white text-xs bg-black/50 px-3 py-1 rounded-full">
                    {a.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{a.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {a.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Things To Do */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Things To Do</h2>
          <p className="text-muted-foreground text-lg">
            ✔ Visit monasteries<br />
            ✔ Trek in Yumthang & Dzongri<br />
            ✔ Drive to Nathula Pass<br />
            ✔ Lake sightseeing<br />
            ✔ Mountain photography
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Nature Lovers • Spiritual Seekers • Adventure Travelers • Couples •
            Photographers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">
              Plan Your Sikkim Trip
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Sikkim" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const InfoBox = ({ icon, title, text }) => (
  <div className="bg-card p-6 rounded-xl shadow border text-center">
    <div className="flex justify-center mb-3 text-primary">{icon}</div>
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{text}</p>
  </div>
);

export default Sikkim;
