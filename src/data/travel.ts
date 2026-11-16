
export type Place = { coords: [number, number]; text: string; photo: string };
export type Route = { id: string; label: string; color: string; stops: string[] };
  
export const places: Record<string, Place> = {
  Israel: { coords: [32.08, 34.78], text: "Home base: every trip starts and ends here.", photo: "/travel/israel.webp" },
  Thailand: { coords: [13.75, 100.5], text: "Street food and islands.", photo: "/travel/thailand.webp" },
  Cambodia: { coords: [13.36, 103.86], text: "Sunrise at Angkor and Koh Rong.", photo: "/travel/cambodia.webp" },
  Vietnam: { coords: [21.03, 105.85], text: "Motorbikes and coffee.", photo: "/travel/vietnam.webp" },
  Laos: { coords: [19.89, 102.13], text: "Slow rivers, viewpoints.", photo: "/travel/laos.webp" },
  "Sri Lanka": { coords: [6.93, 79.86], text: "Trains through tea hills.", photo: "/travel/sri-lanka.webp" },
  India: { coords: [28.61, 77.21], text: "Chaos, color, spice.", photo: "/travel/india.webp" },
  Switzerland: { coords: [47.38, 8.54], text: "Alps and lakes.", photo: "/travel/switzerland.webp" },
  Germany: { coords: [52.52, 13.4], text: "History and techno.", photo: "/travel/germany.webp" },
  France: { coords: [48.86, 2.35], text: "Old churches.", photo: "/travel/france.webp" },
  Greece: { coords: [37.98, 23.73], text: "Ruins, islands and sunsets.", photo: "/travel/greece.webp" },
  Italy: { coords: [41.9, 12.5], text: "Nature, lakes, repeat.", photo: "/travel/italy.webp" },
};
 
export const routes: Route[] = [
  {
    id: "asia",
    label: "Asia trip",
    color: "#e4572e",
    stops: ["Israel", "Thailand", "Cambodia", "Vietnam", "Laos", "Sri Lanka", "India", "Israel"],
  },
  {
    id: "europe",
    label: "Europe trip",
    color: "#2e86e4",
    stops: ["Israel", "Switzerland", "France", "Germany", "Switzerland", "Israel"],
  },
];
 
// Colour for countries that appear in both trips (Israel)
export const bothColor = "#8e5bd9";
 
// Countries that get a pin and route lines but NO coloured outline (avoids border disputes)
export const uncoloured = ["Israel"];
 
// Individual trips: countries are coloured and get a pin, but no routes are drawn
export const singles = { label: "Individual trips", color: "#2fa36b", countries: ["Greece", "Italy"] };
 