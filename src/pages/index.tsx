import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDataContext } from '../context/UseDataContext'
import Country from './components/Country'

const Home: NextPage = () => {
  return <Country />
}

export default Home
