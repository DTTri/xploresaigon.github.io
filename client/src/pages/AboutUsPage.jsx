import Introduction from './AboutUs/Introduction';
import Mission from './AboutUs/Mission';
import Vision from './AboutUs/Vision';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
export default function AboutUsPage() {
  useEffect(() => {
    ScrollReveal().reveal('.about-us-page > *', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      reset: true,
      delay: 100,
    });
  }, []);

  return (
    <div className='about-us-page bg-background dark:bg-darkBackground'>
      <Introduction />
      <Vision />
      <Mission />
    </div>
  );
}
