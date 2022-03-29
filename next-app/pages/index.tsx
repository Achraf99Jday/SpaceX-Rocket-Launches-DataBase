import {gql, useQuery} from "@apollo/client";
import type {GetStaticProps, NextPage} from "next";
import HomePageHead from "../components/head/homePageHead";
import {initializeApollo} from "../lib/apolloClient";
import styles from "../styles/Home.module.css";
import { getLaunches } from '../pages/utils'
import Card from '../components/Card'


const EXEMPLE_QUERY = gql`
  query exempleQuery {
    launchesPast {
      mission_name
    }
  }
`;

const Home = ({launches}) =>
{
  return (
    <div className={styles.container}>
      <HomePageHead />
      {/* Your code goes here */
      <>
      	 <h1 className="text-center text-white text-8xl p-5 font-barcode">Rocket Launches Data Base</h1>
        <h2 className="text-center font-goldman text-white text-4xl p-5">Example Launches</h2>
        <div className="flex flex-wrap gap-x-4">
          {launches.map((launch, index) => (<Card key={index} document={launch} />))}
        </div>
       </>
      
      }
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  let launches = await getLaunches();
  launches = launches.slice(0,20)

  await apolloClient.query({query: EXEMPLE_QUERY});

  return {
    props: {launches},
  };
};

export default Home;
