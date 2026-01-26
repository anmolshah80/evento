import BookingsList from '@/app/bookings/bookings-list';
import BookingsSidebar from '@/app/bookings/sidebar';

const BookingsPage = () => {
  return (
    <main className="flex items-center gap-8 py-2 md:py-4">
      <BookingsSidebar />
      <BookingsList />
    </main>
  );
};

export default BookingsPage;
