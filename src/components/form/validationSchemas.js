import * as Yup from "yup";

export const dreamSchema = Yup.object().shape({
  descriptionDream: Yup.string()
    .min(10, "Desciption too short!")
    .max(5000, "Desciption too long!")
    .required("Desciption required"),
});
