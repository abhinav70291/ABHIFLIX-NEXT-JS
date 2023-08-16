
import React from 'react'
import Link from 'next/link'
import Moviecard from '../components/moviecard';
import styles from "../styles/common.module.css"


const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const url =process.env.RAPID_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '96cf889413mshb5c85582799babfp1e3cb9jsnb2c5b05edbca',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const data= await response.json();
  const main_data=data.titles;

  console.log(data);



  return (
    <>
      <section className={`${styles.movieSection}`}>
          <div className={styles.container}>
            <h1>Series & Movies </h1>
            <div className={styles.card_section}>

            
              {
                main_data.map((curElem)=>
                { return <Moviecard key={curElem.id} {...curElem} />})
              }
            </div>
          </div>
      </section>
    </>
  )
}

export default Movie
