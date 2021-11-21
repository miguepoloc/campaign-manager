import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import dateformat from "dateformat"

export default function Home({ data, error }) {

  useEffect(() => {
    console.log(`process.env.NEXT_PUBLIC_BASE_URL`, process.env.NEXT_PUBLIC_BASE_URL)
  }, [])

  return (
    <div>

      <Head>
        <title>Administrador de campaña: Home</title>
        <meta name="description" content="Un sitio de campañas"></meta>
      </Head>

      <main className={styles.main}>

        <div className={styles.innerContent}>
          <h1>Campañas disponibles</h1>
          {error && <p>{JSON.stringify(error)}</p>}
          {data.map((element) => <div key={element.slug}>

            <div className={styles.item}>
              <div className={styles.imgContainer}>
                <Image className={styles.img} src={"https://res.cloudinary.com/djw2ks8ek/" + element.logo} height={120} width={120} alt="Campaña banner" />
              </div>

              <div className={styles.rightItems}>
                <h1>{element.title}</h1>
                <p>{element.description} </p>
                <small>{dateformat(new Date(element.created_at), "dddd, mmmm, dS, yyyy, h:MM:ss TT")} </small>
              </div>
            </div>

          </div>)}
        </div>

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