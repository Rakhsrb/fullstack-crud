import axios from "axios";
import React, { useContext, useState } from "react";
import { ContextData } from "../context";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const { baseUrl } = useContext(ContextData);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    age: "",
    job: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.post(baseUrl + "create", form);
      setForm({ ...form, userName: "", age: "", job: "", gender: "" });
      setIsloading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="px-2">
      <div className="container flex items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[500px]">
          <h1 className="text-center text-2xl">Add new user</h1>
          <input
            className="bg-slate-200 text-xl px-5 py-3"
            type="text"
            placeholder="Username"
            value={form.userName}
            onChange={handleInputChange}
            name="userName"
          />
          <input
            className="bg-slate-200 text-xl px-5 py-3"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleInputChange}
            name="age"
          />
          <input
            className="bg-slate-200 text-xl px-5 py-3"
            type="text"
            placeholder="Job"
            value={form.job}
            onChange={handleInputChange}
            name="job"
          />
          <div className="flex gap-5 px-3">
            <label>
              <input
                value={"erkak"}
                checked={form.gender === "erkak"}
                name="gender"
                type="radio"
                onChange={handleInputChange}
              />
              Erkak
            </label>
            <label>
              <input
                value={"ayol"}
                checked={form.gender === "ayol"}
                name="gender"
                type="radio"
                onChange={handleInputChange}
              />
              Ayol
            </label>
          </div>
          <button
            className="bg-blue-500 text-white text-2xl py-2"
            type="submit"
          >
            {isLoading ? "Loading" : " Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};
