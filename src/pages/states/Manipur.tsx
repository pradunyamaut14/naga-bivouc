import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Compass, Camera, Calendar, Route, Users, Info, Droplets, Landmark } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const Manipur = () => {
  const attractions = [
    {
      name: "Loktak Lake",
      description: "The largest freshwater lake in Northeast India, famous for floating phumdis and Keibul Lamjao National Park.",
      image: "https://pulitzercenter.org/sites/default/files/styles/height_500/public/12-14-17/essay_2_of_12.jpg.webp?itok=Z8l80gET",
      category: "Nature"
    },
    {
      name: "Keibul Lamjao National Park",
      description: "World’s only floating national park and the natural habitat of the rare Sangai deer.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQsSMg0Ocy9l3PQfnrHdf6HIYk5fvqRwMAw&s",
      category: "Wildlife"
    },
    {
      name: "Kangla Fort",
      description: "Ancient seat of Manipur’s rulers and the spiritual & historical heart of Imphal.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/kangla-fort-imphal-manipur-1-attr-hero?qlt=82&ts=1742165496756",
      category: "History"
    },
    {
      name: "Imphal War Cemetery",
      description: "World War II memorial maintained by the Commonwealth War Graves Commission.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/imphal-war-cemetery-imphal-manipur-3-attr-about?qlt=82&ts=1742174411837",
      category: "Heritage"
    },
    {
      name: "Shree Govindajee Temple",
      description: "Most important Vaishnavite temple in Manipur, located near Kangla Fort.",
      image: "https://superbcollections.com/wp-content/uploads/2023/09/1654674959images-10.jpeg",
      category: "Spiritual"
    },
    {
      name: "Andro Village",
      description: "Traditional cultural village known for pottery, heritage museum and local crafts.",
      image: "https://banasri.in/wp-content/uploads/2024/07/Andro-village-in-Manipur.jpg",
      category: "Cultural"
    },
    {
      name: "Ukhrul",
      description: "Hill district famous for Shirui Lily, rolling hills and Tangkhul Naga culture.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ipbutjoD3FmT2aViEeDhW6yqHLpuyxejWQ&s",
      category: "Hill Station"
    },
    {
      name: "Moreh (Indo-Myanmar Border)",
      description: "International trade town near Myanmar border, gateway to Southeast Asia.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7ZDcjCIgVcltSPu_aIbqe0jK08mZoTiTtg&s",
      category: "Border Town"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1920"
            alt="Loktak Lake Manipur"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Manipur, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Manipur</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Jewel of India — a land of floating lakes, classical dance traditions, scenic hills,
            rich history and vibrant culture.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Droplets />, title: "Famous For", text: "Loktak Lake & Phumdis" },
            { icon: <Users />, title: "Culture", text: "Classical Dance & Tribal Heritage" },
            { icon: <Calendar />, title: "Best Season", text: "October – March" },
            { icon: <Compass />, title: "Also Known As", text: "Jewel of India" },
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
          <h2 className="text-3xl font-bold mb-6">About Manipur</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Manipur is known as the “Jewel of India” for its natural beauty, classical traditions and unique cultural identity.
            Surrounded by hills and centered around the beautiful Imphal Valley, Manipur is home to Loktak Lake — the only
            floating lake in the world. The state has a rich history, a strong sporting culture, and is the birthplace of polo.
            From serene landscapes and rare wildlife to vibrant dance forms and historic forts, Manipur offers a peaceful yet
            culturally rich travel experience.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox icon={<Calendar />} title="Best Time to Visit" text="October to March is ideal for sightseeing and festivals." />
          <InfoBox icon={<Route />} title="How to Reach" text="Imphal has an airport. Well connected by road from Assam and Nagaland." />
          <InfoBox icon={<Info />} title="Permit Info" text="No ILP required for Manipur for Indian tourists." />
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
          <h2 className="text-3xl font-bold mb-6">Things To Do in Manipur</h2>
          <p className="text-muted-foreground text-lg">
            ✔ Boating at Loktak Lake<br/>
            ✔ Visit floating national park & Sangai deer<br/>
            ✔ Explore Imphal heritage sites & museums<br/>
            ✔ Experience Manipuri classical dance & culture<br/>
            ✔ Visit hill districts like Ukhrul and Moreh
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Culture lovers • Nature explorers • Family travelers • History lovers • Peaceful retreats • Photographers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">Plan Your Manipur Trip</h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Manipur" />
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

export default Manipur;
