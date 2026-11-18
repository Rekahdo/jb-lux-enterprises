"use server";

interface ConversionSuccessResponse {
  success: true;
  result: number;
  date: string;
}

interface ConversionErrorResponse {
  success: false;
  error: string;
}

type ConversionResponse = ConversionSuccessResponse | ConversionErrorResponse;

export async function convertCurrency(
  amount: number,
  from: string,
  to: string,
): Promise<ConversionResponse> {
  if (!amount || isNaN(amount) || amount <= 0) {
    return {
      success: false,
      error: "Please enter a valid amount greater than 0.",
    };
  }

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
      { next: { revalidate: 3600 } },
    );  

    if (!res.ok) {
      throw new Error("Failed to fetch exchange rates.");
    }

    const data = await res.json();

    return {
      success: true,
      result: data.rates[to],
      date: data.date,
    };
  } catch (error) {
    console.error("Currency conversion error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.",
    };
  }
}
