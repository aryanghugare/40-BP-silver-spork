import React from "react";
import { useParams } from "react-router";
export default function AdminSettings() {
  const params = useParams();
  return <h1>Showing admin settings for id:{params.id}</h1>;
}
