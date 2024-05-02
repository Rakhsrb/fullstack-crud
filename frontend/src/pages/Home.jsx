import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../context";
import { UseFetch } from "../hooks/UseFetch";
import axios from "axios";

export const Home = () => {
  const { data, setData, isPending, baseUrl } = useContext(ContextData);
  UseFetch(baseUrl);

  const handleDelete = async (id) => {
    try {
      const respone = await axios.delete(baseUrl + "delete/" + id);
      setData(data.filter((it) => it._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="pt-20">
      <div className="container">
        <div className="relative overflow-x-auto rounded-xl">
          {isPending ? (
            <div className="h-[30vh] flex items-center justify-center text-6xl">
              <h1>Loading...</h1>
            </div>
          ) : (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    user name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    age
                  </th>
                  <th scope="col" className="px-6 py-3">
                    job
                  </th>
                  <th scope="col" className="px-6 py-3">
                    gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length <= 0 ? (
                  <tr>
                    <td>NO DATA</td>
                  </tr>
                ) : (
                  data?.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.userName}
                      </th>
                      <td className="px-6 py-4">{item.age}</td>
                      <td className="px-6 py-4">{item.job}</td>
                      <td className="px-6 py-4">{item.gender}</td>
                      <td className="px-6 py-4 flex gap-4">
                        <Link className="bg-blue-400 text-white px-4 py-2">
                          edit
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-red-500 text-white px-4 py-2"
                        >
                          Delete
                        </button>
                        <Link className="bg-green-700 text-white px-4 py-2">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};
