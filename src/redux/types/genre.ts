import { Game } from "./sharedInterfaces";

export interface ApiResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}
