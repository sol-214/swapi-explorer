import React from 'react';
import Link from 'next/link';
import { Person } from '@/types';
import * as Strings from '@/services/Strings';

const IMG_URL = 'https://picsum.photos/400/400';

export default function Card({ name, url }: Person) {
  const id = React.useMemo(() => Strings.getId(url), [url]);

  return (
    <Link
      href={`/people/${id}`}
      className="block border-2 border-neutral-200 hover:border-white hover:bg-white w-full rounded-lg p-6 mb-4"
    >
      <figure className="flex gap-2 flex-col justify-stretch">
        <figcaption className="font-semibold text-lg">{name}</figcaption>
        <img src={`${IMG_URL}/?random=${id}`} alt="" />
      </figure>
    </Link>
  );
}
