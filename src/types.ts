export interface NavItemProps{
    tab: string
}

export interface CardProps {
  imageArray: string[];
}

export interface SectionProps {
  tittle: string;
  link: string;
}
export interface FooterArrayPops {
  tittle: string;
  section: SectionProps[];
}

export interface ProductCardProps {
  images: string[];
  location: string;
  host: string;
  available: string;
  price: string;
  rating: string;
}
