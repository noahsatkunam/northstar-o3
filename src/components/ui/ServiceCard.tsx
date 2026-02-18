import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide icon component to display */
  icon: LucideIcon;
  /** Service title */
  title: string;
  /** Service description */
  description: string;
  /** Link URL (optional - renders link when provided) */
  href?: string;
  /** Call-to-action text */
  ctaText?: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, icon: Icon, title, description, href, ctaText = "Learn more", ...props }, ref) => {
    const ctaContent = (
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80">
        {ctaText}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" />
      </span>
    );

    return (
      <div
        ref={ref}
        className={cn(
          "group rounded-2xl border border-border/70 bg-card/85 p-7 shadow-soft transition-all duration-DEFAULT",
          "hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated",
          className
        )}
        {...props}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-transform duration-fast group-hover:scale-105 group-hover:bg-primary/15">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-6 text-lg font-semibold text-card-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {href ? (
          <Link to={href}>
            {ctaContent}
          </Link>
        ) : (
          ctaContent
        )}
      </div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
