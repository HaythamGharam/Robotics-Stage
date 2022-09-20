import React from "react";

const FormAcademic = ({ formData, setFormData }) => {
  return (
    <div className="form">
      <label htmlFor="insitute">Institute:</label>
      <input
        type="text"
        name="institute"
        className="input-field"
        placeholder="Ex: IIT, ISB ..."
        required
        value={formData.institute}
        onChange={(event) =>
          setFormData({ ...formData, institute: event.target.value })
        }
      />
      <label htmlFor="class">Class:</label>
      <input
        type="text"
        name="class"
        className="input-field"
        placeholder="Ex: Génie Informatique, Génie Mechanique"
        required
        value={formData.class}
        onChange={(event) =>
          setFormData({ ...formData, class: event.target.value })
        }
      />
      <label htmlFor="oldInstitute">Previous Education Insitiute:</label>
      <input
        type="text"
        name="oldInstitute"
        className="input-field"
        placeholder="Previous Education Insitiute"
        required
        value={formData.oldInsitute}
        onChange={(event) =>
          setFormData({ ...formData, oldInsitute: event.target.value })
        }
      />
      <label htmlFor="prevSection">Previous Section:</label>
      <input
        type="text"
        name="prevSection"
        className="input-field"
        placeholder="Ex: Informatique, Informatique de gestion, Mecanique..."
        required
        value={formData.prevSection}
        onChange={(event) =>
          setFormData({ ...formData, prevSection: event.target.value })
        }
      />
    </div>
  );
};

export default FormAcademic;
