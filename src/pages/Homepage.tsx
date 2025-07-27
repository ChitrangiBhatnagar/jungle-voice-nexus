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
  Play
} from "lucide-react";

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
      <section className="relative bg-gradient-to-br from-telecom-blue via-telecom-blue-dark to-telecom-gray text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              ✨ Trusted by 1000+ companies worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Global Cloud Telephony
              <span className="block text-telecom-blue-light">Built to Scale Your Outreach</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Reliable, secure, and scalable voice infrastructure — powered by iGCT.
              Connect with customers worldwide through our enterprise-grade telephony platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
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
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-telecom-blue"
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
            <div className="text-white/80">
              <p className="mb-2">🚀 Get started in under 5 minutes</p>
              <p>No credit card required • 14-day free trial</p>
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
                    <div className="bg-telecom-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-telecom-blue" />
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
                Enterprise-Grade Telephony Infrastructure
              </h2>
              <p className="text-xl text-telecom-gray-light mb-8">
                Join thousands of companies using iGCT to power their global communications
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
                    Get Started Free
                  </a>
                </Button>
                <Button variant="outline-cta" size="lg" asChild>
                  <a
                    href="https://salescentri.com/pricing/plans-overview"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Pricing
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="text-4xl font-bold text-telecom-blue">99.9%</div>
                <div className="text-telecom-gray">Uptime Guarantee</div>
                <div className="text-4xl font-bold text-telecom-blue">180+</div>
                <div className="text-telecom-gray">Countries Supported</div>
                <div className="text-4xl font-bold text-telecom-blue">50%</div>
                <div className="text-telecom-gray">Cost Reduction</div>
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
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of companies using iGCT to scale their global outreach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-telecom-blue"
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
              className="bg-white text-telecom-blue hover:bg-gray-100"
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