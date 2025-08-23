import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .regex(/^\d{10}$/, "Please enter a correct 10-digit phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbw61lUI-aoBx2d8YCk6cSrwy6c1KQLqtEWyXNodFf4SxZUAyTK7S_PS43Bq0V1Hy-Rl/exec", {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsSubmitted(true);

    toast({
      title: "Message Sent!",
      description: "Your details have been saved to Google Sheets.",
    });

    form.reset();

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);

  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  }
};

  if (isSubmitted) {
    return (
      <section className="py-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest to-primary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-0 shadow-luxury rounded-2xl overflow-hidden animate-fade-in">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="font-fraunces text-2xl font-semibold text-primary mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground text-lg">
                  Thank you for contacting us! We'll get back to you soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest to-primary opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-accent mr-3" />
              <h2 className="font-fraunces text-4xl md:text-5xl font-semibold text-white">
                Get in Touch
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              We'd love to help you plan your perfect event.
            </p>
          </div>

          <Card className="bg-card border-0 shadow-luxury rounded-2xl overflow-hidden animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              className="bg-background border-input focus:border-primary focus:ring-primary rounded-lg h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              className="bg-background border-input focus:border-primary focus:ring-primary rounded-lg h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Enter your phone number"
                              className="bg-background border-input focus:border-primary focus:ring-primary rounded-lg h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Event Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-input focus:border-primary focus:ring-primary rounded-lg h-12">
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-popover border-input">
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="family">Family Celebration</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your event requirements..."
                            className="bg-background border-input focus:border-primary focus:ring-primary rounded-lg min-h-32 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;