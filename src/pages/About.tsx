
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Award, Heart, Camera, TreePine } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Pradunya Maut",
      role: "Founder & Lead Guide",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "With over 10 years of experience exploring Northeast India, Pradunya founded Naga Bivouac to share the region's hidden gems."
    },
    {
      name: "Sarah Naga",
      role: "Cultural Expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616c8e1fb3",
      description: "Local cultural ambassador specializing in tribal traditions and authentic cultural experiences."
    },
    {
      name: "Rahul Singh",
      role: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Expert mountaineer and trekking guide with extensive knowledge of Himalayan routes."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in genuine cultural immersion and meaningful connections with local communities."
    },
    {
      icon: TreePine,
      title: "Sustainable Tourism",
      description: "Our practices support local economies while preserving the natural environment and cultural heritage."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We work closely with local communities to ensure tourism benefits everyone involved."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We're committed to providing exceptional service and unforgettable adventure experiences."
    }
  ];

  const achievements = [
    "Over 500 successful expeditions",
    "98% customer satisfaction rate",
    "Certified by Tourism Ministry",
    "Winner of Best Adventure Tour 2023",
    "Partner with 15+ local communities",
    "Zero-incident safety record"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            alt="About Naga Bivouac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-primary">Naga Bivouac</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner for authentic Northeast India adventures since 2014
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014 by Pradunya Maut, Naga Bivouac began as a passionate project to showcase 
                  the incredible beauty and rich cultural heritage of Northeast India. What started as small 
                  group expeditions has grown into a trusted adventure tourism company.
                </p>
                <p>
                  Our name "Bivouac" reflects our love for outdoor camping and authentic wilderness experiences. 
                  We specialize in creating immersive journeys that connect travelers with the pristine 
                  landscapes and vibrant cultures of all eight northeastern states.
                </p>
                <p>
                  Over the years, we've built strong relationships with local communities, ensuring our tourism 
                  activities benefit the regions we explore while maintaining the highest standards of 
                  environmental responsibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                alt="Our journey"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate adventurers and local experts dedicated to your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl opacity-90">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-primary">Adventure</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey through the hidden gems of Northeast India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg">
                <Camera className="mr-2 h-4 w-4" />
                View Our Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
