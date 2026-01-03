
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
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Naga Bivouac</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Naga Bivouc is an adventure and nature-focused initiative rooted in the wild landscapes of Nagaland. Inspired by the idea of a bivouc—a simple outdoor shelter under the open sky—we believe in travel that is raw, mindful, and deeply connected to nature.

We curate authentic trekking, camping, and outdoor experiences that celebrate local culture, support communities, and promote sustainable tourism. At Naga Bivouc, every journey is about slowing down, embracing the outdoors, and experiencing the land in its truest form.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded by passionate locals who deeply understand the terrain and culture of Nagaland, 
                Naga Bivouac was born from a desire to share the hidden gems of our homeland with the world.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe in sustainable tourism that benefits local communities while preserving the 
                natural environment. Every adventure with us supports local families and contributes to 
                conservation efforts.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2018</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Local Owned</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=800"
                alt="Naga cultural heritage"
                className="aspect-square object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
