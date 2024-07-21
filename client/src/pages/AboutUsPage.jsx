import Introduction from './AboutUs/Introduction';
import Mission from './AboutUs/Mission';
import Vision from './AboutUs/Vision';

export default function AboutUsPage() {
  return (
    <div className='bg-background dark:bg-darkBackground'>
      <Introduction />
      <Vision />
      <Mission />
    </div>
  );
}
