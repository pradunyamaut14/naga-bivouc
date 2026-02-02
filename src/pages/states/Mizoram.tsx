import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Calendar, Route, Users, Info } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Mizoram = () => {
  const attractions = [
    {
      name: "Phawngpui (Blue Mountain)",
      description:
        "Highest peak of Mizoram offering panoramic views and rare blue orchids.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2X_brsX4Dm7u_9CSF9iYBLA2nDbaO3ZbZ9g&s",
      category: "Mountain",
    },
    {
      name: "Aizawl",
      description:
        "Capital city perched on ridges with stunning valley views.",
      image:
        "https://www.tourmyindia.com/socialimg/aizawl-mizoram.jpg",
      category: "City",
    },
    {
      name: "Champhai",
      description:
        "Border town known as the Rice Bowl of Mizoram.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/1-zokhawthar-champhai-mizoram-city-hero?qlt=82&ts=1726665907012",
      category: "Cultural",
    },
    {
      name: "Palak Lake",
      description:
        "Largest natural lake in Mizoram surrounded by lush green hills.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OYlSWApg9gegBnFBAjNFE3W-e0juXBgLjg&s",
      category: "Nature",
    },
    {
      name: "Vantawng Falls",
      description: "Highest waterfall in Mizoram near Thenzawl.",
      image:
        "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700050448_04_19_1513678760.jpg.webp",
      category: "Waterfall",
    },
    {
      name: "Reiek Hill",
      description: "Popular hilltop with traditional Mizo village.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/1-reiek-mountain-reiek-mizoram-rural-unique?qlt=82&ts=1727162177605",
      category: "Viewpoint",
    },
    {
      name: "Serchhip",
      description: "Scenic district famous for cliffs and viewpoints.",
      image:
        "https://www.theindiatourism.com/images/Mizoram-tourist.jpg",
      category: "Scenic",
    },
    {
      name: "Tamdil Lake",
      description: "Serene lake ideal for picnics and boating.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/tamdil-aizawl-mizoram-3-attr-hero?qlt=82&ts=1726665792689",
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
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
            alt="Mizoram"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Mizoram, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Mizoram</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Land of Blue Mountains — rolling hills, rich Mizo culture, and
            peaceful landscapes.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Mountain />, title: "Landscape", text: "Hills, Valleys & Forests" },
            { icon: <Users />, title: "Culture", text: "Mizo Tribal Heritage" },
            { icon: <Calendar />, title: "Best Season", text: "Oct – March" },
            { icon: <Compass />, title: "Famous For", text: "Phawngpui, Aizawl, Waterfalls" },
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
          <h2 className="text-3xl font-bold mb-6">About Mizoram</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mizoram is a peaceful hill state in Northeast India known for its
            rolling blue hills, vibrant Mizo culture, clean cities, and warm
            hospitality. It offers breathtaking viewpoints, waterfalls, lakes,
            and traditional villages, making it perfect for slow and mindful
            travel.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox
            icon={<Calendar />}
            title="Best Time to Visit"
            text="October to March is ideal. Summers are pleasant."
          />
          <InfoBox
            icon={<Route />}
            title="How to Reach"
            text="Nearest airport: Aizawl. Connected via Guwahati."
          />
          <InfoBox
            icon={<Info />}
            title="Travel Tips"
            text="Respect local customs. Alcohol is restricted in many areas."
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
            ✔ Trek to Phawngpui<br />
            ✔ Visit waterfalls & lakes<br />
            ✔ Explore Aizawl city<br />
            ✔ Photography & nature walks<br />
            ✔ Experience Mizo festivals
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Peace Seekers • Nature Lovers • Solo Travelers • Couples •
            Culture Enthusiasts
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">
              Plan Your Mizoram Trip
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Mizoram" />
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

export default Mizoram;
