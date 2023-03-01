import React, { useState, useEffect } from 'react'
import '../css/productDescription.css'
import productcard from '../js/common';
// import product from '../assets/product/p1.png'
// import { Configuration, OpenAIApi } from 'openai';

const ProductDescription = (props) => {

    const [data, setData] = useState("")
    const [showImage, setShowImage] = useState("");
    const [description, setDescription] = useState("")

    useEffect(() => {
      const data = () => {
        setData(props.productData)
        setShowImage(!(props.productData == null || props.productData == "")? props.productData.Images.Link1 : "")
        fetchDescription(data.name)
      }
      data()
    }, [props.productData])

    if (data) {
        productcard.open()
    }
    

    const productclose = () => {
        productcard.close()
        setData("")
    };

    const visitImage = (e) => {
        setShowImage(e.target.src)
        // console.log(e.target)
    }


    const fetchDescription = (name) => {
        let OPENAI_API_KEY = "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";
        // var bTextToSpeechSupported = false;
        // var bSpeechInProgress = false;
        // var oSpeechRecognizer = null
        // var oSpeechSynthesisUtterance = null;
        // var oVoices = null;

        // function Send() {

            var fquestion = name;
            var sQuestion = "point wise description of " + fquestion;
            // if (sQuestion == "") {
            //     alert("Type in your question!");
            //     txtMsg.focus();
            //     return;
            // }

            var oHttp = new XMLHttpRequest();
            oHttp.open("POST", "https://api.openai.com/v1/completions");
            oHttp.setRequestHeader("Accept", "application/json");
            oHttp.setRequestHeader("Content-Type", "application/json");
            oHttp.setRequestHeader("Authorization", "Bearer " + OPENAI_API_KEY)

            oHttp.onreadystatechange = function () {
                if (oHttp.readyState === 4) {
                    //console.log(oHttp.status);
                    var oJson = {}
                    // if (txtOutput.innerHTML != "") txtOutput.innerHTML += "\n";

                    try {
                        oJson = JSON.parse(oHttp.responseText);
                    } catch (ex) {
                        // txtOutput.innerHTML += "Error: " + ex.message
                        alert(ex)
                    }

                    if (oJson.error && oJson.error.message) {
                        // txtOutput.innerHTML += "Error: " + oJson.error.message;
                        alert(oJson.error.message)
                    } else if (oJson.choices && oJson.choices[0].text) {
                        var s = oJson.choices[0].text;

                        if (s == "") s = "No response from server";
                        // txtOutput.innerHTML += `Chat GPT: ${s}`;
                        console.log(s)
                        setDescription(s)
                    }
                }
            };

            var sModel = "text-davinci-003";// "text-davinci-003";
            var iMaxTokens = 2048;
            var sUserId = "1";
            var dTemperature = 0.5;

            var data = {
                model: sModel,
                prompt: sQuestion,
                max_tokens: iMaxTokens,
                user: sUserId,
                temperature: dTemperature,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                stop: ["#", ";"]
            }

            oHttp.send(JSON.stringify(data));

            // console.log(sQuestion)

            // if (txtOutput.innerHTML != "") txtOutput.innerHTML += "\n";
            // txtOutput.innerHTML += "<p>Me: " + sQuestion + "</p>";
            // txtMsg.value = "";
        // }
    }
    console.log(data)

    // if (data != null && data != "") {
        
    // }

    // const configuration = new Configuration({apiKey: "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"})
    // const chatGPT = new OpenAIApi(configuration)
    // const complete = chatGPT.createCompletion({
    //     model: "Poco X3 Pro",
    //     prompt: "hello"
    // })
    // console.log(complete)
  return (
    <>
        <div className="prod-desc" id="prod-desc">
            <div className="box slide-top">
                <div className="prod-nav">
                    <img onClick={() => productclose()} style={{cursor: 'pointer'}} src="https://img.icons8.com/ios/256/long-arrow-left.png" alt="" />
                </div>
                <div className="img">
                    <img src={showImage} alt="" />
                    <div className="heart active"></div>
                </div>
                <div className="img-container">
                    <img src={data != "" ? data.Images.Link1 : ""} onClick={e => visitImage(e)} alt="" />
                    <img src={data != "" ? data.Images.Link2 : ""} onClick={e => visitImage(e)} alt="" />
                    <img src={data != "" ? data.Images.Link3 : ""} onClick={e => visitImage(e)} alt="" />
                    <img src={data != "" ? data.Images.Link4 : ""} onClick={e => visitImage(e)} alt="" />
                </div>

                <div className="content">
                    <div className="brand">
                        <div className="dot"></div>{data != "" ? data.Brand : ""}
                    </div>
                    <div className="title">{data != "" ? data.name : ""}
                    </div>
                    <div className="price">
                        <p>Price : </p>
                        <div className="selling">Rs. {data != "" ? data.SellingPrice : ""}</div>
                        <div className="cutting">Rs. {data != "" ? data.MarketPrice : ""}</div>
                        <div className="buy">
                            <img src="https://img.icons8.com/material/1x/whatsapp--v6.png" alt="" />buy now<span> on whatsapp</span>
                        </div>
                    </div>
                    {/* <div className="ram">
                        <p>Ram :
                            <select name="" id="">
                                <option value="">4</option>
                                <option value="">6</option>
                            </select>
                        </p>
                    </div> */}
                    <div className="desc">
                        <p>Description : </p>
                        {/* <ol>
                            <li>6.38-inch (1080x2340 pixels) FHD+ Super AMOLED display with 19.5:9 aspect ratio</li>
                            <li>Octa-Core MediaTek Helio P65 SoC with up to 6GB of RAM</li>
                            <li>Triple rear cameras (16MP primary + 8MP wide-angle + 2MP depth)</li>
                            <li>32MP front camera with f/2.0 aperture</li>
                            <li>Funtouch OS 9 based on Android 9.0 Pie</li>
                            <li>4,500mAh battery with 18W Dual-Engine fast charging</li>
                            <li>In-display fingerprint sensor</li>
                            <li>3.5mm audio jack, FM Radio</li>
                            <li>Dual 4G VoLTE, Wi-Fi 802.11 ac (2.4GHz + 5GHz), Bluetooth 5, GPS + GLONASS</li>
                        </ol> */}
                        <pre style={{overflow: 'hidden', whiteSpace: 'pre-wrap' ,textOverflow: 'hidden'}}>{description}</pre>
                        <pre />
                    </div>

                    <div className="desc terms">
                        <p>About phone : </p>
                        {data != "" ? data.MoreInfo : ""}
                        <pre />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDescription