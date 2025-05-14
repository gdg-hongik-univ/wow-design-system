import { environment } from "@constants/environment";

export const PRODUCTION_URL =
  environment.APP_URL || "https://wow-design-system-wow-docs.vercel.app";

export const basePaths = {
  component: "/component",
  foundation: "/foundation",
};

export const foundationPaths = {
  color: "color",
  typography: "typography",
  grid: "grid",
  spacing: "spacing",
  icon: "icon",
  graphic: "graphic",
};

export const componentPaths = {
  actionsheet: "actionsheet",
  avatar: "avatar",
  box: "box",
  button: "button",
  checkbox: "checkbox",
  chip: "chip",
  divider: "divider",
  dropdown: "dropdown",
  header: "header",
  pagination: "pagination",
  picker: "picker",
  radiobutton: "radiobutton",
  searchBar: "searchbar",
  spinner: "spinner",
  stepper: "stepper",
  switch: "switch",
  table: "table",
  tabBar: "tabbar",
  tag: "tag",
  textButton: "textbutton",
  textField: "textfield",
  toast: "toast",
};
type RoutePath = {
  overview: string;
  foundation: {
    base: string;
    color: string;
    typography: string;
    grid: string;
    spacing: string;
    icon: string;
    graphic: string;
  };
  component: {
    base: string;
    actionsheet: string;
    avatar: string;
    box: string;
    button: string;
    checkbox: string;
    chip: string;
    divider: string;
    dropdown: string;
    header: string;
    pagination: string;
    picker: string;
    radiobutton: string;
    searchBar: string;
    spinner: string;
    stepper: string;
    switch: string;
    table: string;
    tabBar: string;
    tag: string;
    textButton: string;
    textField: string;
    toast: string;
  };
};

export const routePath: RoutePath = {
  overview: "/overview",
  foundation: {
    base: basePaths.foundation,
    ...(Object.fromEntries(
      Object.entries(foundationPaths).map(([key, value]) => [
        key,
        `${basePaths.foundation}/${value}`,
      ])
    ) as Record<keyof typeof foundationPaths, string>),
  },
  component: {
    base: basePaths.component,
    ...(Object.fromEntries(
      Object.entries(componentPaths).map(([key, value]) => [
        key,
        `${basePaths.component}/${value}`,
      ])
    ) as Record<keyof typeof componentPaths, string>),
  },
};
