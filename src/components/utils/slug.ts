export const slugify = (text: string): string =>
  text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

export const deslugify = (slug: string): string => {
  const mapping: { [key: string]: string } = {
    "computer-and-laptop": "Computer & Laptop",
    "computer-accessories": "Computer Accessories",
    "smart-phones": "Smart Phones",
    headphone: "HeadPhone",
    "mobile-accessories": "Mobile Accessories",
    "gaming-console": "Gaming Console",
    "camera-and-photo": "Camera & Photo",
    "tv-and-home-appliances": "TV & Home Appliances",
    "watch-and-accessories": "Watch & Accessories",
    "gps-and-navigation": "GPS & Navigation",
    "wearable-technology": "Wearable Technology",
  };

  return mapping[slug] || slug.replace(/-/g, " ");
};
