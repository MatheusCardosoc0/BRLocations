import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { useDataContext } from '../../context/UseDataContext'

const Navbar = () => {

  const router = useRouter()

  const navInitial = router.pathname

  const { setSearch, search, states,municipios, setMunicipios, setStates } = useDataContext()

  useEffect(() => {

    if (search.length > 0) {
      
      const dados = new Array

      if(navInitial.includes('/components/states/municipios/')){
        municipios?.map(state => {
          const regra = new RegExp(search, "gi")
          if (regra.test(state.nome)) {
            dados.push(state)
          }
        })
        setMunicipios(dados)
      } else {
        states?.map(state => {
          const regra = new RegExp(search, "gi")
          if (regra.test(state.nome)) {
            dados.push(state)
          }
        })
        setStates(dados)
      }

      
    }
  }, [search])

  console.log(navInitial)


  return (
    <nav className='w-full lg:max-w-[1248px] fixed top-0 shadow-[1px_8px_200px_yellow] z-10'>

      <div className='bg-gray-100 p-4 flex justify-between flex-col items-center gap-4 sm:flex-row sm:gap-0'>
        <p className='uppercase text-2xl font-bold '>Locations
          <b className='bg-gradient-to-tr from-green-400 to-yellow-500 bg-clip-text text-transparent text-3xl'>BR</b>
        </p>

        {navInitial != '/' && (
          <input type={"search"} placeholder="Buscar"
            className='px-2 flex-1 mx-4 '
            onChange={e => setSearch(e.target.value)}
            value={search} />
        )}

        <Link href={navInitial != '/' ? '/' : '/components/StatesPage'} className='flex items-center gap-1 bg-gradient-to-tr from-yellow-500 to-green-500 p-1 rounded-xl text-white drop-shadow-[1px_1px_black] '>
          <AiFillEye className='text-white text-sm sm:text-xl' />
          <p className='drop-shadow-[1px_1px_black] font-bold'>
            {navInitial != '/' ? 'Mapa' : 'Todos os estados'}
          </p>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar