import React, { useEffect, useState } from 'react'
import { useGetTopExchangesQuery } from '../services/cryptoExchanges'
import { Avatar, Col, Collapse, Input, Row, Typography } from 'antd'
import Loader from './Loader'
import millify from 'millify'

const {Text}=Typography
const {Panel}=Collapse
const Exchanges = () => {

  const {data:cryptoExcange,isFetching,error}=useGetTopExchangesQuery()
 
  
  
  const [cryptoexchangelist,setCryptoexchangelist]=useState([])
  const [searchTerm,setSearchTerm]=useState('')


  useEffect(()=>{

    const filteredexchange=cryptoExcange?.filter((exchange)=>exchange.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptoexchangelist(filteredexchange)

  },[cryptoExcange,searchTerm])

  if(isFetching) return <Loader/>

  console.log(cryptoexchangelist)

  
  return (
    <>
    <div className='search-crypto'>
      <Input placeholder='Search Exchanges' onChange={(e)=>setSearchTerm(e.target.value)} />

    </div>

    

      <Row className='text-center font-bold text-sky-600 text-2xl mb-2'>
      <Col span={5}>Rank</Col>
      <Col span={7}>Exchange</Col>
      <Col span={5}>TrustScore</Col>
      <Col span={6}>24h Volume (BTC)</Col>
      </Row>

      <Row>
        {
          cryptoexchangelist?.map((exchange)=>(
            <Col span={24}>
              <Collapse>
                <Panel
                  key={exchange.id}
                  showArrow={false}
                  header={(
                    <Row key={exchange.id}>
                      <Col span={5} className='text-center'><Text><strong>{exchange.trust_score_rank}</strong></Text></Col>
                      <Col span={7} className='text-center'>
                        <div className='flex justify-center gap-3'>

                        <Text><strong><a href={exchange.url} target='_blank' rel="noreferrer">{exchange.name}</a></strong></Text>

                        
                        

                        </div>
                                              
                      </Col>
                      <Col span={5} className='text-center'><Text><strong>{exchange.trust_score}</strong></Text></Col>
                      
                      <Col span={6} className='text-center'><Text><strong>{millify(exchange.trade_volume_24h_btc)}</strong></Text></Col>




                      
                    </Row>
                  )}>

                    <div className='flex flex-col gap-5'>

                      <p>
                        {exchange.description}
                      </p>
                      
                      <div className='flex justify-between'>
                        <p>Country: {exchange.country}</p>
                        <img src={exchange.image} className='w-7 h-7 rounded-full'/>
                        <p>Year Established: {exchange.year_established}</p>
                      </div>

                    </div>

                    


                  </Panel>
              </Collapse>
            </Col>
          ))
        }
      </Row>


    

    
    </>
  )
}

export default Exchanges
