
import { motion } from "framer-motion";
import { LucideIcon, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  level: string;
  students: number;
  topics: string[];
  price: string;
}

interface TrainingCardProps {
  program: TrainingProgram;
  delay?: number;
}


const GOOGLE_FORM_URL = "https://forms.gle/2dY6E1eQDhXFaX4N8";

const TrainingCard = ({ program, delay = 0 }: TrainingCardProps) => {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="glass-card h-full p-6 overflow-hidden transition-all duration-300 hover:border-primary/50">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
            {program.level}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {program.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {program.description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{program.students}+ enrolled</span>
          </div>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {program.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-bold text-primary">{program.price}</span>
            <span className="text-sm text-muted-foreground ml-1">RWF</span>
          </div>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Enroll Now
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingCard;
