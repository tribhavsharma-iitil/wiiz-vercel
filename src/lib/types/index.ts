export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface CallToAction {
  readonly label: string;
  readonly href: string;
}

export type MetricIconName = "chart-line" | "server" | "map" | "zap";

export interface MetricItem {
  readonly id: string;
  readonly icon: MetricIconName;
  readonly value: string;
  readonly label: string;
}

export interface TrustPoint {
  readonly id: string;
  readonly label: string;
}

export interface ServiceImage {
  readonly src: string;
  readonly alt: string;
  readonly blurDataURL: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly highlight: string;
  readonly image: ServiceImage;
}

export interface SolutionStat {
  readonly value: string;
  readonly label: string;
}

export interface SolutionItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly liveLabel: string;
  readonly stats: readonly SolutionStat[];
}

export interface PartnerLogo {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

export interface DiagramCard {
  readonly title: string;
  readonly capabilities: readonly string[];
  readonly variant: "primary" | "secondary";
}

export interface FooterLinkColumn {
  readonly title: string;
  readonly links: readonly NavLink[];
}

export interface ContactFormField {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly placeholder: string;
  readonly type: "text" | "email" | "textarea";
  readonly autoComplete?: string;
}
