import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { useDataContext } from '../../context/UseDataContext'

const Navbar = () => {

  const {isFilterActivate, setIsFilterActivate} = useDataContext()

  const router = useRouter()

  const navInitial = router.pathname


  return (
    <nav className='w-full lg:max-w-[1248px] fixed top-0 shadow-[1px_8px_200px_yellow] z-10'>

      <div className='bg-gray-100 p-4 flex justify-between'>
        <p className='uppercase text-2xl font-bold '>Locations
          <b className='bg-gradient-to-tr from-green-400 to-yellow-500 bg-clip-text text-transparent text-3xl'>BR</b>
        </p>

        <Link href={navInitial != '/'? '/' : '/components/StatesPage'} className='flex items-center gap-1 bg-gradient-to-tr from-yellow-500 to-green-500 p-1 rounded-xl text-white drop-shadow-[1px_1px_black] '
        onClick={() => setIsFilterActivate((prevIsFilter: boolean) => !prevIsFilter)}>
          <AiFillEye className='text-white text-xl' />
          <p className='drop-shadow-[1px_1px_black] font-bold'>
            {isFilterActivate? 'Mapa': 'Todos os estados'}
          </p>
        </Link>

      </div>
    </nav>
  )
}

export default Navbar