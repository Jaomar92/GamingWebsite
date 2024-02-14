export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Filters;
  nofollow_collections: string[];
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number | null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: PlatformDetail[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: GameStore[];
  clip: null;
  tags: Tag[];
  esrb_rating: EsrbRating;
  short_screenshots: Screenshot[];
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface PlatformDetail {
  platform: Platform;
  released_at: string;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: null | string;
  year_end: null | number;
  year_start: null | number;
  games_count: number;
  image_background: string;
}

export interface Requirements {
  minimum: string;
  recommended?: string;
}

export interface ParentPlatform {
  platform: ParentPlatformDetail;
}

export interface ParentPlatformDetail {
  id: number;
  name: string;
  slug: string;
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface GameStore {
  id: number;
  store: StoreDetail;
}

export interface StoreDetail {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface Filters {
  years: YearFilter[];
}
export interface YearDetail {
  year: number;
  count: number;
  nofollow: boolean;
}

export interface YearFilter {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: YearDetail[];
  nofollow: boolean;
  count: number;
}
