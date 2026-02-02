import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Calendar, Route, Users, Info } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Nagaland = () => {
  const attractions = [
    {
      name: "Hornbill Festival",
      description:
        "The Festival of Festivals showcasing Naga culture, music, and dances.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_cTFGCukMMM1xWcZEXFV4NQ9O1STOBUprQ&s",
      category: "Festival",
    },
    {
      name: "Dzukou Valley",
      description:
        "Valley of Flowers famous for trekking and seasonal blooms.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_OBICt0pBMFj7v-6T2RK0blE1B3ZvKFj6w&s",
      category: "Nature",
    },
    {
      name: "Kohima War Cemetery",
      description:
        "World War II memorial with peaceful gardens.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGTljg6ICs0c09s9z3BXrrWUtwQ5pfh4LwA&s",
      category: "Historical",
    },
    {
      name: "Mon District",
      description:
        "Home of the Konyak tribe and traditional village life.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDAOn4Zi9CuhDFkjrEwwaugpf4rQo_1ezTQ&s",
      category: "Cultural",
    },
    {
      name: "Khonoma Village",
      description: "Asia’s first green village and eco-tourism hub.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBes4dYPW-mgGv8YkvDUkENmOhnSejgjmnQ&s",
      category: "Eco-Tourism",
    },
    {
      name: "Shilloi Lake",
      description: "Sacred lake surrounded by myths and forests.",
      image:
        "https://i.ytimg.com/vi/ntMkThV16Y4/maxresdefault.jpg",
      category: "Lake",
    },
    {
      name: "Dzuleke Village",
      description: "Scenic village near Dzukou with homestays.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/dzuleke-kohima-nagaland-rural-1-hero?qlt=82&ts=1726642206068",
      category: "Village",
    },
    {
      name: "Japfu Peak",
      description: "Second highest peak of Nagaland with trekking routes.",
      image:
        "https://static.wixstatic.com/media/b81d60_b2326f82ad064585bb08216092b028ff~mv2.jpg/v1/fill/w_568,h_760,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b81d60_b2326f82ad064585bb08216092b028ff~mv2.jpg",
      category: "Mountain",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1920"
            alt="Nagaland"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Nagaland, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Nagaland</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Land of Festivals — vibrant tribes, scenic hills, and rich
            heritage.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Mountain />, title: "Landscape", text: "Hills & Valleys" },
            { icon: <Users />, title: "Culture", text: "16+ Naga Tribes" },
            { icon: <Calendar />, title: "Best Season", text: "Oct – March" },
            { icon: <Compass />, title: "Famous For", text: "Hornbill, Dzukou, Kohima" },
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
          <h2 className="text-3xl font-bold mb-6">About Nagaland</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nagaland is a culturally rich state in Northeast India, known for its
            vibrant tribal festivals, traditional villages, scenic hills, and
            strong community values. It is home to diverse Naga tribes, each
            with unique customs, making it a fascinating destination for
            cultural tourism.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox
            icon={<Calendar />}
            title="Best Time to Visit"
            text="October to March is ideal. December for Hornbill Festival."
          />
          <InfoBox
            icon={<Route />}
            title="How to Reach"
            text="Nearest airport: Dimapur. Road via Kohima."
          />
          <InfoBox
            icon={<Info />}
            title="Permit Required"
            text="Inner Line Permit (ILP) required for visitors."
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
            ✔ Attend Hornbill Festival<br />
            ✔ Trek to Dzukou Valley<br />
            ✔ Visit tribal villages<br />
            ✔ Explore war memorials<br />
            ✔ Photography & cultural tours
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Culture Lovers • History Buffs • Adventure Seekers • Photographers •
            Offbeat Travelers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">
              Plan Your Nagaland Trip
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Nagaland" />
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

export default Nagaland;
