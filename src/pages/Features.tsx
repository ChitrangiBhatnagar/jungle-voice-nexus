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
  Settings,
  Headphones,
  Cloud,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Monitor,
  Database,
  Lock
} from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import globalRouting from "@/assets/global-routing.jpg";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Smart Global Call Routing",
      description: "Intelligent routing across 180+ countries with failover protection",
      benefits: [
        "Automatic least-cost routing",
        "99.9% uptime guarantee",
        "Sub-second call connection",
        "Global redundancy"
      ]
    },
    {
      icon: Phone,
      title: "Advanced IVR Automation",
      description: "Build sophisticated call flows with drag-and-drop simplicity",
      benefits: [
        "Visual flow builder",
        "Multi-language support",
        "Voice recognition",
        "Custom prompts"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-time Call Analytics",
      description: "Comprehensive insights into call performance and customer behavior",
      benefits: [
        "Live call monitoring",
        "Detailed reporting",
        "Performance metrics",
        "Custom dashboards"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "SOC 2, GDPR, and ISO certified infrastructure with end-to-end encryption",
      benefits: [
        "SOC 2 Type II certified",
        "GDPR compliant",
        "ISO 27001 certified",
        "End-to-end encryption"
      ]
    },
    {
      icon: Users,
      title: "CRM Integration Suite",
      description: "Seamless synchronization with leading CRM platforms",
      benefits: [
        "Salesforce integration",
        "HubSpot connector",
        "Zoho compatibility",
        "Custom API access"
      ]
    },
    {
      icon: Cloud,
      title: "Auto-Scaling Infrastructure",
      description: "Elastic cloud infrastructure that scales with your business needs",
      benefits: [
        "Instant capacity scaling",
        "Pay-as-you-grow pricing",
        "Global edge locations",
        "Zero hardware maintenance"
      ]
    }
  ];

  const integrations = [
    "Salesforce",
    "HubSpot", 
    "Zoho CRM",
    "Microsoft Dynamics",
    "Pipedrive",
    "Freshworks",
    "Slack",
    "Microsoft Teams"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-blue/5 to-telecom-blue-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-telecom-blue/10 text-telecom-blue">
              ⚡ Enterprise-Grade Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              Comprehensive iGCT Platform Features
              <span className="block text-telecom-green">Designed for Modern Business</span>
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8 max-w-3xl mx-auto">
              Explore the comprehensive suite of cloud telephony capabilities that help businesses worldwide streamline communications, improve customer experiences, and drive operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-cta" size="lg" asChild>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-telecom-blue/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-telecom-blue/20 transition-colors">
                        <Icon className="h-8 w-8 text-telecom-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-telecom-gray mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-telecom-gray-light mb-4 text-lg">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-telecom-gray">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CRM Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Seamless CRM Integration
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Connect iGCT with your existing workflow through our comprehensive integration suite
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-lg font-semibold text-telecom-gray">
                    {integration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://salescentri.com/solutions/psa-suite/integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Integrations
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={teamCollaboration} 
                alt="Business teams collaborating with iGCT cloud telephony platform showing real-time analytics and communication dashboard" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-telecom-green/10 to-telecom-green-dark/10 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-6">
                Enterprise-Grade Cloud Infrastructure
              </h2>
              <p className="text-xl text-telecom-gray-light mb-8">
                Built on carrier-grade infrastructure with global redundancy, 24/7 monitoring, and industry-leading performance standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-telecom-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-gray">API-First Architecture</h3>
                    <p className="text-telecom-gray-light">RESTful APIs and webhooks for seamless custom integrations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-telecom-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-gray">24/7 Expert Support</h3>
                    <p className="text-telecom-gray-light">Round-the-clock technical support and proactive monitoring</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-telecom-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-telecom-gray">Lightning Fast Setup</h3>
                    <p className="text-telecom-gray-light">Get started in minutes with our guided setup wizard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Advanced Telephony Capabilities
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Unlock powerful features that transform how your business communicates with customers worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-telecom-gray mb-6">
                Intelligent Call Analytics & Reporting
              </h3>
              <p className="text-lg text-telecom-gray-light mb-6">
                Gain deep insights into your communication patterns with comprehensive analytics dashboards, real-time monitoring, and detailed performance reports.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                    <Monitor className="h-4 w-4 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">Real-time Call Monitoring</h4>
                    <p className="text-sm text-telecom-gray-light">Live visibility into active calls, queue status, and agent performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                    <BarChart3 className="h-4 w-4 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">Advanced Reporting Suite</h4>
                    <p className="text-sm text-telecom-gray-light">Customizable reports with export capabilities and automated scheduling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-telecom-green/10 w-8 h-8 rounded-lg flex items-center justify-center mt-1">
                    <Database className="h-4 w-4 text-telecom-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-telecom-gray mb-1">Historical Data Analysis</h4>
                    <p className="text-sm text-telecom-gray-light">Trend analysis and performance metrics over time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={globalRouting} 
                alt="Global call routing visualization showing worldwide connectivity and data flow across continents" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-telecom-green/5 to-telecom-green-dark/5 rounded-2xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-telecom-green" />
                </div>
                <h4 className="text-lg font-semibold text-telecom-gray mb-3">End-to-End Encryption</h4>
                <p className="text-telecom-gray-light text-sm">
                  Military-grade encryption protects all voice communications from endpoint to endpoint, ensuring complete privacy and security.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-telecom-green" />
                </div>
                <h4 className="text-lg font-semibold text-telecom-gray mb-3">Global Load Balancing</h4>
                <p className="text-telecom-gray-light text-sm">
                  Intelligent traffic distribution across multiple data centers ensures optimal performance and automatic failover protection.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-telecom-green" />
                </div>
                <h4 className="text-lg font-semibold text-telecom-gray mb-3">Auto-Scaling Technology</h4>
                <p className="text-telecom-gray-light text-sm">
                  Seamlessly handle traffic spikes with elastic infrastructure that automatically adjusts to your business demands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Platform Performance & Reliability
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Industry-leading performance metrics that demonstrate our commitment to reliability and excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-telecom-green mb-2">99.9%</div>
              <div className="text-telecom-gray font-semibold mb-1">Uptime SLA</div>
              <div className="text-sm text-telecom-gray-light">Guaranteed availability with comprehensive monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-telecom-green mb-2">&lt;100ms</div>
              <div className="text-telecom-gray font-semibold mb-1">Average Latency</div>
              <div className="text-sm text-telecom-gray-light">Ultra-low latency for crystal clear conversations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-telecom-green mb-2">180+</div>
              <div className="text-telecom-gray font-semibold mb-1">Countries Covered</div>
              <div className="text-sm text-telecom-gray-light">Global reach with local presence worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-telecom-green mb-2">50+</div>
              <div className="text-telecom-gray font-semibold mb-1">Data Centers</div>
              <div className="text-sm text-telecom-gray-light">Distributed infrastructure for optimal performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-blue to-telecom-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover iGCT's Full Potential
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to explore how our comprehensive feature set can enhance your business communications?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-telecom-blue"
              asChild
            >
              <a
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interactive Demo
                <ExternalLink className="ml-2 h-4 w-4" />
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
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;