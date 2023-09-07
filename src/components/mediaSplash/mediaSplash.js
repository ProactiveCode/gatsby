import * as React from "react";
// import c from "classnames";
import { useState } from "react";
import * as Styles from "./mediaSplash.module.scss";

const Layout = ({ classes, link, text, hoverText }) => {
  const [BtnText, setBtnText] = useState(text);

  return (
    <div className={Styles.mediaSplash}>
      <img
        src="https://pro2-bar-s3-cdn-cf.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/8340bde0-cfef-47a7-a687-35ca2cfc6929_rw_1920.jpg?h=b565c5dbd9d77da62bd58b2d7a6eeafa"
        alt=""
      />
      <img
        src="https://pro2-bar-s3-cdn-cf5.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/62e7ea7f-e066-42b2-9103-1f64786ef199_rw_1920.jpg?h=93ba922cf3f45c28d69e61a07ca4f314"
        alt=""
      />
      <img
        src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/01ee5f6e-0d87-4f89-b95e-acded22014e1_rw_1920.jpg?h=aaa13d7a7e081f723d9c24ed8bf5407a"
        alt=""
      />
      <video
        src="http://project-lego.de.agency/wp-content/uploads/2023/09/swiss-video-placeholder.mp4"
        autoPlay={true}
        muted={true}
        loading="lazy"
        loop={true}
      ></video>
      <img
        src="https://pro2-bar-s3-cdn-cf.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/8e1a796d-f40d-4063-bcf7-7aedb50c94c9_rw_1920.jpeg?h=37abe649f2b76f368c12b3e09d00e64c"
        alt=""
      />
      <img
        src="https://pro2-bar-s3-cdn-cf2.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/dc54ebd9-9e8c-4407-8183-cbecac4f52d5_rw_1920.jpg?h=4bb4823321c87f013eb1230f8943a7f5"
        alt=""
      />

      <img
        src="https://pro2-bar-s3-cdn-cf.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/b9b03b5b-9a2c-43b1-92b1-df2b278976fd_rw_1920.jpg?h=1834831f794a7c26197c640978b13e49"
        alt=""
      />
      <img
        src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/418c4791-5398-412a-934c-24cdf6a97e0d_rw_3840.jpg?h=0d689e05682bc4f42d6907af6a2be480"
        alt=""
      />
      <img
        src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/a084f6a1-82dc-4b38-806c-a6672e679f96_rw_3840.jpg?h=3b2c41722e4e40def3ff2a833fc18178"
        alt=""
      />
      <img
        src="https://pro2-bar-s3-cdn-cf.myportfolio.com/f138cdc2-50b9-4dd7-bb12-1ad29fec74f5/191555aa-2413-4b81-9f5c-bfdf7af2cc2b_rw_1920.jpg?h=cd00c8445413a8c4c37769e45a7993a8"
        alt=""
      />

      <video
        autoPlay={true}
        muted={true}
        loading="lazy"
        loop={true}
        src="https://videos.ctfassets.net/74ncoczcn9dm/r8ZuyPcvlrhkyfLW1brcb/22fe333232aaf0c0dae81d30a4e30010/Bespoke-video.mp4"
      ></video>
    </div>
  );
};

export default Layout;
