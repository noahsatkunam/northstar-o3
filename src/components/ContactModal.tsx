import { createContext, useContext, useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-lg overflow-y-auto border-none bg-transparent p-0 shadow-none sm:max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/92 p-6 shadow-[0_34px_90px_-42px_hsl(var(--foreground)/0.95)] backdrop-blur-xl sm:p-10">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/18 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-accent/16 blur-3xl" />
            
            <div className="relative z-10">
              <DialogHeader className="text-center sm:text-center">
                <DialogTitle className="text-3xl font-bold tracking-tight text-foreground">
                  Let's Talk
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Tell us about your needs and we'll get back to you within one business day
                </DialogDescription>
              </DialogHeader>

              {/* Contact Form */}
              <div className="mt-8">
                <ContactForm 
                  source="contact-modal"
                  onSuccess={closeModal}
                />
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 border-t border-border/70 pt-6">
                <p className="text-center text-sm font-medium text-foreground">
                  Prefer to reach out directly?
                </p>
                <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
                  <a
                    href="tel:+1-866-337-9096"
                    className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                    866-337-9096
                  </a>
                  <a
                    href="mailto:info@northstar-tg.com"
                    className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                    info@northstar-tg.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ContactModalContext.Provider>
  );
}
