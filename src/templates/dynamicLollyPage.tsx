import React from 'react'
import Lolly from './../components/lolly';
import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery($link: String!) {
    LOLLIES {
      GetLollyByLink(link: $link) {
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
// console.log("Query in dynamicLollyPage>>>>>>>>>>>>>>>>>>>>:", query)

const DynamicLollyPage = ({pageContext : {topColor,middleColor,bottomColor,toField,message,fromField,link}}) => {
  
  
  // console.log("pageContext in DynamicLollyPage >>>>>>>:", pageContext)

  return (
    <div>
      <h1>Lolly is ready</h1>
      <br></br>
      <div>
        <h1>Share this link with your friend</h1>
        {/* <a href={`${baseUrl}/lollies/${data.GetLollyByLink.link}`}>Go to Link</a> */}
        <h2>https://virtual-lolly-byfahad.netlify.app/lollies/{`${link}`}</h2>
      </div>


      <Lolly
        topColor={topColor}
        middleColor={middleColor}
        bottomColor={bottomColor}
      />

      <div >
        <h1>To: {toField}</h1>
        <h1>Message: {message}</h1>
        <h1>From: {fromField}</h1>
      </div> 

    </div>
  )
}

export default DynamicLollyPage
