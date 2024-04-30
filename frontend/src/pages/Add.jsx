import React from "react";

export const Add = () => {
  return (
    <section className="px-2">
      <div className="container flex items-center justify-center h-screen">
        <form className="flex flex-col gap-4 w-[500px]">
          <h1 className="text-center text-2xl">Add new user</h1>
          <input
            className="bg-slate-200 text-xl px-5 py-3"
            type="text"
            placeholder="Username"
          />
          <input
            className="bg-slate-200 text-xl px-5 py-3"
            type="number"
            placeholder="Age"
          />
          <input
            className="bg-slate-200 text-xl px-5 py-3"
            type="text"
            placeholder="Job"
          />
          <div className="flex gap-5 px-3">
            <label>
              <input
                value={"erkak"}
                // checked={gender === "erkak"}
                name="gender"
                type="radio"
                // onChange={handleInputChange}
              />
              Erkak
            </label>
            <label>
              <input
                value={"ayol"}
                // checked={gender === "ayol"}
                name="gender"
                type="radio"
                // onChange={handleInputChange}
              />
              Ayol
            </label>
          </div>
          <button
            className="bg-blue-500 text-white text-2xl py-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
