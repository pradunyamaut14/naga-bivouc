import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Mountain, Compass, Camera, Calendar, Route, Users, Info } from "lucide-react";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";

const ArunachalPradesh = () => {
  const attractions = [
    {
      name: "Tawang Monastery",
      description: "Largest monastery in India, perched at 10,000 ft. The spiritual heart of Arunachal.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDFdDxTEcbq9ODyxa2HvPqOBczi6ts1i-VA&s",
      category: "Spiritual"
    },
    {
      name: "Sela Pass",
      description: "High-altitude pass at 13,700 ft with breathtaking snow landscapes.",
      image: "https://hblimg.mmtcdn.com/content/hubble/img/tawangdestimgs/mmt/activities/m_Sela_Pass_1_l_426_640.jpg",
      category: "Mountains"
    },
    {
      name: "Ziro Valley",
      description: "UNESCO tentative heritage site, famous for Apatani culture & music festival.",
      image: "https://travelogyindia.b-cdn.net/storage/app/upload/ziro-arunachal-pradesh.jpg",
      category: "Cultural"
    },
    {
      name: "Namdapha National Park",
      description: "One of India’s richest biodiversity hotspots.",
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/01/04131348/shutterstock_1325065313-1558x900.jpg",
      category: "Wildlife"
    },
    {
      name: "Bomdila",
      description: "Hill town with monasteries & panoramic Himalayan views.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7N3GrGU7IcIKNklXC1733CSUALUUZclQcA&s",
      category: "Hill Station"
    },
    {
      name: "Dirang Valley",
      description: "Beautiful valley with hot springs & rivers.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/03/db/69/thupsung-dhargye-ling.jpg?w=600&h=-1&s=1",
      category: "Nature"
    },
    {
      name: "Bumla Pass",
      description: "Indo-China border pass near Tawang.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f1/8f/43/road-to-bum-la.jpg?w=900&h=-1&s=1",
      category: "Adventure"
    },
    {
      name: "Mechuka",
      description: "Remote hidden valley with untouched landscapes.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-samten-yongcha-monastery-mechuka-arunachal-pradesh-attr-hero?qlt=82&ts=1726743121180",
      category: "Offbeat"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTgxnB5fMg2sIKfhLpBUu6LsLas3iz4Bq1Q&s"
            alt="Arunachal Pradesh"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Arunachal Pradesh, Northeast India</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Arunachal Pradesh</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            The Land of Dawn-Lit Mountains — India’s easternmost state, famous for Himalayan passes,
            ancient monasteries, tribal cultures and untouched wilderness.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: <Mountain />, title: "Landscape", text: "Himalayan Mountains & Valleys" },
            { icon: <Users />, title: "Culture", text: "26+ Major Tribes" },
            { icon: <Calendar />, title: "Best Season", text: "Oct – April" },
            { icon: <Compass />, title: "Famous For", text: "Tawang, Ziro, Passes" },
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
          <h2 className="text-3xl font-bold mb-6">About Arunachal Pradesh</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Arunachal Pradesh is India’s easternmost state where the sun rises first. It is a land of dramatic mountains,
            deep valleys, ancient monasteries, dense forests and vibrant tribal cultures. From the spiritual town of Tawang
            to the music-filled Ziro Valley and the wildlife-rich Namdapha forests, Arunachal offers a perfect mix of
            spirituality, adventure, nature and culture. It is ideal for travelers seeking raw, untouched destinations.
          </p>
        </div>
      </section>

      {/* Travel Info */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          <InfoBox icon={<Calendar />} title="Best Time to Visit" text="October to April is ideal. Winters offer snow in Tawang. Summers are pleasant for valleys." />
          <InfoBox icon={<Route />} title="How to Reach" text="Nearest airport: Guwahati. From Guwahati travel by road to Bhalukpong/Itanagar." />
          <InfoBox icon={<Info />} title="Permit Required" text="Indian tourists need ILP (Inner Line Permit). We arrange it for you." />
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
          <h2 className="text-3xl font-bold mb-6">Things To Do</h2>
          <p className="text-muted-foreground text-lg">
            ✔ High-altitude road trips & biking<br/>
            ✔ Visit monasteries & tribal villages<br/>
            ✔ Wildlife safaris & forest exploration<br/>
            ✔ Trekking & photography tours<br/>
            ✔ Attend Ziro Music Festival & local festivals
          </p>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ideal For</h2>
          <p className="text-muted-foreground text-lg">
            Adventure lovers • Nature explorers • Photographers • Culture lovers • Bike riders • Offbeat travelers
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold text-center mb-3">Plan Your Arunachal Trip</h3>
            <p className="text-center text-muted-foreground mb-6">
              Get a custom itinerary from our local experts
            </p>
            <WhatsAppInquiryForm destination="Arunachal Pradesh" />
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

export default ArunachalPradesh;
