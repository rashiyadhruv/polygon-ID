import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./module.check.scss";

const Check = () => {
  const [issuerID, setIssuerID] = React.useState("");
  let navigate = useNavigate();
  const constIssuerID = "1cd7537d-c877-4ad6-bd88-7186aac78b7b";

  const validation = () => {
    if (issuerID === constIssuerID) {
      alert("Success");
      navigate("/generateclaim");
    } else {
      alert("Failed");
    }
  };

  return (
    <div className={styles.main}>
      <input
        type="textbox"
        id="wallet"
        name="IssuerID"
        onChange={(e) => {
          setIssuerID(e.target.value);
        }}
      />
      <div
        onClick={() => {
          validation();
        }}
        className={styles.check}
      >
        Check
      </div>
    </div>
  );
};

export default Check;
