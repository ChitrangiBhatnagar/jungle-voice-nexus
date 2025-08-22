import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Globe,
  Shield,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Building,
  Clock,
  Award
} from "lucide-react";
import cloudInfrastructure from "@/assets/cloud-infrastructure.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import globalRouting from "@/assets/global-routing.jpg";
import securityCompliance from "@/assets/security-compliance.jpg";

const Homepage = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Call Routing",
      description: "Smart routing across 180+ countries with 99.9% uptime",
    },
    {
      icon: Phone,
      title: "IVR Automation",
      description: "Advanced call flows and intelligent call distribution",
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "SOC 2, GDPR, and ISO certified infrastructure",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive reporting and call performance insights",
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamless sync with Salesforce, HubSpot, and Zoho",
    },
    {
      icon: Zap,
      title: "Scale Instantly",
      description: "Auto-scaling infrastructure that grows with your business",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "iGCT transformed our global sales outreach. Call quality improved 40% and costs dropped 35%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Growth Solutions",
      content: "The CRM integration is seamless. Our team productivity increased by 60% in the first month.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Global Ventures",
      content: "Best telecom infrastructure we've used. The analytics give us insights we never had before.",
      rating: 5,
    },
  ];

  const benefits = [
    "Reduce telecom costs by up to 50%",
    "Improve call quality globally",
    "Scale instantly without hardware",
    "24/7 expert support",
    "SOC 2 Type II certified",
    "99.9% uptime guarantee",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-telecom-green via-telecom-green-dark to-telecom-gray text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-telecom-green/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-telecom-green-light/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="secondary" className="mb-8 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
              ✨ Trusted by 1000+ companies worldwide
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Elevate Your Business Communications
              <span className="block bg-gradient-to-r from-white to-telecom-green-light bg-clip-text text-transparent">
                with Intelligent Cloud Telephony
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed">
              Experience next-generation voice infrastructure with iGCT. Our cloud telephony platform helps businesses connect seamlessly across 180+ countries with superior call quality, enterprise-grade security, and intelligent automation designed to grow with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button variant="hero" size="lg" className="text-lg px-10 py-5 shadow-2xl" asChild>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="demo"
                size="lg"
                className="text-lg px-10 py-5 shadow-xl"
                asChild
              >
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/90 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telecom-green-light" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telecom-green-light" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-telecom-green-light" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Why Choose iGCT?
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Built for modern businesses that need reliable, scalable, and intelligent voice infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                     <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                       <Icon className="h-6 w-6 text-telecom-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-telecom-gray mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-telecom-gray-light">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-6">
                Enterprise-Grade Cloud Telephony Solutions
              </h2>
              <p className="text-xl text-telecom-gray-light mb-8">
                Discover how leading organizations leverage iGCT to enhance their global communication capabilities and drive business growth.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-telecom-gray">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href="https://salescentri.com/get-started/free-trial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Free Trial
                  </a>
                </Button>
                <Button variant="outline-cta" size="lg" asChild>
                  <a
                    href="https://salescentri.com/pricing/plans-overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Pricing Options
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cloudInfrastructure} 
                alt="Cloud telephony infrastructure diagram showing global data centers and connectivity" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-telecom-green/10 to-telecom-green-dark/10 rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-telecom-green">99.9%</div>
                    <div className="text-sm text-telecom-gray">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-telecom-green">180+</div>
                    <div className="text-sm text-telecom-gray">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-telecom-green">50%</div>
                    <div className="text-sm text-telecom-gray">Cost Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Our cloud telephony platform adapts to your industry's unique communication needs, from healthcare to technology startups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-telecom-green/20 transition-colors">
                  <Building className="h-6 w-6 text-telecom-green" />
                </div>
                <h3 className="text-xl font-semibold text-telecom-gray mb-2">Enterprise Sales</h3>
                <p className="text-telecom-gray-light mb-4">Advanced call routing and CRM integration for large sales organizations</p>
                <ul className="text-sm text-telecom-gray-light space-y-1">
                  <li>• Multi-level IVR systems</li>
                  <li>• Call queue management</li>
                  <li>• Advanced analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-telecom-green/20 transition-colors">
                  <Users className="h-6 w-6 text-telecom-green" />
                </div>
                <h3 className="text-xl font-semibold text-telecom-gray mb-2">Customer Support</h3>
                <p className="text-telecom-gray-light mb-4">24/7 support infrastructure with intelligent call distribution</p>
                <ul className="text-sm text-telecom-gray-light space-y-1">
                  <li>• Skills-based routing</li>
                  <li>• Call recording & monitoring</li>
                  <li>• Real-time dashboards</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-telecom-green/20 transition-colors">
                  <Clock className="h-6 w-6 text-telecom-green" />
                </div>
                <h3 className="text-xl font-semibold text-telecom-gray mb-2">Healthcare</h3>
                <p className="text-telecom-gray-light mb-4">HIPAA-compliant communications for medical practices</p>
                <ul className="text-sm text-telecom-gray-light space-y-1">
                  <li>• Secure call recording</li>
                  <li>• Appointment reminders</li>
                  <li>• Emergency routing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={securityCompliance} 
                alt="Security and compliance certifications including SOC 2, GDPR, and ISO standards" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-telecom-green/5 to-telecom-green-dark/5 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-6">
                Enterprise Security & Compliance
              </h2>
              <p className="text-xl text-telecom-gray-light mb-8">
                Your business communications are protected by industry-leading security protocols and compliance certifications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <Award className="h-5 w-5 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">SOC 2 Type II</h4>
                    <p className="text-sm text-telecom-gray-light">Independently audited security controls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <Shield className="h-5 w-5 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">GDPR Compliant</h4>
                    <p className="text-sm text-telecom-gray-light">European data protection standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <Award className="h-5 w-5 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">ISO 27001</h4>
                    <p className="text-sm text-telecom-gray-light">Information security management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-10 h-10 rounded-lg flex items-center justify-center mt-1">
                    <Shield className="h-5 w-5 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">HIPAA Ready</h4>
                    <p className="text-sm text-telecom-gray-light">Healthcare data protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-telecom-gray-light">
              See what our customers say about iGCT
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-telecom-gray-light mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-telecom-gray">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-telecom-gray-light">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-green to-telecom-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Future of Business Communications
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover how iGCT can help your business connect, communicate, and grow in the global marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="demo"
              size="lg"
              asChild
            >
              <a
                href="https://salescentri.com/get-started/free-trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-telecom-green hover:bg-gray-100"
              asChild
            >
              <a
                href="https://salescentri.com/get-started/book-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;