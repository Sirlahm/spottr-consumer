import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useContactUs = (data:any, setName:any, setEmail:any, setMessage:any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(false);

  const contactus = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        "https://backend-27awp.ondigitalocean.app/contact_us",
        data
      );
      console.log(response);
      setResponseData(response.data);
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error:any) {
      console.log(error.response);
      if (error.response) {
        console.log(error.response.data.message);
        toast.warn(error.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error("Network connection failed", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
    setIsLoading(false);
    setError(true);
  };

  return { isLoading, responseData, error, contactus };
};