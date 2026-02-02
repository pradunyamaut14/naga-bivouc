import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Calendar, Route, Users, Info } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Tripura = () => {
  const attractions = [
    {
      name: "Ujjayanta Palace",
      description:
        "Former royal palace now serving as a museum showcasing Tripura's history.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/ujjayanta-palace-agartala-tripura-1-attr-hero?qlt=82&ts=1726651012562",
      category: "Heritage",
    },
    {
      name: "Neermahal",
      description:
        "Water palace in the middle of Rudrasagar Lake, a unique architectural marvel.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/rudrasagar-lake-melaghar-2-attr-hero?qlt=82&ts=1726651019295",
      category: "Palace",
    },
    {
      name: "Sepahijala Wildlife Sanctuary",
      description:
        "Home to spectacled langurs, birds, and rich biodiversity.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/sepahijala-wildlife-sanctuary-agartala-tripura-3-attr-hero?qlt=82&ts=1726650971869",
      category: "Wildlife",
    },
    {
      name: "Unakoti",
      description:
        "Ancient rock-cut sculptures dating back to the 8th–9th century.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/rock-cut-heritage-unakoti-2-attr-hero?qlt=82&ts=1751459946526",
      category: "Archaeological",
    },
    {
      name: "Tripura Sundari Temple",
      description: "One of the 51 Shakti Peethas, major pilgrimage site.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5T_stuQbPzqB8WE4cz04WnSmpF8nEPUoXvA&s",
      category: "Spiritual",
    },
    {
      name: "Jampui Hills",
      description: "Highest hill range in Tripura, famous for sunrise views.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPvipJUGE49e8-dw-URqsD2fJhC9dTRRS3w&s",
      category: "Hill Station",
    },
    {
      name: "Dumboor Lake",
      description: "Scenic reservoir with 48 islands and boating facilities.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aZSRzp-I4OrqXijpY7n3Q2fLKq7W6eqghQ&s",
      category: "Lake",
    },
    {
      name: "Pilak Archaeological Site",
      description: "Ancient ruins showing Buddhist and Hindu influences.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1aRcxknxy9aXPhObBDo5GMGZxi-BB_Fiow&s",
      category: "Heritage",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://neidc.org/wp-content/uploads/2024/07/MEGHALAY.pdf-2_page-0001-scaled.jpg"
            alt="Tripura"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Tripura, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Tripura</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Land of Palaces — royal heritage, temples, and tranquil lakes.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Mountain />, title: "Landscape", text: "Hills, Lakes & Forests" },
            { icon: <Users />, title: "Culture", text: "Bengali & Tribal Heritage" },
            { icon: <Calendar />, title: "Best Season", text: "Oct – March" },
            { icon: <Compass />, title: "Famous For", text: "Neermahal, Unakoti, Palaces" },
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
          <h2 className="text-3xl font-bold mb-6">About Tripura</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tripura is a culturally rich state in Northeast India, known for its
            royal palaces, ancient temples, archaeological sites, and scenic
            landscapes. It blends Bengali and tribal traditions, offering a
            unique heritage experience.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox
            icon={<Calendar />}
            title="Best Time to Visit"
            text="October to March is ideal for sightseeing."
          />
          <InfoBox
            icon={<Route />}
            title="How to Reach"
            text="Nearest airport: Agartala. Rail and road connectivity available."
          />
          <InfoBox
            icon={<Info />}
            title="Travel Tips"
            text="Respect heritage sites and local customs."
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
            ✔ Visit royal palaces<br />
            ✔ Explore Unakoti carvings<br />
            ✔ Boat ride at Neermahal<br />
            ✔ Wildlife spotting<br />
            ✔ Temple visits
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            History Lovers • Culture Enthusiasts • Family Travelers • Spiritual
            Seekers • Photographers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">
              Plan Your Tripura Trip
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Tripura" />
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

export default Tripura;
