import React, { useState } from "react"
import Lolly from "../components/lolly"
import "./../../styles/main.css"
import { useQuery, useMutation, gql } from "@apollo/client"
// import gql from "graphql-tag"
import { navigate } from 'gatsby'
// import { Link } from 'gatsby';
import shortid from "shortid";
import Result from "./../components/Result"
import { useFormik } from "formik"
import * as Yup from "yup"


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

  const [topColor, setTopColor] = useState("black")
  const [middleColor, setMiddleColor] = useState("white")
  const [bottomColor, setBottomColor] = useState("red")
  const [updated,setUpdated] = useState(false)
  // const [toField, SetToField] = useState("");
  // const [fromField, SetFromField] = useState("");
  // const [message, SetMessage] = useState("");
  // var id = shortid.generate();

  // const handleSubmit = async () => {
    // console.log("To:", toField);
    // console.log("From:", fromField);
    // console.log("Message:", message);
    // console.log("topColor:", topColor)
    // console.log("middleColor:", middleColor)
    // console.log("bottomColor:", bottomColor)

    // addLolly({
    //   variables: {
    //     topColor,
    //     middleColor,
    //     bottomColor,
    //     toField,
    //     fromField,
    //     message,
    //     link:id,
    //   },
    //   refetchQueries: [{ query: GET_VLOLLY }]
    // })
    // await navigate(`/lollies/${id}`);
  // }

  const formik = useFormik({
    initialValues: {
      fromField: "",
      toField: "",
      message: "",
    },
    validationSchema: Yup.object({
      fromField: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      toField: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: values => {
      const id = shortid.generate()

      const submitLollyForm = async () => {
        const result = await addLolly({
          variables: {
            fromField: values.fromField,
            toField: values.toField,
            message: values.message,
            topColor: topColor,
            middleColor: middleColor,
            bottomColor: bottomColor,
            link: id,
          },
          refetchQueries: [{ query: GET_VLOLLY }]
        })
      }

      submitLollyForm()
      setUpdated(true)
      ++arrayLength;
      // navigate(`/lollies/${id}`)
    },
  })

  const { error, loading, data } = useQuery(GET_VLOLLY)
  const [addLolly] = useMutation(ADD_LOLLY)

  console.log("Data in CreateLolly page:", data)
  console.log("Error in CreateLolly page:", error)


  if (loading) return <h1>Loading...</h1>
  if (error) return <h1> {error}</h1>

  var arrayLength = data.getAllLollies.length

  return <div className="container">
    <h1>Virtual Lolly</h1>

    <div className="box">
      <Lolly topColor={topColor} middleColor={middleColor} bottomColor={bottomColor} />

      {/* <div className="inputBoxes">
        <input className="singleBox" type="color" value={topColor} onChange={e => setTopColor(e.target.value)} />
        <input className="singleBox" type="color" value={middleColor} onChange={e => setMiddleColor(e.target.value)} />
        <input className="singleBox" type="color" value={bottomColor} onChange={e => setBottomColor(e.target.value)} />
      </div> */}

<div className="colorSelectorContainer">
            <label htmlFor="topFlavor" className="colorPickerLabel">
              <input
                className="colorPicker"
                value={topColor}
                type="color"
                name="topFlavor"
                id="topFlavor"
                onChange={e => {
                  setTopColor(e.target.value)
                }}
              ></input>
            </label>

            <label htmlFor="midFlavor" className="colorPickerLabel">
              <input
                className="colorPicker"
                value={middleColor}
                type="color"
                name="midFlavor"
                id="midFlavor"
                onChange={e => {
                  setMiddleColor(e.target.value)
                }}
              ></input>
            </label>

            <label htmlFor="botFlavor" className="colorPickerLabel">
              <input
                className="colorPicker"
                value={bottomColor}
                type="color"
                name="botFlavor"
                id="botFlavor"
                onChange={e => {
                  setBottomColor(e.target.value)
                }}
              ></input>
            </label>
          </div>
        </div>

      {/* <div className="form">
        <input type="text" placeholder="To:" onChange={e => SetToField(e.target.value)} />
        <textarea placeholder="Enter Message!" rows={20} onChange={e => SetMessage(e.target.value)} />
        <input type="text" placeholder="From:" onChange={e => SetFromField(e.target.value)} />

        <button onClick={()=> handleSubmit()} >Send</button>
      </div> */}

<form className="formContainer" onSubmit={formik.handleSubmit}>
          <label className="formLabel" htmlFor="sendName">
            To:
          </label>
          <div className="formErrors">
            {formik.errors.toField && formik.touched.toField
              ? formik.errors.toField
              : null}
          </div>
          <input
            className="inputText"
            type="text"
            name="toField"
            id="toField"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
     <br></br> 
     <br></br> 

          <label className="formLabel" htmlFor="msg">
            Message:{" "}
          </label>
          <div className="formErrors">
            {formik.errors.message && formik.touched.message
              ? formik.errors.message
              : null}
          </div>
          <textarea
            id="message"
            name="message"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="inputTextBox"
            cols={30}
            rows={15}
          />
     <br></br> 
     <br></br> 

          <label className="formLabel" htmlFor="Recname">
            {" "}
            From:{" "}
          </label>
          <div className="formErrors">
            {formik.errors.fromField && formik.touched.fromField
              ? formik.errors.fromField
              : null}
          </div>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="inputText"
            type="text"
            name="fromField"
            id="fromField"
          />
     <br></br> 
     <br></br> 

          <button className="submitButton" type="submit">
            Send
          </button>
        </form>
     <br></br>
     <br></br>
      {/* <Result link={data?.getAllLollies[0]?.link} fromField={data?.getAllLollies[0]?.fromField} toField={data?.getAllLollies[0]?.toField} message={data?.getAllLollies[0]?.message} /> */}
     {updated && <Result link={data?.getAllLollies[arrayLength-1]?.link } fromField={data?.getAllLollies[arrayLength-1]?.fromField} toField={data?.getAllLollies[arrayLength-1]?.toField} message={data?.getAllLollies[arrayLength-1]?.message}  />  }

    </div>
}

