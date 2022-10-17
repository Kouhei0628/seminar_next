import { useContext, useEffect, useState } from "react";
import { RestContext } from "../../context/RestContext";

const TimeComp = () => {
  const [time] = useContext(RestContext);
  return <span>{time}</span>;
};
export default TimeComp;
