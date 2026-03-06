import GuidebookContent from '../components/GuidebookContent';

export const metadata = {
  title: 'Welcome to Manito Bungalow',
  description: 'Your complete guide to Manito Bungalow. Check-in, WiFi, house manual, local favorites, and book your next stay directly.',
};

export default function WelcomePage() {
  return <GuidebookContent variant="welcome" />;
}
