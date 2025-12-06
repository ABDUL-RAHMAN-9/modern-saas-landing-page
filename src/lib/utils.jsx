import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs)
{
    // 1. clsx combines all arguments into a string
    // 2. twMerge resolves the Tailwind conflicts
    return twMerge(clsx(inputs));
}