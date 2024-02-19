import React, { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { submitReminder } from "../../utils/api";
import ErrorAlert from "../ErrorAlert";

function Reminder({loggedIn}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const location = useLocation();
  const user_id = location?.state?.user_id;

  if(!loggedIn || !user_id) {
    return <Navigate to="/register" replace />
  }

  async function handleReminderSubmit(data) {
    /*send to db leveraging employeeId */
    console.log(data);

    try {
      await submitReminder(user_id, data);
      navigate("/register/mental", {
        replace: true,
        state: {
          user_id: user_id,
        },
      });
    } catch (error) {
      setError(error);
    }
  }


  return (
    <div className="page">
      {error ? <ErrorAlert error={error} /> : null}
      <form
        className="styled-form"
        onSubmit={handleSubmit(handleReminderSubmit)}
      >
        <h1>When would you like to receive a reminder?</h1>
        <input
          style={{ width: "100%" }}
          type="time"
          name="time"
          id="time"
          required
          {...register("user_scheduled_time")}
        />
        {errors["user_scheduled_time"] && (
              <p className="form-error-alert">Please select a date of birth</p>
            )}
        <button type="submit" className="submit-form-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Reminder;
