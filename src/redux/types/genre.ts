// genre.ts
import { ApiResponse, GenreBasic, GameBasic } from "./sharedInterfaces";

export interface GenreDetailed extends GenreBasic {
  games: GameBasic[];
}

export type GenreApiResponse = ApiResponse<GenreDetailed>;
