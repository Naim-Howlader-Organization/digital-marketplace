export const dollarLoadRates = [
  { min: 20, max: 109, rate: 129 },
  { min: 110, max: 259, rate: 127 },
  { min: 260, max: 549, rate: 125 },
  { min: 550, max: 1049, rate: 124 },
  { min: 1050, max: 2549, rate: 122 },
  { min: 2550, max: 5000, rate: 120 },
];

export const dollarLoadInfo = {
  currentRates: [
    { platform: "Facebook Boost/Ads", rate: 129 },
    { platform: "TikTok Ads", rate: 135 },
  ],
  agencyRates: [
    { platform: "Facebook", rate: 140 },
    { platform: "TikTok", rate: 145 },
  ],
  note: "The more dollars you load, the lower the rate!",
};
