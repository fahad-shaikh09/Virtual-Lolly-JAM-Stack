import React, { useEffect } from 'react'
import Lolly from './../components/lolly';
import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery($link: String!) {
    LOLLIES {
      GetLollyByLink( link:$link ) {
        topColor
        middleColor
        bottomColor
        link
        message
        toField
        fromField
      }
    }
  }
`
console.log("Query in dynamicLollyPage>>>>>>>>>>>>>>>>>>>>:", query)

const DynamicLollyPage = ({data}) => {
  console.log("data in dynamicLollyPage >>>>>>>>>>>>>>>>:", data)

  useEffect(()=>{
    
  },[])

  return (
    <div>
      <h1>hello from dynamicLollyPage</h1>
      <div>
        <h1>Share this link with your friend</h1>
        {/* <a href={`${baseUrl}/lollies/${data.GetLollyByLink.link}`}>Go to Link</a> */}
        <h2>https://virtual-lolly-byfahad.netlify.app/lollies/{`${data.LOLLIES.GetLollyByLink.link}`}</h2>
      </div>


      <Lolly
        topColor={data.LOLLIES.GetLollyByLink.topColor}
        middleColor={data.LOLLIES.GetLollyByLink.middleColor}
        bottomColor={data.LOLLIES.GetLollyByLink.bottomColor}
      />

      <div >
        <h1>To: {data.LOLLIES.GetLollyByLink.toField}</h1>
        <h1>Message: {data.LOLLIES.GetLollyByLink.message}</h1>
        <h1>From: {data.LOLLIES.GetLollyByLink.fromField}</h1>
      </div>

    </div>
  )
}

export default DynamicLollyPage
