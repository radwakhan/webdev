import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    course: "Python",
    skills: [],
    country: "",
    address: "",
    website: "",
    time: "",
    color: "#000000",
    experience: 0,
    photo: null,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox" && name === "terms") {
      setFormData({
        ...formData,
        terms: checked,
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        photo: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSkillChange = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((item) => item !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }

    alert("Registration Successful!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      dob: "",
      gender: "",
      course: "Python",
      skills: [],
      country: "",
      address: "",
      website: "",
      time: "",
      color: "#000000",
      experience: 0,
      photo: null,
      terms: false,
    });
  };

  return (
    <form
      className="registration-form"
      onSubmit={handleSubmit}
    >
      <h1>Registration Form</h1>

      {/* Full Name */}
      <div className="form-group">
        <label>Full Name</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div className="form-group">
        <label>Password</label>

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Age */}
      <div className="form-group">
        <label>Age</label>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      {/* Date of Birth */}
      <div className="form-group">
        <label>Date of Birth</label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      {/* Gender */}
      <div className="form-group">
        <label>Gender</label>

        <div className="radio-group">

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>

        </div>
      </div>

      {/* Course */}
      <div className="form-group">
        <label>Select Course</label>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option>Python</option>
          <option>Java</option>
          <option>React</option>
          <option>Flutter</option>
        </select>
      </div>

      {/* Skills */}
      <div className="form-group">
        <label>Skills</label>

        <div className="skills">

          {["Java", "React", "Python", "Flutter"].map(
            (skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={() =>
                    handleSkillChange(skill)
                  }
                />

                {skill}
              </label>
            )
          )}

        </div>
      </div>

      {/* Country */}
      <div className="form-group">
        <label>Country</label>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">
            -- Select country --
          </option>

          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
      </div>

      {/* Address */}
      <div className="form-group">
        <label>Address</label>

        <textarea
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* Website */}
      <div className="form-group">
        <label>Website</label>

        <input
          type="url"
          name="website"
          placeholder="https://example.com"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* Preferred Time */}
      <div className="form-group">
        <label>Preferred Time</label>

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      {/* Favorite Color */}
      <div className="color-group">

        <label>Favorite Color</label>

        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

      </div>

      {/* Experience */}
      <div className="form-group experience">

        <label>
          Experience: {formData.experience} Years
        </label>

        <input
          type="range"
          min="0"
          max="10"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />

      </div>

      {/* Upload Photo */}
      <div className="form-group">

        <label>Upload Photo</label>

        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handleChange}
        />

      </div>

      {/* Terms */}
      <div className="terms">

        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />

        <span>
          I agree to the Terms and Conditions
        </span>

      </div>

      {/* Buttons */}
      <div className="buttons">

        <button
          type="submit"
          className="register"
        >
          Register
        </button>

        <button
          type="button"
          className="reset"
          onClick={handleReset}
        >
          Reset
        </button>

      </div>

    </form>
  );
}

export default RegistrationForm;