import { useContext } from "react";
// import AppStateContext from "../contexts/App.StateContext";

export default function useActions() {
  const { addToOrder, remove, removeAll } = useContext();

  return { addToOrder, remove, removeAll };
}
