import { useContext, useEffect } from "react";
import { ContextData } from "../context";
import axios from "axios";

export const UseFetch = function (url) {
  const { setData, setIsPending } = useContext(ContextData);
  async function getData() {
    try {
      setIsPending(true);
      const response = (await axios.get(url)).data.data;
      setData(response);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, [url]);
};
