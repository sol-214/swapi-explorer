export type Person = Item<{
  name: string;
	height: string;
	mass: string;
	birth_year: string;
	homeworld: string;
}>;

export type Homeworld = Item<{
  name: string;
  diameter: string;
  climate: string;
  terrain: string;
  population: string;
}>;

export type Res<t> = {
  count?: number;
  next?: string;
  previous?: string;
  results: t
};

export type Item<t> = {
  created: string;
  edited: string;
  url: string;
} & t;
