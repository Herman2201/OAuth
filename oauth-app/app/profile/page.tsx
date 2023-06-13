'use client';
import { useSession } from 'next-auth/react';
import Loading from '../components/loading';
import React from 'react';
import CardUser from './CardUser';


export default () => {
  const { data: session } = useSession();
  
  return (
    <section className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">
      {session?.user ? <CardUser user={session.user} /> : <Loading />}
    </section>
  );
};
