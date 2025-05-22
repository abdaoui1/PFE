import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ApiResponse } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() : string {
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
}


export function createApiResponse<T>(
  success: boolean,
  message: string | null,
  data: T | null,
  error?: string | null
): ApiResponse<T> {
  return { success, message, data, error: error?? null };
}

export function getErrorMessage( error : unknown) : string {
  if ( error instanceof Error ) return error.message;

  return ( typeof error === 'string')? error : "unknown error";
}