"use client"
import Image from 'next/image'
import styles from './page.module.css'
import getPrice from '@/utils/getPrice'
import { useState, useEffect } from 'react';

export default function Home() {
  
  const [parameters, setParameters] = useState({
    cost: 0,
    freightRate: 0,
    taxes: 0.09,
    comission: 0.1,
    margin: 0,
  });

  const [price, setPrice] = useState(0)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setParameters({...parameters, [name]: value})
  }

  useEffect (() => {
    const {cost, freightRate, taxes, comission, margin} = parameters;
    const finalPrice = getPrice(Number(cost), Number(freightRate), Number(margin), Number(taxes), Number(comission));
    const formatPrice = finalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    setPrice(formatPrice)
  }, [parameters])
  
  return (
    <>

        <header>
          <img src="/images/logo_martins.svg" />
          <h1 className='title'>Calculadora de Preços - Martins</h1>
        </header>
      
      <main>
        
        <div className='inputCtr'>
          <label>Custo do Produto</label>
          <input name="cost" type="number" value={parameters.cost} onChange={handleInputChange}/>
        </div>

        <div className='inputCtr'>
          <label>% de Frete</label>
          <input name="freightRate" type="number" value={parameters.freightRate} onChange={handleInputChange}/>
        </div>

        <div className='inputCtr'>
          <label>% Impostos </label>
          <input name="taxes" type="number" value={parameters.taxes} onChange={handleInputChange} defaultValue={0.09}/>
        </div>

        <div className='inputCtr'>
          <label>% Comissão </label>
          <input name="comission" type="number" value={parameters.comission} onChange={handleInputChange} defaultValue={0.1}/>
        </div>

        <div className='inputCtr'>
          <label>% Margem </label>
          <input name="margin" type="number" value={parameters.margin} onChange={handleInputChange} defaultValue={0.15}/>
        </div>

        <div className='inputCtr'>
          <label>Preço Sugerido </label>
          <input name="price" type="text" value={price} disabled/>
        </div>
        
      </main>
    </>
  )
}
