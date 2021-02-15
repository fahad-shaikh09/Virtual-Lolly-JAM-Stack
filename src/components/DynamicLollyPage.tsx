import React from "react"
import Lolly from '../components/lolly';
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag'
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

export default function DynamicLollyPage ({ data }) {
    // const { itemDetails } = pageContext
    console.log("Data in DynamicLollyPage:", data)

    // const [topColor, settopColor] = useState('#6b6bde');
    // const [middleColor, setmiddleColor] = useState('#4ac383');
    // const [bottomColor, setbottomColor] = useState('#d2ec27');
    // const [fromField, setfromField] = useState('');
    // const [toField, settoField] = useState('');
    // const [message, setMessage] = useState('');

    // const { data, loading, error } = useQuery(query, {
    //     variables: { link: pageContext.link }
    // })
    // if (error) {
    //     console.log("error", error);
    //     return <h4>error</h4>
    // }

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
                <h4>Share this link with your friend</h4>
                {/* <a href={`${baseUrl}/lollies/${data.GetLollyByLink.link}`}>Go to Link</a> */}
                <p>https://virtual-lolly-byfahad.netlify.app/lollies/{`${data.LOLLIES.GetLollyByLink.link}`}</p>
            </div>


            <Lolly
                topColor={data.LOLLIES.GetLollyByLink.topColor}
                middleColor={data.LOLLIES.GetLollyByLink.middleColor}
                bottomColor={data.LOLLIES.GetLollyByLink.bottomColor}
            />

            <div >
                <h1>to: {data.LOLLIES.GetLollyByLink.toField}</h1>
                <p>{data.LOLLIES.GetLollyByLink.message}</p>
                <h3>From: {data.LOLLIES.GetLollyByLink.fromField}</h3>
            </div>
        </div>
    )
}
