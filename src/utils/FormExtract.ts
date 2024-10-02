import { FormEvent } from "react";

export type formType = {
  position: string;
  ctm_position?: string;
  name: string;
  email: string;
  description?: string;
};

const FormExtract = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const formInfo = Object.fromEntries(data.entries()) as formType;
  const { ctm_position } = formInfo;

  return {
    ...formInfo,
    position: ctm_position ?? formInfo.position,
  };
};

export default FormExtract;
