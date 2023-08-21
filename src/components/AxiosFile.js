import React, { useEffect } from "react";
import axios from "axios";
const popularVid = axios.create({
  baseURL:
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyC-jdpDKuZDMmnat8RyHQj499wUCTCdM4o",
});
const AxiosFile = () => {
  useEffect(() => {
    popularVid.get("").then((res, err) => {
      console.log(res.data);
    });
    console.log("dijsfjod");
  });
  return <div>AxiosFile</div>;
};

export default AxiosFile;
