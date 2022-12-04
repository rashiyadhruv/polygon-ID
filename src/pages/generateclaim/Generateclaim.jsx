import React, { useState } from "react";
import styles from "./module.generateclaim.scss";
import axios from "axios";

const GenerateClaim = () => {
  const [panno, setPanno] = useState("");
  const [IT, setIT] = useState(true);

  const generateclaim = () => {
    var config = {
      method: "post",
      url: `https://api-staging.polygonid.com/v1/issuers/1cd7537d-c877-4ad6-bd88-7186aac78b7b/schemas/a6b80570-ef1b-4210-9e95-056e57bc3167/offers`,
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzAxODY5NzgsImp0aSI6IjkzZjgyYjZhLTkzNzctNGMzYi1hZDhhLTY0MTEzMzcxYzZmYSIsImlhdCI6MTY3MDEwMDU3OCwibmJmIjoxNjcwMTAwNTc4LCJzdWIiOiIzZDliZTM2OS1iZjE4LTQ4NWItYmY2Ni05Y2FiYmNhZDcwMGIiLCJzY29wZSI6ImFwaSIsImFjY291bnQiOnsidmVyaWZpZWQiOnRydWUsIm9yZ2FuaXphdGlvbiI6IjFjZDc1MzdkLWM4NzctNGFkNi1iZDg4LTcxODZhYWM3OGI3YiIsInJvbGUiOiJPV05FUiIsImVtYWlsIjoicmFodWxiYXJ1YTMxKzRAZ21haWwuY29tIn19.i1elRjQ3vxC-H6H3Dm5DEBtjp5w736DuwzhT8XaUYKA`,
      },
      data: {
        attributes: [
          {
            attributeKey: "pan number",
            attributeValue: parseInt(panno),
          },
          {
            attributeKey: "Income Tax",
            attributeValue: true,
          },
        ],
        claimLinkExpiration: "2024-10-19T11:20:12.167205Z",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.wrap}>
      <p>Pan no.</p>
      <input
        type="textbox"
        id="panno"
        name="panno"
        onChange={(e) => {
          setPanno(e.target.value);
        }}
      />
      <p>Income tax.</p>
      <input
        type="textbox"
        id="Income Tax"
        name="Income Tax"
        onChange={(e) => {
          setIT(e.target.value);
        }}
      />

      <div
        onClick={() => {
          generateclaim();
        }}
        className={styles.generateclaim}
      >
        Generate Claim
      </div>
    </div>
  );
};

export default GenerateClaim;
