import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import emailjs from 'emailjs-com';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  
  
  const onSubmit = async (data: ContactFormData) => {
  setIsSubmitting(true);

  const currentTime = new Date().toLocaleString();

  try {
    // 1️⃣ Send email to admin
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        phone: data.phone || 'N/A',
        subject: data.subject,
        message: data.message,
        time: currentTime,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // ✅ Success toast
    toast({
      title: 'Message Sent Successfully!',
      description: "We'll get back to you within 24 hours.",
    });

    reset();

    // 🔄 Smooth auto-refresh after user sees toast
    setTimeout(() => {
      window.location.reload();
    }, 2500);

    // 2️⃣ Auto-reply (non-blocking)
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).catch(() => {});

  } catch (error) {
    toast({
      title: 'Failed to send message',
      description: 'Please try again later.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card p-6 md:p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            {...register('name')}
            placeholder="John Doe"
            className="bg-secondary/50 border-border focus:border-primary"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="claude@example.com"
            className="bg-secondary/50 border-border focus:border-primary"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            {...register('phone')}
            placeholder="+250 722 294 954"
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <Input
            id="subject"
            {...register('subject')}
            placeholder="Project Inquiry"
            className="bg-secondary/50 border-border focus:border-primary"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us about your project or inquiry..."
          rows={6}
          className="bg-secondary/50 border-border focus:border-primary resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our Privacy Policy and Terms of Service.
      </p>
    </motion.form>
  );
};

export default ContactForm;
