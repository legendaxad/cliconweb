const mockData: Record<
  string,
  { title: string; description: string; price: string }[]
> = {
  "Computer & Laptop": [
    {
      title: "MacBook Pro",
      description: "High-performance laptop from Apple",
      price: "$1,999",
    },
    {
      title: "Dell XPS 15",
      description: "Premium Windows laptop",
      price: "$1,799",
    },
    {
      title: "HP Spectre x360",
      description: "Convertible ultrabook with touchscreen",
      price: "$1,499",
    },
  ],
  "Computer Accessories": [
    {
      title: "Mechanical Keyboard",
      description: "RGB gaming keyboard",
      price: "$99",
    },
    {
      title: "Wireless Mouse",
      description: "Ergonomic and smooth",
      price: "$49",
    },
    {
      title: "Monitor Stand",
      description: "Adjustable stand for better posture",
      price: "$29",
    },
  ],
  "Smart Phones": [
    {
      title: "iPhone 15 Pro",
      description: "Flagship Apple smartphone",
      price: "$1,099",
    },
    {
      title: "Samsung Galaxy S24",
      description: "Latest Android device",
      price: "$999",
    },
    {
      title: "Google Pixel 8",
      description: "Stock Android experience with best camera",
      price: "$899",
    },
  ],
  HeadPhone: [
    {
      title: "Sony WH-1000XM5",
      description: "Best noise-canceling headphones",
      price: "$399",
    },
    {
      title: "AirPods Pro",
      description: "Wireless earbuds by Apple",
      price: "$249",
    },
    {
      title: "Bose QuietComfort 45",
      description: "Premium noise-canceling headset",
      price: "$329",
    },
  ],
  "Mobile Accessories": [
    {
      title: "Fast Charger",
      description: "Supports 100W fast charging",
      price: "$39",
    },
    {
      title: "Phone Case",
      description: "Shockproof and stylish",
      price: "$19",
    },
    {
      title: "Wireless Power Bank",
      description: "Portable and fast charging",
      price: "$59",
    },
  ],
  "Gaming Console": [
    {
      title: "PlayStation 5",
      description: "Next-gen console with 4K gaming",
      price: "$499",
    },
    {
      title: "Xbox Series X",
      description: "Most powerful Xbox console",
      price: "$499",
    },
    {
      title: "Nintendo Switch OLED",
      description: "Portable and docked gaming",
      price: "$349",
    },
  ],
  "Camera & Photo": [
    {
      title: "Canon EOS R5",
      description: "Professional mirrorless camera",
      price: "$3,899",
    },
    {
      title: "Sony A7 IV",
      description: "Best hybrid camera for video & photo",
      price: "$2,499",
    },
    {
      title: "DJI Mini 3 Pro",
      description: "Compact drone with 4K video",
      price: "$799",
    },
  ],
  "TV & Home Appliances": [
    {
      title: "Samsung QLED TV",
      description: "4K Smart TV with HDR",
      price: "$1,299",
    },
    {
      title: "LG OLED C2",
      description: "Best OLED TV for movies & gaming",
      price: "$1,799",
    },
    {
      title: "Dyson Air Purifier",
      description: "Smart air purification system",
      price: "$599",
    },
  ],
  "Watch & Accessories": [
    {
      title: "Apple Watch Series 9",
      description: "Advanced health tracking & fitness",
      price: "$499",
    },
    {
      title: "Samsung Galaxy Watch 6",
      description: "Premium smartwatch for Android",
      price: "$399",
    },
    {
      title: "Garmin Fenix 7",
      description: "Best GPS watch for athletes",
      price: "$699",
    },
  ],
  "GPS & Navigation": [
    {
      title: "Garmin DriveSmart 65",
      description: "Best GPS for road trips",
      price: "$249",
    },
    {
      title: "TomTom GO Supreme",
      description: "High-end GPS with traffic updates",
      price: "$299",
    },
    {
      title: "Garmin eTrex 32x",
      description: "Handheld GPS for outdoor adventures",
      price: "$199",
    },
  ],
  "Wearable Technology": [
    {
      title: "Meta Quest 3",
      description: "Next-gen VR headset",
      price: "$499",
    },
    {
      title: "Oura Ring",
      description: "Smart ring for health tracking",
      price: "$299",
    },
    {
      title: "Google Glass Enterprise",
      description: "AR glasses for professionals",
      price: "$999",
    },
  ],
};

export { mockData };
