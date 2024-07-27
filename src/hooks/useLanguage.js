import { useSelector } from "react-redux";

export default function useLanguage() {
  const language = useSelector(
    (state) => state.patient.communication[0].language.coding[0].code
  );
  return language;
}
