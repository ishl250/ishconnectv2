import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, Award, Users, Clock, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import TrainingCard from '@/components/TrainingCard';
import ContactForm from '@/components/ContactForm';
import { trainingPrograms } from '@/data/mockData';

const Training = () => {
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
              <GraduationCap size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Tech Education</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Master the Skills of{' '}
              <span className="gradient-text">Tomorrow</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our industry-leading training programs and gain practical skills
              that will accelerate your tech career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '500+', label: 'Students Trained' },
              { icon: Award, value: '95%', label: 'Completion Rate' },
              { icon: Star, value: '4.9', label: 'Average Rating' },
              { icon: Clock, value: '10+', label: 'Programs Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Our Programs"
            title="Choose Your"
            highlightedText="Learning Path"
            description="Comprehensive training programs designed by industry experts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trainingPrograms.map((program, index) => (
              <TrainingCard
                key={program.id}
                program={program}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <SectionHeader
            badge="Why Train With Us"
            title="What Makes Us"
            highlightedText="Different"
            description="Our training programs are designed to deliver real-world skills."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Industry-Expert Instructors',
                description: 'Learn from professionals with years of real-world experience.',
              },
              {
                title: 'Hands-On Projects',
                description: 'Build a portfolio of projects that showcase your skills.',
              },
              {
                title: 'Flexible Learning',
                description: 'Study at your own pace with our hybrid learning model.',
              },
              {
                title: 'Career Support',
                description: 'Get job placement assistance and interview preparation.',
              },
              {
                title: 'Industry Certificates',
                description: 'Earn recognized certificates upon program completion.',
              },
              {
                title: 'Community Access',
                description: 'Join our alumni network and connect with fellow learners.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="text-sm font-medium text-primary">Start Your Journey</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your{' '}
                <span className="gradient-text">Career?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the registration form and our team will get in touch with you
                to discuss the best program for your goals.
              </p>

              <div className="space-y-4">
                {[
                  'Personalized learning path assessment',
                  'Flexible payment options available',
                  'Access to exclusive resources and tools',
                  'Certificate upon successful completion',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
