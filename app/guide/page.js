import GuidebookContent from '../components/GuidebookContent';

export const metadata = {
  title: 'Guest Guide — Manito Bungalow',
  description: 'Everything you need for your stay at Manito Bungalow in Spokane. Check-in instructions, WiFi, house manual, and local recommendations.',
};

export default function GuidePage() {
  return <GuidebookContent variant="guide" />;
}
