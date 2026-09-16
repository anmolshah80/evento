import { Suspense } from 'react';

import BookingsList from '@/app/bookings/list';
import BookingsSidebar from '@/app/bookings/sidebar';
import LoadingSpinner from '@/components/loading-spinner';

const BookingsPage = () => {
  return (
    <main className="flex items-center gap-8 py-2 md:py-4">
      <Suspense fallback={<LoadingSpinner />}>
        <BookingsSidebar />
      </Suspense>
      <BookingsList />
    </main>
  );
};

export default BookingsPage;
