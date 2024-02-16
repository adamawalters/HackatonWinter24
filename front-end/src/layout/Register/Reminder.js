import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

function Reminder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function handleReminderSubmit(data) {
    /*send to db leveraging employeeId */
    console.log(data)
    navigate(`/employees/${employeeId}`);
  }

  const location = useLocation();  
  const employeeId = location.state.employeeId
  console.log(`employee id Reminder: ${employeeId}`)

  return (
    <div className="page">
      <h1>When would you like to receive a reminder?</h1>
      <form onSubmit={handleSubmit(handleReminderSubmit)}>
        <input
          style={{ width: "100%" }}
          type="time"
          name="time"
          id="time"
          required
          {...register("time")}
        />
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Reminder;
