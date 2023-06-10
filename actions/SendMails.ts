import axios from "axios";

type Iprops = {
  name: string;
  email: string;
  message: string;
};

const SendMail = ({ name, email, message }: Iprops) => {
  let data = JSON.stringify({
    name,
    email,
    message,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/contact",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  const mail = axios
    .request(config)
    .then((response: any) => {
      return response.data;
    })
    .catch((error:any) => {
      return error;
    });
  
  return mail
};

export default SendMail;
