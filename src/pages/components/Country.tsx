import React from 'react'
import Button from '../../utils/Button'
import {GrTooltip} from 'react-icons/gr'

const Country = () => {


  const project = 'https://seeklogo.com/images/M/mapa-do-brasil-logo-326E889CA5-seeklogo.com.png'

  return (
    <section className='section flex justify-center flex-col'>

      <h2 className='relative left-3 top-0 bg-gray-200 w-[300px] rounded-lg p-1 flex items-center gap-2 mx-auto sm:mx-[0]'>
        <GrTooltip className='text-4xl' />
        Selecione uma região e veja os estados que nela pertence.</h2>

      <div className='w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url(${project})`,
        }}
      >


        <Button className='relative top-[30%] left-[20%]' text='Norte'/>
        <Button className='relative top-[80%] left-[38%]'  text='Sul'/>
        <Button className='relative top-[60%] md:left-[28%] left-[10%]' text='Centro-Oeste'/>
        <Button className='relative top-[40%] md:left-[38%] left-[20%]' text='Nordeste'/>
        <Button className='relative top-[60%] md:left-[28%]' text='Sudeste' />
      </div>
    </section>
  )
}

export default Country