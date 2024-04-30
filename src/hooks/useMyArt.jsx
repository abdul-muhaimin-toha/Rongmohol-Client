import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMyArt = (user) => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["arts_users", user],
    queryFn: async () => {
      const response = await axios.get(
        `https://rongmohol-server.vercel.app/arts/users/${user.email}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch };
};

export default useMyArt;
