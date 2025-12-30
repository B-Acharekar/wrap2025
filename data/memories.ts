type Memory = {
  id: string;
  date: string; // YYYY-MM-DD
  images: string[]; // array of image URLs
  description?: string; // optional caption
  sharedBy: string; // friend who added it
};


export const memories = [
  {
    title: "Late Night Chaos",
    images: ["/img/1.jpg", "/img/2.jpg"],
    caption: "Sleep was optional."
  },
  {
    title: "Trips & Random Plans",
    images: ["/img/3.jpg", "/img/4.jpg"],
    caption: "Zero planning, max memories."
  }
];
