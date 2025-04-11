"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAllCryptos } from "../data/allCrypto";


export function useAllCrypto(){

    const query = useQuery<unknown[], Error>({
        queryKey: ["allCrypto"],
        queryFn: async () => {
            const data = fetchAllCryptos();
            return data;
        },
        staleTime: 10000,
    });

    return query;
};