declare module "react-slick" {
    import { Component } from "react";
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      arrows?: boolean;
      adaptiveHeight?: boolean;
      autoplaySpeed?: number;
      cssEase?: string;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
      [key: string]: any;
    }
  
    export default class Slider extends Component<Settings> {}
  }
  