type Colors = {
  [key: string]: string;
};

type Fonts = {
  [key: string]: {
    font: string;
    color: string;
  };
};

type Defaults = {
  [key: string]: string;
};

interface Themes {
  colors: Colors;
  fonts: Fonts;
  defaults: Defaults;
}

const colors: Colors = {
  black: "#000000",
  blue: "#4DA6B3",
  darkblue: "#4DA6C4",
  darkgray: "#DBDBDB",
  darkgreen: "#5DD190",
  darkred: "#D24F4F",
  darkergray: "#848484",
  gray: "#E4E4E4",
  green: "#5DE290",
  lightgray: "#F4F4F4",
  lightergray: "#F7F7F7",
  red: "#E34F4F",
  white: "#ffffff",
};

const fonts: Fonts = {
  roboto14: {
    font: "14px Roboto, sans-serif",
    color: colors.darkergray,
  },
  roboto16: {
    font: "16px Roboto, sans-serif",
    color: colors.darkergray,
  },
  roboto14w: {
    font: "14px Roboto, sans-serif",
    color: colors.white,
  },
  robotoM60: {
    font: "500 60px Roboto, sans-serif",
    color: colors.darkergray,
  },
  roboto24: {
    font: "24px Roboto, sans-serif",
    color: colors.darkergray,
  },
  robotoL24: {
    font: "200 24px Roboto, sans-serif",
    color: colors.darkergray,
  },
  roboto14u: {
    font: "200 24px Roboto, sans-serif",
    color: colors.blue,
  },
};

const defaults: Defaults = {
  borders: colors.darkgray,
  text: colors.darkergray,
};

export const theme: Themes = {
  colors,
  fonts,
  defaults,
};
