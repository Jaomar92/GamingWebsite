export interface ApiResponse<T> {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}
