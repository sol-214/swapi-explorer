import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Card from '@/components/Card/Card';
import { Res, Person } from '@/types';

const API_BASE = 'https://swapi.dev/api';

export default function IndexPage({ data }: { data: Res<Person[]> }) {
  return (
    <>
      <Head>
        <title>SwapiExplorer</title>
      </Head>
      <ul className="grid grid-cols-4 gap-4">
        {data.results.map((person) => (
          <li key={person.name}>
            <Card {...person} />
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get<Res<Person[]>>(`${API_BASE}/people`);

    return {
      props: { data },
    };
  } catch (e) {
    console.error(e);
  }
}
