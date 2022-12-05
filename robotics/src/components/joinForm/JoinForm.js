import React from "react";
import {} from "./join.css";
import { useState } from "react";
import Button from "@mui/material/Button";
// import axios from 'axios';

const JoinForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [birth, setBirth] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [institute, setInstitute] = useState("");
  // const [currClass, setcurrClass] = useState("");
  // const [oldInstitute, setoldInstitute] = useState("");
  // const [prevSection, setprevSection] = useState("");

  // const handleSubmit = () => {
  //   if (
  //     name.length === 0 ||
  //     email.length === 0 ||
  //     phone.length === 0 ||
  //     address.length === 0 ||
  //     institute.length === 0 ||
  //     birth.length === 0 ||
  //     currClass.length === 0 ||
  //     oldInstitute.length === 0 ||
  //     prevSection.length === 0
  //   ) {
  //     alert("All fields are required!");
  //   } else {
  //       const url = "http://loclahost/enquiry.php";
  //       let fData = new FormData(); 
  //       fData.append('name', name);
  //       fData.append('email', email);
  //       fData.append('birth', birth);
  //       fData.append('phone', phone);
  //       fData.append('address', address);
  //       fData.append('institute', institute);
  //       fData.append('currClass', currClass);
  //       fData.append('oldInstitute', oldInstitute);
  //       fData.append('prevSection', prevSection);

  //       axios.post (url, fData)
  //       .then(response => alert (response.data))
  //       .catch(error => alert(error));
  //   }
  // };

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
      <div className="form">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          className="input-field"
          placeholder="Enter Your Name"
          required
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="input-field"
          placeholder="Enter Your Email"
          required
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="birth">Date of Birth:</label>
        <input
          type="date"
          name="birth"
          className="input-field"
          required
          // value={birth}
          // onChange={(e) => setBirth(e.target.value)}
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="number"
          name="number"
          className="input-field"
          placeholder="Enter Your Phone Number"
          required
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          className="input-field"
          placeholder="Enter Your Address"
          required
          // value={address}
          // onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="insitute">Institute:</label>
        <input
          type="text"
          name="institute"
          className="input-field"
          placeholder="Ex: IIT, ISB ..."
          required
          // value={institute}
          // onChange={(e) => setInstitute(e.target.value)}
        />
        <label htmlFor="currClass">Class:</label>
        <input
          type="text"
          name="currClass"
          className="input-field"
          placeholder="Ex: Génie Informatique, Génie Mechanique"
          required
          // value={currClass}
          // onChange={(e) => setcurrClass(e.target.value)}
        />
        <label htmlFor="oldInstitute">Previous Education Insitiute:</label>
        <input
          type="text"
          name="oldInstitute"
          className="input-field"
          placeholder="Previous Education Insitiute"
          required
          // value={oldInstitute}
          // onChange={(e) => setoldInstitute(e.target.value)}
        />
        <label htmlFor="prevSection">Previous Section:</label>
        <input
          type="text"
          name="prevSection"
          className="input-field"
          placeholder="Ex: Informatique, Informatique de gestion, Mecanique..."
          required
          // value={prevSection}
          // onChange={(e) => setprevSection(e.target.value)}
        />
        <Button variant="contained" size="large" sx={btnstyle}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default JoinForm;
