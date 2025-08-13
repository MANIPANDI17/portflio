import React, { useState } from "react";

function StudentRegistrationForm() {
  const [student, setStudent] = useState({
    name: "",
    age: "000",
    email: "",
    course: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", student);

  };

  return (
    <form>
        <fieldset>

           <div className="registration-form">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="date"
            name="age"
            value={student.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Course: </label>
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender: </label>
          <select
            name="gender"
            value={student.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Address: </label>
          <textarea
            name="address"
            value={student.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
    </fieldset>
    </form>
  );
}

export default StudentRegistrationForm;
