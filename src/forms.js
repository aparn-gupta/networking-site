import React from "react";

function Wording() {


  const [userData, setuserData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isHuman: false,
    education: "",
    fruits: "",
  });

  function handleChange(event) {
    let { name, value, type, checked } = event.target;
    setuserData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function HandleSubmit(event) {
    event.preventDefault();
    console.log(userData);
  }

  const id = React.useId;

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label htmlFor={id + "-firstname"}>Enter your First Name: </label>
        <input
          type="text"
          onChange={handleChange}
          name="firstName"
          value={userData.firstName}
          id={id + "-firstname"}
        />
        <br />
        <br />

        <label htmlFor={id + "-lastname"}>Enter your Last Name: </label>
        <input
          type="text"
          onChange={handleChange}
          name="lastName"
          value={userData.lastName}
          id={id + "-lastname"}
        />
        <br />
        <br />

        <label htmlFor={id + "-email"}>Enter your email: </label>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={userData.email}
          id={id + "-email"}
        />
        <br />
        <br />
        <label htmlFor={id + "-comments"}>Enter your Comments: </label>
        <textarea
          name="comments"
          value={userData.comments}
          onChange={handleChange}
          placeholder="Your comments here"
          id={id + "-comments"}
        />

        <br />
        <br />

        <input
          type="checkbox"
          id={id + "-isHuman"}
          checked={userData.isHuman}
          onChange={handleChange}
          name="isHuman"
        />

        <label htmlFor={id + "-isHuman"}> Are you a human? </label>

        <br />
        <br />

        <fieldset>
          <legend>Educational Qualification </legend>

          <input
            id={id + "-PhD"}
            type="radio"
            name="education"
            onChange={handleChange}
            value="PhD"
            checked={userData.education === "PhD"}
          />
          <label htmlFor={id + "-PhD"}>PhD </label>
          <br />
          <input
            id={id + "-masters"}
            type="radio"
            name="education"
            onChange={handleChange}
            value="Master's Degree"
            checked={userData.education === "Master's Degree"}
          />
          <label htmlFor={id + "-masters"}>Master's Degree </label>
          <br />
          <input
            id={id + "-graduation"}
            type="radio"
            name="education"
            onChange={handleChange}
            value="Graduation"
            checked={userData.education === "Graduation"}
          />
          <label htmlFor={id + "-graduation"}>Graduation </label>
          <br />
          <input
            id={id + "-high school"}
            type="radio"
            name="education"
            onChange={handleChange}
            value="High School"
            checked={userData.education === "High School"}
          />
          <label htmlFor={id + "-high school"}>High School </label>
          <br />
        </fieldset>

        <br />
        <br />

        <label htmlFor={id + "fruits"}> Which fruit did you eat today? </label>

        <select
          id={id + "fruits"}
          value={userData.fruits}
          onChange={handleChange}
          name="fruits"
        >
          <option value="">--Choose--</option>
          <option value="Banana">Banana </option>
          <option value="Apple"> Apple</option>
          <option value="Guava"> Guava</option>
          <option value="Watermelom"> Watermelom</option>
          <option value="Grapes"> Grapes</option>
          <option value="Mango"> Mango</option>
          <option value="Papaya"> Papaya</option>
          <option value="Kiwi"> Kiwi</option>
        </select>

        <br />
        <br />

        <button> Submit info</button>
      </form>

      {/* <div>{userData.firstName}</div>
      <div>{userData.lastName}</div>
      <div>{userData.email}</div>
      <div>{userData.comments}</div>
      <div>{userData.education}</div>
      <div>{userData.fruits}</div> */}
      {/* <div>{userData}</div> */}
    </>
  );
}

export default Wording;
