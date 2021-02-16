// import React from "react"
import Lolly from './../components/lolly';
// import { graphql } from "gatsby"

// export const query = graphql`
//   query MyQuery($link: String!) {
//     LOLLIES {
//       GetLollyByLink( link:$link ) {
//         topColor
//         middleColor
//         bottomColor
//         link
//         message
//         toField
//         fromField
//       }
//     }
//   }
// `

// export default function DynamicLollyPage(link) {
//   
//     return (
//         <div>
//             {/* <h2>topColor: {itemDetails.topColor}</h2>
//             <h2>middleColor: {itemDetails.middleColor} </h2>
//             <h2>bottomColor: {itemDetails.bottomColor} </h2>
//             <h2>toField: {itemDetails.toField} </h2>
//             <h2>fromField: {itemDetails.fromField} </h2>
//             <h2>message: {itemDetails.message} </h2>
//             <h2>link: {itemDetails.link} </h2> */}

//             <div>
//                 <h1>Share this link with your friend</h1>
//                 {/* <a href={`${baseUrl}/lollies/${data.GetLollyByLink.link}`}>Go to Link</a> */}
//                 <h2>https://virtual-lolly-byfahad.netlify.app/lollies/{`${link}`}</h2>
//             </div>


//             <Lolly
//                 topColor={topColor}
//                 middleColor={middleColor}
//                 bottomColor={bottomColor}
//             />

//             <div >
//                 <h1>To: {toField}</h1>
//                 <h1>Message: {message}</h1>
//                 <h1>From: {fromField}</h1>
//             </div>
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react'

const dynamicLollyPage = ( {pageContext:{ data}}) => {
  // const [link, setLink] = useState("")


  // useEffect(() => {
  //   setLink("abcd")
  // }, [])

  // console.log("topColor in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.topColor)
  // console.log("middleColor in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.middleColor)
  // console.log("bottomColor in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.bottomColor)
  // console.log("toField in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.toField)
  // console.log("fromField in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.fromField)
  // console.log("message in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data.LOLLIES.message)
  // console.log("link in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", link)
  console.log("data in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data)
  return (
            <div>
                {/* <h2>topColor: {itemDetails.topColor}</h2>
                <h2>middleColor: {itemDetails.middleColor} </h2>
                <h2>bottomColor: {itemDetails.bottomColor} </h2>
                <h2>toField: {itemDetails.toField} </h2>
                <h2>fromField: {itemDetails.fromField} </h2>
                <h2>message: {itemDetails.message} </h2>
                <h2>link: {itemDetails.link} </h2> */}
    
                <div>
                    <h1>Share this link with your friend</h1>
                    {/* <a href={`${baseUrl}/lollies/${data.GetLollyByLink.link}`}>Go to Link</a> */}
                    <h2>https://virtual-lolly-byfahad.netlify.app/lollies/{`${data.link}`}</h2>
                </div>
    
    
                <Lolly
                    topColor={data.topColor}
                    middleColor={data.middleColor}
                    bottomColor={data.bottomColor}
                />
    
                <div >
                    <h1>To: {data.toField}</h1>
                    <h1>Message: {data.message}</h1>
                    <h1>From: {data.fromField}</h1>
                </div>
            </div>
        )
}

export default dynamicLollyPage
