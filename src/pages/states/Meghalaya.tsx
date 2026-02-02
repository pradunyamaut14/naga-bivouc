import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Calendar, Route, Users, Info } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Meghalaya = () => {
  const attractions = [
    {
      name: "Living Root Bridges",
      description:
        "Unique bridges grown from rubber tree roots by the Khasi people over centuries.",
      image:
        "https://chalohoppo.com/wp-content/uploads/2023/01/Bio-Engineering-Wonders-The-Story-of-the-Living-Root-Bridge-1.jpg",
      category: "Natural Wonder",
    },
    {
      name: "Cherrapunji",
      description:
        "One of the wettest places on Earth, famous for dramatic waterfalls and caves.",
      image:
        "https://www.trypdeals.com/wp-content/uploads/2024/09/Shillong-Cherrapunji.webp",
      category: "Rainfall",
    },
    {
      name: "Mawlynnong Village",
      description:
        "Asia's cleanest village, known for community-driven cleanliness.",
      image:
        "https://static2.tripoto.com/media/filter/tst/img/398542/TripDocument/1504907086_7159002829_88efe146c4_k_copy.jpg",
      category: "Cultural",
    },
    {
      name: "Dawki River",
      description:
        "Crystal clear river where boats appear to float in air.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjTc5loW--Herpbfb36x-IkeYVFL9CVs9kg&s",
      category: "Nature",
    },
    {
      name: "Shillong Peak",
      description: "Highest point of Meghalaya with panoramic views.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/shillong-peak-shilong2-meghalaya-attr-hero?qlt=82&ts=1742178228979",
      category: "Viewpoint",
    },
    {
      name: "Nohkalikai Falls",
      description: "India’s tallest plunge waterfall near Cherrapunji.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMv3AKoa1zgC-82oSdK60ZCNkQ_cx3lnn5g&s",
      category: "Waterfall",
    },
    {
      name: "Mawsmai Caves",
      description: "Limestone caves popular for exploration.",
      image:
        "https://res.cloudinary.com/kmadmin/image/upload/v1725704723/kiomoi/mawsmai_cave_meghalaya_7385.jpg",
      category: "Adventure",
    },
    {
      name: "Umiam Lake",
      description: "Serene lake near Shillong ideal for boating.",
      image:
        "https://www.viacation.com/_next/image?url=https%3A%2F%2Fmedia.viacation.com%2Fblogs%2F0cd517d9856ea661f769d.webp&w=2560&q=75",
      category: "Lake",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625046305693-09d71e35d9a6?w=1920"
            alt="Meghalaya"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Meghalaya, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Meghalaya</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Abode of Clouds — famous for living root bridges, waterfalls,
            caves, and misty hills.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Mountain />, title: "Landscape", text: "Hills, Valleys & Waterfalls" },
            { icon: <Users />, title: "Culture", text: "Khasi, Garo & Jaintia Tribes" },
            { icon: <Calendar />, title: "Best Season", text: "Oct – May" },
            { icon: <Compass />, title: "Famous For", text: "Cherrapunji, Dawki, Root Bridges" },
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
          <h2 className="text-3xl font-bold mb-6">About Meghalaya</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Meghalaya is a scenic state in Northeast India known for its lush
            greenery, heavy rainfall, waterfalls, caves, and living root
            bridges. Home to rich tribal cultures and mist-covered hills, it is
            perfect for nature lovers, photographers, and adventure seekers.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox
            icon={<Calendar />}
            title="Best Time to Visit"
            text="October to May is ideal. Monsoon (Jun–Sep) for waterfall lovers."
          />
          <InfoBox
            icon={<Route />}
            title="How to Reach"
            text="Nearest airport: Guwahati. Road journey via Shillong."
          />
          <InfoBox
            icon={<Info />}
            title="Travel Tips"
            text="Carry rain gear. Respect local culture and nature."
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
            ✔ Explore living root bridges<br />
            ✔ Visit waterfalls & caves<br />
            ✔ Boat ride at Dawki River<br />
            ✔ Trekking & photography<br />
            ✔ Experience local festivals
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Nature Lovers • Adventure Seekers • Photographers • Couples •
            Offbeat Travelers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">
              Plan Your Meghalaya Trip
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Meghalaya" />
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

export default Meghalaya;
