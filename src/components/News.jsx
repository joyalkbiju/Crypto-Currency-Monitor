import { Card, Col, Row, Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loader from './Loader'

const {Text,Title}=Typography
const {Option}=Select

const News = ({simplified}) => {

  const truncateIfLong = (text, limit = 25) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + " ........";
}

 

  const {data:cryptonews,isFetching}=useGetCryptoNewsQuery()
  if(isFetching) return <Loader/>
  const count= simplified? 6: 25
  const limitedNews = cryptonews?.data?.slice(0, count)
  console.log(cryptonews)
  return (
   <Row gutter={[24,24]}>

   

    {limitedNews.map((news,i)=>(

      <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className='news-card'>
          <a href={news.url} target='_blank' rel="noreferrer">

            <div className='p-4 rounded-lg bg-white text-black'>

              <Title className='news-title' level={4}>
                {news.title}
              </Title>
              <p className='font-extralight'>{news.createdAt.split(" ").slice(1, 5).join(" ")}</p>
              <img src={news?.thumbnail} alt="news" className='h-20 w-30 float-right rounded'/>

            </div>

            <p>
              { truncateIfLong(news.description)}
            </p>

            

           

          </a>
        </Card>
      </Col>






    )

    )}

   </Row>
  )
}

export default News
