// Booking / calendar availability logic
// Connect to Calendly, Cal.com, or custom availability API here

export interface BookingRequest {
  name: string;
  email: string;
  service: string;
  message?: string;
  date?: string;
}

export async function submitBooking(data: BookingRequest): Promise<{ success: boolean }> {
  // TODO: replace with real API call
  console.log('Booking submitted:', data);
  return { success: true };
}
