import React from "react";

const FormPersonal = ({ formData, setFormData }) => {
  
  const required = {
    value: true,
    message: "This field is required"
  }

  return (
    <div className="form">
      <label htmlFor="name">Full Name:</label>
      <input
        type="text"
        name="name"
        className="input-field"
        placeholder="Enter Your Name"
        required
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        className="input-field"
        placeholder="Enter Your Email"
        required
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <label htmlFor="birth">Date of Birth:</label>
      <input
        type="date"
        name="birth"
        className="input-field"
        required
        value={formData.birth}
        onChange={(event) =>
          setFormData({ ...formData, birth: event.target.value })
        }
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="number"
        name="number"
        className="input-field"
        placeholder="Enter Your Phone Number"
        required
        value={formData.number}
        onChange={(event) =>
          setFormData({ ...formData, number: event.target.value })
        }
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        name="address"
        className="input-field"
        placeholder="Enter Your Address"
        required
        value={formData.address}
        onChange={(event) =>
          setFormData({ ...formData, address: event.target.value })
        }
      />
    </div>
  );
};

export default FormPersonal;
