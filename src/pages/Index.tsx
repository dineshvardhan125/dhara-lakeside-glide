import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BlurFade } from "@/components/ui/blur-fade";
import { HyperText } from "@/components/ui/hyper-text";

// Real Dhara Resort Images
const heroBackground = "/lovable-uploads/fe14f8aa-a748-40b8-b4b8-aa3d97e126b5.png";
const lakeViewLawn = "/lovable-uploads/77473d13-a04f-43b0-9758-26efa87824f1.png";
const islandLawn = "/lovable-uploads/b28a9980-a170-4b09-9219-3465c29adf61.png";
const conventionCenter = "/lovable-uploads/conventionhall.jpg";
const luxuryRoom = "/lovable-uploads/4a196bdb-3366-4d9c-ac59-53f224ca7641.png";
const caravanStay = "/lovable-uploads/fcc4f3da-9bc9-4f96-ab3f-d671515f8ed2.png";
const lakesideTenting = "/lovable-uploads/a0bfd069-9149-4ec1-b9af-9e5bb934bcea.png";
const amenities = "/lovable-uploads/1c1e0edb-d99f-4fa9-a3ac-772f42e440c6.png";
const dharaLogo = "/lovable-uploads/ea8bc108-9b38-4694-a2bf-a3683d6456f3.png";
const nightVenueAerial = "/lovable-uploads/ffd5b576-8bb9-46c0-bd72-24277dca0b9e.png";

const Index = () => {
  console.log('Index component rendering...');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const testimonials = [
    {
      text: "Breathtaking venue with stunning lake views. Every detail was flawlessly executed for our dream wedding.",
      author: "Priya & Rohan"
    },
    {
      text: "Perfect blend of elegance and comfort. The staff exceeded our expectations in every way.",
      author: "Sanya M"
    },
    {
      text: "An unforgettable experience. The lakeside setting created magical moments for our corporate retreat.",
      author: "Tech Solutions Inc"
    }
  ];

  const venues = [
    {
      title: "Lake View Lawn",
      description: "1.7 acres of pristine lakefront space",
      capacity: "1500-2000 guests",
      image: lakeViewLawn
    },
    {
      title: "Island Lawn",
      description: "Intimate half-acre island setting",
      capacity: "200-300 guests",
      image: islandLawn
    },
    {
      title: "Convention Centre",
      description: "Premium indoor venue with modern amenities",
      capacity: "Up to 1000 guests",
      image: conventionCenter
    }
  ];

  const experiences = [
    {
      title: "Luxury Green Rooms",
      image: luxuryRoom
    },
    {
      title: "Grand Events",
      image: caravanStay
    },
    {
      title: "Lakeside Tenting",
      image: lakesideTenting
    },
    {
      title: "Premium Amenities",
      image: amenities
    }
  ];

  const galleryImages = [
    lakeViewLawn,
    islandLawn,
    conventionCenter,
    luxuryRoom,
    caravanStay,
    nightVenueAerial
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        navbarBg ? 'bg-primary backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={dharaLogo} 
              alt="Dhara Resort & Convention" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Venues", "Stays", "Gallery", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-accent transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              {["About", "Venues", "Stays", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-2 py-3 text-white hover:text-accent transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <BlurFade delay={0.25} inView>
            <img 
              src={dharaLogo} 
              alt="Dhara Resort & Convention" 
              className="h-24 w-auto mx-auto mb-8"
            />
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h1 className="font-fraunces text-5xl md:text-7xl font-semibold mb-6 leading-tight">
              A Lakeside Escape for Every Occasion
            </h1>
          </BlurFade>
          <BlurFade delay={0.75} inView>
            <p className="text-xl md:text-2xl mb-8 font-medium leading-relaxed">
              Celebrate life's moments at Hyderabad's premier 14-acre lakeside retreat.
            </p>
          </BlurFade>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-luxury"
          >
            Plan Your Event
          </Button>
          
          {/* WhatsApp Contact */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a 
              href="https://wa.me/918399839999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
              </svg>
              <HyperText 
                text="+91 8399-8399-99"
                className="text-white font-semibold text-lg"
                duration={1000}
                animateOnLoad={false}
              />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-muted/30 bg-fixed opacity-50"
          style={{ 
            backgroundImage: `url(${lakesideTenting})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateY(-10%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold mb-8 text-primary">
              An Escape Within the City
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-12">
              Nestled across 14 pristine acres beside the serene Himayat Sagar Lake, Dhara Resort & Convention offers 
              an unparalleled blend of natural beauty and modern luxury. Just 30-45 minutes from Hyderabad's bustling 
              business hubs, our resort provides the perfect sanctuary for weddings, corporate events, and intimate retreats. 
              Experience the tranquility of lakeside living while enjoying world-class amenities and impeccable service 
              that transforms every gathering into an unforgettable celebration.
            </p>
            
            {/* Video Section */}
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-card border-4 border-accent/20 hover:border-accent/40 transition-all duration-500">
                  <iframe
                    src="https://www.youtube.com/embed/FYQ37oI9e8o"
                    title="Dhara Resort & Convention - Virtual Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  onClick={() => window.open("https://www.youtube.com/@DharaResort", "_blank")}
                  className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Visit Our YouTube Channel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Venues for Every Occasion
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {venues.map((venue, index) => (
              <Card 
                key={venue.title}
                className="group overflow-hidden bg-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-fraunces text-xl font-semibold mb-2 text-primary">
                    {venue.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{venue.description}</p>
                  <p className="font-medium text-accent">{venue.capacity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium rounded-full"
            >
              Explore Venue Options
            </Button>
          </div>
        </div>
      </section>

      {/* Stay & Experiences Section */}
      <section id="stays" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Stay & Experiences
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <div 
                key={experience.title}
                className="group relative overflow-hidden rounded-xl animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <h3 className="text-white font-fraunces text-lg font-semibold p-4">
                    {experience.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold mb-12 text-primary">
              What Our Guests Say
            </h2>
            <div className="relative h-40 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentTestimonial 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <blockquote className="text-xl md:text-2xl italic mb-6 text-muted-foreground leading-relaxed">
                    <span className="text-accent text-4xl font-fraunces">"</span>
                    {testimonial.text}
                    <span className="text-accent text-4xl font-fraunces">"</span>
                  </blockquote>
                  <cite className="font-fraunces text-lg font-semibold text-primary">
                    — {testimonial.author}
                  </cite>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-fraunces text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Gallery Preview
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl hover-scale"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 border-2 border-transparent group-hover:border-accent"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-medium rounded-full"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-fraunces text-4xl md:text-5xl font-semibold mb-6">
            Ready to Host Your Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book now and make memories that last a lifetime.
          </p>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-medium rounded-full hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src={dharaLogo} 
                alt="Dhara Resort & Convention" 
                className="h-16 w-auto mb-4"
              />
              <p className="opacity-90">
                Your premier lakeside destination for unforgettable celebrations.
              </p>
            </div>
            <div>
              <h3 className="font-fraunces text-xl font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-accent" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-accent" />
                  <span>info@dhararesort.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-accent" />
                  <span>Himayat Sagar Lake, Hyderabad</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-fraunces text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <button 
                    key={index}
                    className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/40 transition-colors duration-300 group"
                  >
                    <Icon size={18} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="opacity-70">
              © 2024 Dhara Resort & Convention. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;