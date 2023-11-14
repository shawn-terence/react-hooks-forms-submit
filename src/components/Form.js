import React, { useState } from "react";

function Form() {
  // State for first name input
  const [firstName, setFirstName] = useState("Sylvia");

  // State for last name input
  const [lastName, setLastName] = useState("Woods");

  // State for submitted data
  const [submittedData, setSubmittedData] = useState([]);

  // State for errors
  const [errors, setErrors] = useState([]);

  // Handle change in first name input
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  // Handle change in last name input
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Validation: first name is required
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      
      // Update submitted data and reset form inputs
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      // Display error if first name is not provided
      setErrors(["First name is required!"]);
    }
  }

  // Create a list of submitted data for rendering
  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>

      {/* Display errors, if any */}
      {errors.length > 0
        ? errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))
        : null}

      {/* Display submitted data */}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;

