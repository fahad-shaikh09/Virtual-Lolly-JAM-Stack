import React, { useEffect } from 'react'
import Lolly from './../components/lolly';
// import { graphql } from "gatsby"
import dotenv from 'dotenv'
import faunadb from "faunadb"
// require("dotenv").config();

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
// console.log("Query in dynamicLollyPage>>>>>>>>>>>>>>>>>>>>:", query)

const DynamicLollyPage = ({ pageContext: { topColor, middleColor, bottomColor, toField, message, fromField, link } }) => {
  // console.log("pageContext in DynamicLollyPage >>>>>>>:", pageContext)
  
  // useEffect(() => {
  //   console.log("useEffect")
  //   var faunadb = require("faunadb")
  //   var q = faunadb.query
  //   var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })
    
    
  //   const getAllLollies = async () => {
  //     try {
  //       var adminClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET })
  //       const result = await adminClient.query(
  //         q.Map(
  //           q.Paginate(q.Match(q.Index('allLollies'))),  //allLollies is index in faunadb
  //           q.Lambda(x => q.Get(x))
  //         )
  //       )
  //       // console.log(" result.data in vlolly function.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", result.data)
  //       return result.data.map(d => {
  //         return {
  //           link: d.data.link,
  //           topColor: d.data.topColor,
  //           middleColor: d.data.middleColor,
  //           bottomColor: d.data.bottomColor,
  //           toField: d.data.toField,
  //           fromField: d.data.fromField,
  //           message: d.data.message,
  //         }
  //       })
  //     } catch (err) {
  //       console.log("error from function:", err)
  //     }
  //   }
  //   getAllLollies();
  // }, [])



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
