import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Users, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mountain,
      title: "Authentic Experiences",
      description: "Discover the untouched beauty of Nagaland through carefully curated outdoor adventures."
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Our local guides share deep knowledge of Naga culture, history, and natural landscapes."
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "We maintain the highest standards of safety and comfort for all our adventure programs."
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Connect with local communities and experience the rich heritage of the Naga people."
    }
  ];

  return (
    <section id="about" className="py-20 naga-gradient relative">
      {/* Tribal Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 naga-border"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-naga-red">Naga Bivouac</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Naga Bivouac is an adventure and nature-focused initiative rooted in the wild landscapes of Nagaland. Inspired by the idea of a bivouac—a simple outdoor shelter under the open sky—we believe in travel that is raw, mindful, and deeply connected to nature.
            We curate authentic trekking, camping, and outdoor experiences that celebrate local culture, support communities, and promote sustainable tourism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm border-naga-gold/20 hover:border-naga-red/40 group"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-naga-red/10 rounded-full mb-4 group-hover:bg-naga-red/20 transition-colors border border-naga-gold/20">
                  <feature.icon className="h-8 w-8 text-naga-red" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="font-body text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-naga-gold/20 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold mb-6 text-foreground">Our Story</h3>
              <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                Founded by passionate locals who deeply understand the terrain and culture of Nagaland, 
                Naga Bivouac was born from a desire to share the hidden gems of our homeland with the world.
              </p>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                We believe in sustainable tourism that benefits local communities while preserving the 
                natural environment. Every adventure with us supports local families and contributes to 
                conservation efforts.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center p-4 bg-naga-red/10 rounded-lg border border-naga-gold/20">
                  <div className="font-display text-2xl font-bold text-naga-red">2018</div>
                  <div className="font-body text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center p-4 bg-naga-forest/10 rounded-lg border border-naga-gold/20">
                  <div className="font-display text-2xl font-bold text-naga-forest">15+</div>
                  <div className="font-body text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center p-4 bg-naga-gold/10 rounded-lg border border-naga-gold/20">
                  <div className="font-display text-2xl font-bold text-naga-gold">100%</div>
                  <div className="font-body text-sm text-muted-foreground">Local Owned</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-naga-red/20 to-naga-forest/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://tripandtales.com/wp-content/uploads/2025/06/Hills-of-Nagaland.jpg"
                alt="Naga cultural heritage"
                className="relative aspect-square object-cover rounded-2xl border-2 border-naga-gold/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tribal Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 naga-border"></div>
    </section>
  );
};

export default About;
