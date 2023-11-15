import '@rneui/themed';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

type ToneLevel =
  | 0
  | 50
  | 100
  | 150
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000;

type GreyColors = {
  [key in ToneLevel]: string;
};

declare module '@rneui/themed' {
  export interface Colors {
    greys: GreyColors;
    base: {
      bg: string;
      bgAlternate: string;
      bgEmphasized: string;
    };
    surface: {
      card: string;
      cardHovered: string;
      floating: string;
      floatingHovered: string;
    };
    border: {
      separator: string;
      separatorEmphasized: string;
      interactiveHovered: string;
      interactive: string;
      emphasized: string;
    };
    controls: {
      primary: string;
      primaryHovered: string;
      secondary: string;
      secondaryHovered: string;
      danger: string;
      dangerHovered: string;
    };
    elements: {
      lowEm: string;
      midEm: string;
      highEm: string;
      disabled: string;
      tagTransparent: string;
    };
    greyOverlap: string;
  }
}
