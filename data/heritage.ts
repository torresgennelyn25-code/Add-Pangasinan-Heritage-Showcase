export type Heritage = {
  name: string; location: string; category: string; description: string;
  image: string; accent: string;
};

export const heritageSites: Heritage[] = [
  {
    name: "Hundred Islands",
    location: "Alaminos City",
    category: "Nature & Adventure",
    description: "A celebrated island landscape known for limestone formations, clear waters, and island-hopping experiences.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=75",
    accent: "Explore the islands"
  },
  {
    name: "Bolinao Lighthouse",
    location: "Bolinao",
    category: "Heritage Landmark",
    description: "A historic coastal landmark overlooking the western Pangasinan shoreline and surrounding seascape.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=75",
    accent: "Discover the coast"
  },
  {
    name: "Balungao Hot Spring",
    location: "Balungao",
    category: "Wellness & Nature",
    description: "A natural destination associated with warm waters, scenic surroundings, and relaxing outdoor experiences.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=75",
    accent: "Experience Balungao"
  }
];
