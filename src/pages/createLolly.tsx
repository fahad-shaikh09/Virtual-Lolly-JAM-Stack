import React, { useState } from "react"
import Lolly from "../components/lolly"
import "./../../styles/main.css"
import { useQuery, useMutation, gql } from "@apollo/client"
// import gql from "graphql-tag"
import { navigate } from 'gatsby'
// import { Link } from 'gatsby';
import shortid from "shortid";
import Result from "./../components/Result"

export const GET_VLOLLY = gql`
  {
    getAllLollies {
      topColor
      middleColor
      bottomColor
      toField
      fromField
      message
      link
    }
  }
`

export const ADD_LOLLY = gql`
  mutation addLolly(
    $topColor: String!,
    $middleColor: String!,
    $bottomColor: String!,
    $toField: String!,
    $fromField: String!,
    $message: String!,
    $link: String!,
    ){
    addLolly(topColor: $topColor, middleColor: $middleColor, bottomColor: $bottomColor, toField: $toField, fromField: $fromField, message: $message, link: $link){
      topColor,
      middleColor,
      bottomColor,
      toField,
      fromField,
      message,
      link,
  }
}
`



export default function Home() {

  const [topColor, setTopColor] = useState("#deaa10")
  const [middleColor, setMiddleColor] = useState("#e95946")
  const [bottomColor, setBottomColor] = useState("#d52368")
  const [toField, SetToField] = useState("");
  const [fromField, SetFromField] = useState("");
  const [message, SetMessage] = useState("");
  var id = shortid.generate();

  const handleSubmit = async () => {
    // console.log("To:", toField);
    // console.log("From:", fromField);
    // console.log("Message:", message);
    // console.log("topColor:", topColor)
    // console.log("middleColor:", middleColor)
    // console.log("bottomColor:", bottomColor)

    addLolly({
      variables: {
        topColor,
        middleColor,
        bottomColor,
        toField,
        fromField,
        message,
        link:id,
      },
      refetchQueries: [{ query: GET_VLOLLY }]
    })
    // await navigate(`/lollies/${id}`);
  }

  const { error, loading, data } = useQuery(GET_VLOLLY)
  const [addLolly] = useMutation(ADD_LOLLY)

  console.log("Data in CreateLolly page:", data)
  console.log("Error in CreateLolly page:", error)


  if (loading) return <h1>Loading...</h1>
  if (error) return <h1> {error}</h1>

  return <div className="container">
    <h1>Virtual Lolly</h1>

    <div className="box">
      <Lolly topColor={topColor} middleColor={middleColor} bottomColor={bottomColor} />

      <div className="inputBoxes">
        <input className="singleBox" type="color" value={topColor} onChange={e => setTopColor(e.target.value)} />
        <input className="singleBox" type="color" value={middleColor} onChange={e => setMiddleColor(e.target.value)} />
        <input className="singleBox" type="color" value={bottomColor} onChange={e => setBottomColor(e.target.value)} />
      </div>

      <div className="form">
        <input type="text" placeholder="To:" onChange={e => SetToField(e.target.value)} />
        <textarea placeholder="Enter Message!" rows={20} onChange={e => SetMessage(e.target.value)} />
        <input type="text" placeholder="From:" onChange={e => SetFromField(e.target.value)} />

        <button onClick={()=> handleSubmit()} >Send</button>
      </div>
     
      <Result link={data?.getAllLollies[0]?.link} fromField={data?.getAllLollies[0]?.fromField} toField={data?.getAllLollies[0]?.toField} message={data?.getAllLollies[0]?.message} />


    </div>
  </div>
}
