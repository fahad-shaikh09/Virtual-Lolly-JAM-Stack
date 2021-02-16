// import React from "react"
// import Lolly from './lolly';
// import { graphql } from "gatsby"

// export const query = graphql`
//   query MyQuery($link: String!) {
//     LOLLIES {
//       GetLollyByLink(link: $link) {
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

// export default function DynamicLollyPage(  {pageContext : {data}, link }) {
//   // console.log("topColor in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", topColor)
//   // console.log("middleColor in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", middleColor)
//   // console.log("bottomColor in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", bottomColor)
//   // console.log("toField in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", toField)
//   // console.log("fromField in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", fromField)
//   // console.log("message in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", message)
//   console.log("link in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", link)
//   console.log("data in dynamic page >>>>>>>>>>>>>>>>>>>>>>:", data)
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
//                 topColor={data.topColor}
//                 middleColor={data.middleColor}
//                 bottomColor={data.bottomColor}
//             />

//             <div >
//                 <h1>To: {data.toField}</h1>
//                 <h1>Message: {data.message}</h1>
//                 <h1>From: {data.fromField}</h1>
//             </div>
//         </div>
//     )
// }
