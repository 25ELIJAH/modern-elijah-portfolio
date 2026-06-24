export interface Campaign {
  id: string;
  title: string;
  client: string;
  platform: string;
  result: string;
  image: string;
}

export const marketingCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Campaign Title',
    client: 'Client Name',
    platform: 'Instagram / Google Ads',
    result: '200% increase in engagement',
    image: '/images/marketing/campaign1.jpg',
  },
];
