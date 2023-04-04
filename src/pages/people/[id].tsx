import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Person, Homeworld } from '@/types';
import { GetServerSidePropsContext } from 'next';
import * as Strings from '@/services/Strings';
import Link from 'next/link';

const IMG_URL = 'https://picsum.photos/200/200';
const API_BASE = 'https://swapi.dev/api';

export default function PersonPage({ person, homeworld }: { person: Person, homeworld: Homeworld }) {
  const datePersonCreated = React.useMemo(() => Strings.formatDate(person.created), [person.created]);
  const homeworldPopulation = React.useMemo(() => Strings.formatNumber(homeworld.population), [homeworld.population]);
  const homeworldDiameter = React.useMemo(() => Strings.formatNumber(homeworld.diameter), [homeworld.diameter]);

  return (
    <>
      <Head>
        <title>Person | SwapiDataExplorer</title>
      </Head>
      <Link href="/" className="inline-block p-2 pl-0">← Back</Link>
      <figure className="flex flex-row items-start gap-8 w-max mx-auto mt-2">
        <div>
          <h1 className="text-4xl font-semibold">{person.name}</h1>
          <dl className="grid grid-cols-2 gap-4 mt-4">
            <dt>Created</dt>
            <dd title={person.created}>{datePersonCreated}</dd>
            <dt>Height</dt>
            <dd>{person.height}cm</dd>
            <dt>Mass</dt>
            <dd>{person.mass}kg</dd>
            <dt>Born</dt>
            <dd>{person.birth_year}</dd>
          </dl>

          <h2 className="text-2xl font-semibold mt-8">Homeworld: {homeworld.name}</h2>
          <dl className="grid grid-cols-2 gap-4 mt-4">
            <dt>Diameter</dt>
            <dd>{homeworldDiameter}</dd>
            <dt>Climate</dt>
            <dd>{homeworld.climate}</dd>
            <dt>Terrain</dt>
            <dd>{homeworld.terrain}</dd>
            <dt>Population</dt>
            <dd>{homeworldPopulation}</dd>
          </dl>
        </div>
        <img src={IMG_URL} className="rounded-lg" alt="" />
      </figure>
    </>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { data: person }  = await axios.get<Person>(`${API_BASE}/people/${query.id}`);

  const { data: homeworld } = await axios.get<Homeworld>(`${person.homeworld}`);

  return {
    props: { person, homeworld },
  };
}
