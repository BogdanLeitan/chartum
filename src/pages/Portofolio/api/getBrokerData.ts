import type { HoldingsResponse } from "./Dtos/HoldingsResponse";

export async function getBrokerData(): Promise<HoldingsResponse> {
    const response = await fetch("http://localhost:8080/api/trading212/holdings");

    if(!response.ok) {
        throw new Error("Failed to fetch broker data");
    } 

    const data = await response.json();

    return data; 
}