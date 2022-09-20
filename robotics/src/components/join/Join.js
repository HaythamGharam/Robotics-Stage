import {} from "./join.css";
import { useState } from "react";
import FormPersonal from "./FormPersonal";
import FormAcademic from "./FormAcademic";
import Success from "./Success";
import Button from "@mui/material/Button";

function Join() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birth: "",
    number: 0,
    address: "",
    institute: "",
    class: "",
    oldInstitute: "",
    prevSection: "",
  });

  const FormTitles = [
    "Personal Informations",
    "Academic Informations",
    "Success",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <FormPersonal formData={formData} setFormData={setFormData} />;
    }
    if (page === 1) {
      return <FormAcademic formData={formData} setFormData={setFormData} />;
    }
    if (page === 2) {
      return <Success />;
    }
  };

  const btnstyle = {
    background: "rgb(229,246,255)",
    width: "200px",
    borderradius: "30px",
    padding: "13px",
    boxshadow: "5px 5px #F8F3FC",
    fontweight: "500",
    color: "black",
  };

  return (
    <div className="join-form">
      <div className="progress-bar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1>{FormTitles[page]}</h1>
          <h1>Step {[page+1]} - 3</h1>
        </div>
        <div className="form-body">{pageDisplay()}</div>
        <div className="form-footer">
          <Button
            variant="contained"
            size="large"
            sx={btnstyle}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button
            variant="contained"
            size="large"
            sx={btnstyle}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                console.log (formData)
                alert("SUCCESS !")
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Join;
