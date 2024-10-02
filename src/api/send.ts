import { formType } from "@/utils/FormExtract";
import axios from "axios";

const url = "http://localhost:5173/";

const sendInfo = async (formInfo: formType) => {
  try {
    const { data } = await axios.post(url as string, formInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default sendInfo;
