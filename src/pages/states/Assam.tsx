import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Camera, Calendar, Route, Users, Info, Leaf } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Assam = () => {
  const attractions = [
    {
      name: "Kaziranga National Park",
      description: "UNESCO World Heritage Site, home to the world’s largest population of one-horned rhinoceros.",
      image: "https://i.ytimg.com/vi/-Ucld-GcXOU/maxresdefault.jpg",
      category: "Wildlife"
    },
    {
      name: "Majuli Island",
      description: "World’s largest river island, cultural heart of Assamese Vaishnavite traditions.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEkCF3zPiNZSJhnjaJWXq_HGauAtFfrEXvg&s",
      category: "Cultural"
    },
    {
      name: "Kamakhya Temple",
      description: "One of the most powerful Shakti Peethas in India, located atop Nilachal Hill in Guwahati.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUNtt1Y-62rFWdEvXh6xPH7wLwKN6vx6cNA&s",
      category: "Spiritual"
    },
    {
      name: "Tea Gardens of Assam",
      description: "Vast rolling estates producing world-famous Assam tea. Perfect for slow, scenic exploration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pKcFtFQ3-2ApotXMHujZhcnTynBlVTwbIQ&s",
      category: "Plantation"
    },
    {
      name: "Manas National Park",
      description: "UNESCO listed biosphere reserve known for tigers, elephants and rare golden langurs.",
      image: "https://media.assettype.com/sentinelassam-english%2F2025-06-10%2F9w280rnz%2FManas-National-Park.webp?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85",
      category: "Wildlife"
    },
    {
      name: "Sivasagar",
      description: "Historic capital of the Ahom Kingdom with monuments like Rang Ghar, Talatal Ghar and temples.",
      image: "https://i.ytimg.com/vi/TnmvNUG76Bc/maxresdefault.jpg",
      category: "History"
    },
    {
      name: "Haflong",
      description: "Assam’s only hill station, surrounded by hills, lakes and tribal villages.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IZCnGqd5j2Y_COdkcbqSdhdalkBFN1h0Hg&s",
      category: "Hill Station"
    },
    {
      name: "Brahmaputra River Cruise",
      description: "Sunset and cultural cruises offering a unique way to experience Assam’s landscapes and life.",
      image: "https://res.cloudinary.com/kmadmin/image/upload/v1720441789/kiomoi/brahmaputra_river_cruise_1057.jpg",
      category: "Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574068468068-a809653dad67?w=1920"
            alt="Assam Tea Gardens"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Assam, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Assam</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Gateway to Northeast India — a land of mighty rivers, endless tea gardens, rich wildlife,
            ancient temples and a vibrant cultural heritage.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Leaf />, title: "Landscape", text: "Rivers, Tea Gardens & Forests" },
            { icon: <Users />, title: "Culture", text: "Ahom, Tribal & Vaishnavite Heritage" },
            { icon: <Calendar />, title: "Best Season", text: "October – April" },
            { icon: <Compass />, title: "Famous For", text: "Kaziranga, Tea, Temples" },
          ].map((item, i) => (
            <div key={i} className="bg-card p-6 rounded-xl shadow border text-center">
              <div className="flex justify-center mb-3 text-primary">{item.icon}</div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Assam</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Assam is the gateway to Northeast India and one of the most culturally rich and naturally diverse states in the country.
            Dominated by the mighty Brahmaputra River, Assam is famous for its tea gardens, wildlife sanctuaries, ancient temples,
            and the legacy of the Ahom kingdom. From the world-famous Kaziranga National Park to the spiritual Kamakhya Temple and
            the peaceful island of Majuli, Assam offers a perfect blend of nature, culture, spirituality and history.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox icon={<Calendar />} title="Best Time to Visit" text="October to April is ideal. Winters are perfect for wildlife safaris & sightseeing." />
          <InfoBox icon={<Route />} title="How to Reach" text="Guwahati is the main gateway with international airport, rail & road connectivity." />
          <InfoBox icon={<Info />} title="Permit Info" text="No permit required for Assam. It is the main entry point to Northeast India." />
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Top Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <Card key={i} className="group hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white text-xs bg-black/50 px-3 py-1 rounded-full">{a.category}</div>
                </div>
                <CardHeader><CardTitle className="text-lg">{a.name}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{a.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Things To Do */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Things To Do in Assam</h2>
          <p className="text-muted-foreground text-lg">
            ✔ Jeep & elephant safaris in Kaziranga & Manas<br/>
            ✔ Visit tea estates & tea tasting tours<br/>
            ✔ Brahmaputra river cruise experiences<br/>
            ✔ Temple tours & spiritual journeys<br/>
            ✔ Explore Ahom heritage monuments & tribal villages
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Nature lovers • Wildlife enthusiasts • Culture seekers • Family trips • Photographers • Spiritual travelers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">Plan Your Assam Trip</h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Assam" />
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

export default Assam;
