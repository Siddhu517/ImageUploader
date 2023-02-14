import React, { useState } from "react";
import AddImage from "./components/AddImage";
import Loading from "./components/Loading";
import Preview from "./components/Preview";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [route, setRoute] = useState("upload");
  const [imageUrl, setImageUrl] = useState({});

  const uploadFile = (e) => {
    e.preventDefault();

    let selectedFile = null;

    if (e.target.files) {
      selectedFile = e.target.files[0];
    } else {
      selectedFile = e.dataTransfer.files[0];
    }

    //console.log(selectedFile);

    const data = new FormData();
    data.append("image", selectedFile);
    setRoute("load");

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        let percentage = Math.floor((loaded * 100) / total);

        if (percentage < 100) {
          setUploadPercentage(percentage);
        }
      },
    };

    axios
      .post("/uploadfile", data, options)
      .then((res) => {
        //console.log(res.data);
        setImageUrl(res.data);
        setTimeout(() => {
          setRoute("preview");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center font-poppins h-screen">
      {route === "upload" ? (
        <AddImage uploadFile={uploadFile} />
      ) : route === "load" ? (
        <Loading uploadPercentage={uploadPercentage} />
      ) : route === "preview" ? (
        <Preview imageUrl={imageUrl} />
      ) : (
        ""
      )}

      <div className="absolute bottom-[24px] font-[500] text-[14px] leading-[17.07px] text-[#A9A9A9]">
        created by{" "}
        <span className="font-[700] text-[14px] leading-[17.07px]">
          Siddhesh Sadadekar
        </span>{" "}
        - devChallenges.io
      </div>
    </div>
  );
}

export default App;
