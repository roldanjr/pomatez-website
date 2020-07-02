type LinkProps = {
  label: string;
  link: string;
  offset?: number;
};

export const navLinks: LinkProps[] = [
  { label: "App's Features", link: "app-features", offset: -24 },
  { label: "How It Works", link: "how-it-works", offset: -24 },
  { label: "Road Map", link: "road-map", offset: -24 },
  {
    label: "Released Notes",
    link:
      "https://github.com/roldanjrCodeArts9711/productivity-timer/releases/latest",
  },
];
