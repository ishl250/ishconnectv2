import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  href: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, features, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="glass-card h-full p-6 md:p-8 overflow-hidden transition-all duration-300 hover:border-primary/50">
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-primary/20 rounded-full blur-3xl" />
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Link */}
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
