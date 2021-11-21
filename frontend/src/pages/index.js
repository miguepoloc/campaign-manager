import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';

export default function Home({ data, error }) {

  console.log("Data: >>", data);
  console.log("Error: >>", error);

  useEffect(() => {
    console.log(`process.env.NEXT_PUBLIC_BASE_URL`, process.env.NEXT_PUBLIC_BASE_URL)
  }, [])

  return (
    <div>
      <main>
        <h1>Campañas disponibles</h1>
        {error && <p>{JSON.stringify(error)}</p>}
        {data.map((element) => <div key={element.slug}>
          <div>
            <div>
              <Image src={"https://res.cloudinary.com/djw2ks8ek/" + element.logo} height={120} width={120} alt="Campaña banner" />
            </div>
            <div>
              <h1>{element.title}</h1>
              <p>{element.description} </p>
              <p>{element.created_at} </p>
            </div>
          </div>

        </div>)}
        <p> Nueva fuente</p>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  let data = [];
  let error = null;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/campaigns`)
    data = await response.json()
  } catch (err) {
    console.log("err =>: ", err);
    error = err.message ? err.message : "Pasó algo malo"
  }
  return {
    props: {
      data,
      error,
    }
  }
}