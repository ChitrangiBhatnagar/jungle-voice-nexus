import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Video,
  BookOpen,
  Download,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Globe
} from "lucide-react";

const Resources = () => {
  const whitepapers = [
    {
      title: "The Complete Guide to Cloud Telephony Implementation",
      description: "Learn best practices for migrating from traditional phone systems to cloud-based solutions.",
      category: "Implementation Guide",
      downloadLink: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "ROI Analysis: Cloud Telephony vs Traditional Systems",
      description: "Comprehensive cost-benefit analysis showing potential savings and productivity gains.",
      category: "Business Case",
      downloadLink: "https://salescentri.com/resources/whitepapers-ebooks"
    },
    {
      title: "Security Best Practices for Cloud Communications",
      description: "Essential security measures for protecting business communications in the cloud.",
      category: "Security Guide",
      downloadLink: "https://salescentri.com/resources/whitepapers-ebooks"
    }
  ];

  const caseStudies = [
    {
      title: "TechStart Inc: 40% Improvement in Global Call Quality",
      description: "How a growing startup scaled their international communications with iGCT.",
      results: "40% better call quality, 35% cost reduction",
      industry: "Technology",
      link: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "Healthcare Group: HIPAA-Compliant Communication Solution",
      description: "Implementing secure, compliant telephony for medical practices.",
      results: "100% HIPAA compliance, 50% faster patient response",
      industry: "Healthcare",
      link: "https://salescentri.com/resources/case-studies"
    },
    {
      title: "Global Ventures: Scaling Across 50+ Countries",
      description: "How a multinational company standardized communications worldwide.",
      results: "99.9% uptime, unified global system",
      industry: "Enterprise",
      link: "https://salescentri.com/resources/case-studies"
    }
  ];

  const webinars = [
    {
      title: "Future of Business Communications: AI and Cloud Telephony",
      description: "Explore how AI is transforming cloud-based business communications.",
      date: "December 2024",
      duration: "45 minutes",
      link: "https://salescentri.com/resources/tutorials-webinars"
    },
    {
      title: "Maximizing ROI from Your Telephony Investment",
      description: "Best practices for optimizing your cloud telephony platform for maximum returns.",
      date: "January 2025",
      duration: "30 minutes",
      link: "https://salescentri.com/resources/tutorials-webinars"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-telecom-green/5 to-telecom-green-dark/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-telecom-green/10 text-telecom-green">
              📚 Knowledge Center
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-gray mb-6">
              Cloud Telephony Resources & Insights
            </h1>
            <p className="text-xl text-telecom-gray-light mb-8 max-w-3xl mx-auto">
              Access comprehensive guides, case studies, and expert insights to help you make informed decisions about your business communication needs.
            </p>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Expert Whitepapers & Guides
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              In-depth research and practical guides to help you understand and implement cloud telephony solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-telecom-green" />
                  </div>
                  <Badge variant="secondary" className="mb-3 bg-telecom-green/10 text-telecom-green">
                    {paper.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-telecom-gray mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-telecom-gray-light mb-6">
                    {paper.description}
                  </p>
                  <Button variant="cta" className="w-full" asChild>
                    <a
                      href={paper.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Free
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Real-world examples of how businesses have transformed their communications with iGCT.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-telecom-green/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-telecom-green" />
                    </div>
                    <Badge variant="secondary" className="bg-telecom-green/10 text-telecom-green">
                      {study.industry}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-telecom-gray mb-3">
                    {study.title}
                  </h3>
                  <p className="text-telecom-gray-light mb-4">
                    {study.description}
                  </p>
                  <div className="bg-telecom-green/5 p-3 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-telecom-green">
                      Results: {study.results}
                    </p>
                  </div>
                  <Button variant="outline-cta" className="w-full" asChild>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Educational Webinars & Tutorials
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Join our experts for live discussions and recorded sessions on cloud telephony best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-telecom-green/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="h-6 w-6 text-telecom-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-telecom-gray mb-2">
                        {webinar.title}
                      </h3>
                      <p className="text-telecom-gray-light mb-4">
                        {webinar.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-telecom-gray-light mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{webinar.duration}</span>
                        </div>
                      </div>
                      <Button variant="cta" size="sm" asChild>
                        <a
                          href={webinar.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch Now
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Documentation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-telecom-gray mb-4">
              Technical Documentation
            </h2>
            <p className="text-xl text-telecom-gray-light max-w-3xl mx-auto">
              Comprehensive technical resources for developers and system administrators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-telecom-green" />
                </div>
                <h3 className="font-semibold text-telecom-gray mb-2">User Guide</h3>
                <p className="text-sm text-telecom-gray-light mb-4">Complete platform documentation</p>
                <Button variant="outline-cta" size="sm" asChild>
                  <a
                    href="https://salescentri.com/docs/user-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-telecom-green" />
                </div>
                <h3 className="font-semibold text-telecom-gray mb-2">API Reference</h3>
                <p className="text-sm text-telecom-gray-light mb-4">RESTful API documentation</p>
                <Button variant="outline-cta" size="sm" asChild>
                  <a
                    href="https://salescentri.com/docs/api-reference"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View API
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-telecom-green" />
                </div>
                <h3 className="font-semibold text-telecom-gray mb-2">Security & Privacy</h3>
                <p className="text-sm text-telecom-gray-light mb-4">Compliance and security details</p>
                <Button variant="outline-cta" size="sm" asChild>
                  <a
                    href="https://salescentri.com/trust/security-privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="bg-telecom-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-telecom-green" />
                </div>
                <h3 className="font-semibold text-telecom-gray mb-2">Integrations</h3>
                <p className="text-sm text-telecom-gray-light mb-4">CRM and third-party integrations</p>
                <Button variant="outline-cta" size="sm" asChild>
                  <a
                    href="https://salescentri.com/solutions/psa-suite/integrations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View All
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-telecom-green to-telecom-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Access all resources and start your cloud telephony journey with expert guidance.
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
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;