import Introduction from './AboutUs/Introduction';
import Mission from './AboutUs/Mission';
import Vision from './AboutUs/Vision';

export default function AboutUsPage() {
  return (
    <div className='bg-background'>
      <Introduction />
      <Vision />
      <Mission />
    </div>
  );
}
