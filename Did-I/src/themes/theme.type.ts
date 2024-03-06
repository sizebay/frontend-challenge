export interface ThemeType {
  colors: {
    grayLight: string;
    whiteBasic: string;
    whiteAlmostGray: string;
    whiteALittleMoreStrength: string;
    grayToolTip: string;
    grayMiddle: string;
    gray: string;
    grayBackgroundItem: string;
    greenTaskBar: string;
    greenAddItem: string;
    grayBackgroundButton: string;
    redExcludeButton: string;
  };
  font: {
    Regular: string;
    Medium: string;
    Light: string;
  };
  fontSizes: {
    Regular14: string;
    Regular24: string;
    Medium60: string;
    Light24: string;
  };
  breakPoints: {
    Mobile: number;
    Tablets: number;
  };
}
