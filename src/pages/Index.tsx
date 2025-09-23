import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Hammer,
  Droplets,
  Wrench,
  Sparkles,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  PaintBucket,
  ChevronDown,
  Paperclip,
  X,
  Brush,
  Home,
  Square,
  Trees,
  Lightbulb,
  Facebook
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceTypes: [] as string[]
  });
  const [expandedRenovationService, setExpandedRenovationService] = useState<number | null>(null);
  const [showRenovationServices, setShowRenovationServices] = useState(false);
  const [showMaintenanceServices, setShowMaintenanceServices] = useState(false);
  const [expandedMaintenanceService, setExpandedMaintenanceService] = useState<number | null>(null);
  const [showMoreImages, setShowMoreImages] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renovationServices = [
    { 
      icon: Droplets, 
      title: "Bathroom Renovations", 
      description: "Complete bathroom transformations from concept to completion",
      details: "Our bathroom renovations transform your space into a luxurious retreat. We handle complete design and installation including premium tiling with waterproof membranes, modern plumbing fixtures with efficient water systems, custom vanities and storage solutions, proper ventilation and lighting design, and quality finishes that resist moisture and mould. Every bathroom renovation includes detailed project planning, coordination of all trades, and our comprehensive warranty on all workmanship."
    },
    { 
      icon: Sparkles, 
      title: "Laundry Renovations", 
      description: "Transform your laundry into a functional and stylish space",
      details: "Our laundry renovations maximise functionality while creating a pleasant workspace. We specialise in custom storage solutions, efficient layout design for optimal workflow, waterproof flooring and splashback installation, proper ventilation systems, energy-efficient lighting, and durable benchtops that withstand daily use. We integrate modern appliances seamlessly and ensure all plumbing and electrical work meets current standards with proper drainage and utility connections."
    },
    { 
      icon: PaintBucket, 
      title: "Kitchen Renovations", 
      description: "Create the heart of your home with custom kitchen solutions",
      details: "Our kitchen renovations blend style with functionality to create spaces perfect for cooking and entertaining. We provide custom cabinetry design and installation, premium benktop materials including stone and engineered surfaces, modern appliance integration with proper ventilation, efficient lighting design for task and ambient lighting, and durable flooring suitable for high-traffic areas. Every kitchen renovation includes detailed space planning, electrical and plumbing upgrades, and coordination of all trades for seamless completion."
    }
  ];

  const maintenanceServices = [
    { 
      icon: Brush, 
      title: "Painting", 
      description: "Interior and exterior painting services",
      details: "Professional painting services including surface preparation, primer application, and quality finishes for both interior and exterior surfaces."
    },
    { 
      icon: Home, 
      title: "Glazing", 
      description: "Window glass repair and replacement",
      details: "Expert glazing services for windows, doors, and glass panels with proper sealing and energy-efficient solutions."
    },
    { 
      icon: Droplets, 
      title: "Plumbing", 
      description: "Comprehensive plumbing repairs and installations",
      details: "Complete plumbing services including leak repairs, pipe replacements, fixture installations, and emergency callouts."
    },
    { 
      icon: Square, 
      title: "Tiling", 
      description: "Professional tiling for all surfaces",
      details: "Expert tile installation for bathrooms, kitchens, and flooring with waterproofing and precision workmanship."
    },
    { 
      icon: Trees, 
      title: "Carpentry", 
      description: "Custom carpentry and woodwork",
      details: "Skilled carpentry services including custom cabinetry, trim work, door installations, and timber repairs."
    },
    { 
      icon: Wrench, 
      title: "Plastering", 
      description: "Wall and ceiling plastering services",
      details: "Professional plastering for new construction and repairs, including skimming, patching, and texture finishes."
    },
    { 
      icon: Lightbulb, 
      title: "Electrical", 
      description: "Licensed electrical work and repairs",
      details: "Certified electrical services including installations, repairs, safety inspections, and compliance upgrades."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely stunning work! Our bathroom went from outdated to luxurious. The team was professional and completed everything on time.",
      location: "Melbourne"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best investment we've made in our home. The attention to detail and quality of workmanship exceeded our expectations.",
      location: "Melbourne"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "From initial consultation to final cleanup, everything was handled perfectly. Highly recommend AshRose!",
      location: "Melbourne"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Outstanding service! AshRose completely transformed our kitchen renovation. Professional, reliable, and delivered exactly what they promised. Would definitely use them again for future projects.",
      location: "Google Review - Melbourne",
      isGoogleReview: true
    }
  ];

  const initialBeforeAfterImages = [
    {
      before: "https://i.imgur.com/Y6hWiHA.jpeg",
      after: "https://i.imgur.com/RVx1tdF.jpeg"
    },
    {
      before: "https://i.imgur.com/yGXxjlR.png",
      after: "https://i.imgur.com/GiQi9Ly.jpeg"
    }
  ];

  const additionalBeforeAfterImages = [
    {
      before: "https://i.imgur.com/jF6szTa.png",
      after: "https://images.unsplash.com/photo-1756956272351-7439f8ea71ac?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      before: "https://i.imgur.com/8IxOnCQ.png",
      after: "https://i.imgur.com/3CPFK2a.jpeg?"
    }
  ];

  const allBeforeAfterImages = showMoreImages 
    ? [...initialBeforeAfterImages, ...additionalBeforeAfterImages]
    : initialBeforeAfterImages;

  const serviceTypeOptions = [
    'general maintenance',
    'electrical',
    'renovation',
    'handyman',
    'kitchen',
    'plastering',
    'painting',
    'render repair',
    'tiling & flooring',
    'home repairs',
    'other'
  ];

  const handleServiceTypeChange = (serviceType: string) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(serviceType)
        ? prev.serviceTypes.filter(type => type !== serviceType)
        : [...prev.serviceTypes, serviceType]
    }));
  };


  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9\s\-\(\)\+]/g, ''); // Allow numbers, spaces, dashes, parentheses, and plus sign
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.serviceTypes.length === 0) {
      alert('Please select at least one service type.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (formData.phone && formData.phone.replace(/[^0-9]/g, '').length < 8) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service_types: formData.serviceTypes.join(', '),
      to_email: 'ashrosemaintenance@yahoo.com'
    };

    try {
      await emailjs.send(
        'service_msljzoo',
        'template_hnd3m86',
        templateParams,
        'Gj26hMEGsIghlhjEe0AfZ'
      );
      alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', message: '', serviceTypes: [] });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error sending your message. Please try calling us directly.');
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
          {/* Mobile Layout */}
          <div className="flex flex-col space-y-2 md:hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1 flex-1 min-w-0">
                <img 
                  src="/lovable-uploads/9c22412f-8a3c-4f06-8cb7-5283fb3c200c.png" 
                  alt="AshRose Maintenance Logo" 
                  className="h-5 w-5 flex-shrink-0 object-contain"
                />
                <h1 className="text-xs font-bold text-gray-900 truncate">AshRose Maintenance Group Pty Ltd</h1>
              </div>
              <Button 
                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-xs px-2 py-1"
                onClick={() => scrollToSection('contact')}
              >
                Quote
              </Button>
            </div>
            <div className="flex justify-center">
              <a href="tel:0415823368" className="flex items-center space-x-1 text-brand-blue hover:text-brand-blue-dark transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold">0415 823 368</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/9c22412f-8a3c-4f06-8cb7-5283fb3c200c.png" 
                alt="AshRose Maintenance Logo" 
                className="h-8 w-8 object-contain"
              />
              <h1 className="text-2xl font-bold text-gray-900">AshRose Maintenance Group Pty Ltd</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:0415823368" className="flex items-center space-x-2 text-brand-blue hover:text-brand-blue-dark transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">0415 823 368</span>
              </a>
              <Button 
                className="bg-brand-blue hover:bg-brand-blue-dark text-white"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Transform Your Property,<br />
            <span className="text-yellow-200">Enhance Your Investment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional maintenance and renovation services with 15+ years of experience. From repairs to complete makeovers, we deliver quality workmanship you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent backdrop-blur-sm w-full sm:w-auto"
              onClick={() => scrollToSection('gallery')}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-12 md:py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">About AshRose Maintenance Group</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              With over 15 years of experience in property maintenance and renovations, AshRose Maintenance Group has transformed hundreds of properties across South-East Melbourne. Our commitment to exceptional craftsmanship, attention to detail, and customer satisfaction has made us the trusted choice for property owners, real estate agents, and facility managers.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              From routine maintenance to complete property renovations, our team of certified professionals ensures every project meets the highest standards of quality and exceeds your expectations. We believe your property should be maintained to the highest standards, protecting your investment for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="gallery" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">Before & After Transformations</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {allBeforeAfterImages.map((item, index) => (
              <div key={index} className="animate-fade-in">
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          {!showMoreImages && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                onClick={() => setShowMoreImages(true)}
              >
                <ChevronDown className="h-4 w-4 mr-2" />
                See More
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Renovation Services */}
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-brand-blue/20">
              <CardContent className="p-4 md:p-6 text-center">
                <PaintBucket className="h-8 w-8 md:h-12 md:w-12 text-brand-blue mx-auto mb-3 md:mb-4" />
                <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Renovation Services</h4>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Complete property transformations and upgrades
                </p>
                <Button 
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white mb-4"
                  onClick={() => setShowRenovationServices(!showRenovationServices)}
                >
                  {showRenovationServices ? 'Hide Services' : 'View Services'}
                  <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showRenovationServices ? 'rotate-180' : ''}`} />
                </Button>
                
                {showRenovationServices && (
                  <div className="space-y-3 mt-4 pt-4 border-t border-gray-200">
                    {renovationServices.map((service, index) => (
                      <Card 
                        key={index} 
                        className={`hover:shadow-md transition-all duration-300 cursor-pointer border ${
                          expandedRenovationService === index ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-200'
                        }`}
                        onClick={() => setExpandedRenovationService(expandedRenovationService === index ? null : index)}
                      >
                        <CardContent className="p-3 md:p-4 text-center">
                          <div className="flex items-center justify-center space-x-2 md:space-x-3">
                            <service.icon className="h-4 w-4 md:h-6 md:w-6 text-brand-blue flex-shrink-0" />
                            <h5 className="text-xs md:text-sm font-semibold text-gray-900 truncate">{service.title}</h5>
                          </div>
                          
                          {expandedRenovationService === index && (
                            <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-200">
                              <p className="text-xs text-gray-700 leading-relaxed text-left">
                                {service.details}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Maintenance Services */}
            <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-brand-blue/20">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Maintenance Services</h4>
                <p className="text-gray-600 mb-4">
                  Expert repairs and ongoing property maintenance
                </p>
                <Button 
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white mb-4"
                  onClick={() => setShowMaintenanceServices(!showMaintenanceServices)}
                >
                  {showMaintenanceServices ? 'Hide Services' : 'View Services'}
                  <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showMaintenanceServices ? 'rotate-180' : ''}`} />
                </Button>
                
                {showMaintenanceServices && (
                  <div className="space-y-3 mt-4 pt-4 border-t border-gray-200">
                    {maintenanceServices.map((service, index) => (
                      <Card 
                        key={index} 
                        className={`hover:shadow-md transition-all duration-300 cursor-pointer border ${
                          expandedMaintenanceService === index ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-200'
                        }`}
                        onClick={() => setExpandedMaintenanceService(expandedMaintenanceService === index ? null : index)}
                      >
                        <CardContent className="p-3 md:p-4 text-center">
                          <div className="flex items-center justify-center space-x-2 md:space-x-3">
                            <service.icon className="h-4 w-4 md:h-6 md:w-6 text-brand-blue flex-shrink-0" />
                            <h5 className="text-xs md:text-sm font-semibold text-gray-900 truncate">{service.title}</h5>
                          </div>
                          
                          {expandedMaintenanceService === index && (
                            <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-200">
                              <p className="text-xs text-gray-700 leading-relaxed text-left">
                                {service.details}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-lg text-gray-600">Real reviews from Google showing our 5-star service</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
          {/* Featurable Reviews Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Customer Reviews</h3>
            <div 
              id="featurable-de06d0b1-452e-45fb-b6c0-402d279f0c97" 
              data-featurable-async
              style={{ minHeight: '200px' }}
            ></div>
            <script 
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    if (typeof window !== 'undefined' && !window.featurableLoaded) {
                      window.featurableLoaded = true;
                      const script = document.createElement('script');
                      script.src = 'https://featurable.com/assets/bundle.js';
                      script.defer = true;
                      script.charset = 'UTF-8';
                      document.head.appendChild(script);
                    }
                  })();
                `
              }}
            />
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-gray-light">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h3>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-brand-blue" />
                  <a href="tel:0415823368" className="text-lg text-brand-blue hover:text-brand-blue-dark transition-colors">
                    0415 823 368
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-brand-blue" />
                  <span className="text-lg">ashrosemaintenance@yahoo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                  <span className="text-lg">South-East Melbourne</span>
                </div>
              </div>
              <div className="mt-8">
                <h5 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h5>
                <div className="space-y-2 text-gray-600">
                  <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: 8:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-6">Request a Free Quote</h4>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      required
                    />
                    
                    {/* Service Type Selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Service Type (Select at least one) *
                      </label>
                      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-3 border border-gray-200 rounded-md">
                        {serviceTypeOptions.map((serviceType) => (
                          <label key={serviceType} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.serviceTypes.includes(serviceType)}
                              onChange={() => handleServiceTypeChange(serviceType)}
                              className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                            />
                            <span className="text-sm capitalize">{serviceType}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Upload Images Link */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Upload Project Images (Optional)
                      </label>
                      <div className="border-2 border-dashed border-brand-blue/20 rounded-md p-6 bg-gradient-to-br from-brand-blue/5 to-transparent">
                        <div className="text-center">
                          <Paperclip className="h-12 w-12 text-brand-blue mx-auto mb-3" />
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Upload Your Project Images</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Help us better understand your project by uploading photos of the area you'd like renovated or maintained.
                          </p>
                          <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeOaPZKuPBZcOFNfX7gV-zVyNCd-alICNpjSJZfa68n4qwT7w/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
                          >
                            <Paperclip className="h-5 w-5 mr-2" />
                            Upload Images via Google Forms
                          </a>
                          <p className="text-xs text-gray-500 mt-3">
                            Opens in a new window • JPG, PNG, PDF accepted
                          </p>
                        </div>
                      </div>
                    </div>

                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Enhance Your Property?</h3>
          <p className="text-xl mb-8">Contact us today for a free consultation and let us transform your space!</p>
          <div className="flex justify-center">
            <a href="tel:0415823368">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4">
                Call Now: 0415 823 368
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/9c22412f-8a3c-4f06-8cb7-5283fb3c200c.png" 
              alt="AshRose Maintenance Logo" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-xl font-bold">AshRose Maintenance Group Pty Ltd</span>
          </div>
          
          {/* Social Media */}
          <div className="flex justify-center mb-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100078735864586" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>
          
          <p className="text-gray-400 mb-4">
            © 2024 AshRose Maintenance Group Pty Ltd. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>ABN: 29 643 026 064</span>
            <span>ACN: 643 026 064</span>
            <a 
              href="/privacy-policy.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
