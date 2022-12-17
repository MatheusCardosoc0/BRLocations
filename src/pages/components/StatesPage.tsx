import React from 'react'
import { NameStates } from '../../constants/NameStates'
import { useDataContext } from '../../context/UseDataContext'
import CardState from '../../utils/CardState'
import { addBannerUrl } from '../../utils/GetBanner'

const StatesPage = () => {

  const { states, selectedMunicipios } = useDataContext()




  return (
    <main className='section grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-20'>

      {states.map(state => (
        <CardState state={state} selectedMunicipios={selectedMunicipios} />

      ))}

    </main>
  )
}

export default StatesPage