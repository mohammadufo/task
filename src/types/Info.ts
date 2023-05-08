export type Location = {
  name: string;
  url: string;
};

export type Origin = {
  name: string;
  url: string;
};

export type Info = {
  count?: string;
  next?: string;
  pages?: number;
  prev?: any;
};

export type Results = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  origin: Origin;
  name: string;
  species: string;
  status: string;
  type: string;
  url: string;
};
