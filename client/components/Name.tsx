import { useQuery } from "@apollo/client";
import { GET_USER_NAME_QUERY } from "../utils/shared";

export default function NameComponent() {
  const { data } = useQuery(GET_USER_NAME_QUERY);
  if(!data) {
    return <div>Loading...</div>;
  }

  return <div>{data.name}</div>;
}