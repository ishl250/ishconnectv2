import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/mockData';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-glow-gradient opacity-20 pointer-events-none" />
        
        <div className="container-custom relative px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Zap size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Technology Solutions for{' '}
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From web and mobile development to cybersecurity and cloud solutions,
              we offer comprehensive technology services to power your digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                href={service.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            badge="Our Process"
            title="How We"
            highlightedText="Work"
            description="A proven methodology that delivers results."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We dive deep into understanding your business needs and goals.' },
              { step: '02', title: 'Strategy', description: 'We craft a tailored solution architecture and project roadmap.' },
              { step: '03', title: 'Development', description: 'Our team builds your solution using agile methodology.' },
              { step: '04', title: 'Delivery', description: 'We deploy, test, and provide ongoing support.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 h-full">
                  <span className="text-5xl font-bold text-primary/20 font-display">{item.step}</span>
                  <h4 className="font-display text-xl font-semibold text-foreground mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology{' '}
                <span className="gradient-text">Partner</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with a deep understanding of business needs
                to deliver solutions that drive real results.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Expert team with 50+ years combined experience',
                  'Proven track record of successful project delivery',
                  'Agile methodology for flexibility and speed',
                  'Ongoing support and maintenance',
                  'Transparent communication and pricing',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Let's discuss your project requirements and find the perfect solution for your business.
                </p>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                  >
                    Start Your Project
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
