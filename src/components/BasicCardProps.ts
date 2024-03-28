export type BasicCardProps = {
  theindex: number;
  appName: string;
  appDescription: string;
  appUrl: string;
};
export const BasicCardPropsData: BasicCardProps[] = [
  {
    theindex: 1,
    appName: `Registration Manager`,
    appDescription: `This is the description for app 1.`,
    appUrl: `http://127.0.0.1:5174/`,
  },
  {
    theindex: 2,
    appName: `Model Manager`,
    appDescription: `This is the description for app 2.`,
    appUrl: `http://localhost:3000/quickstart?value=Akoms`,
  },
  {
    theindex: 3,
    appName: `Production Manager`,
    appDescription: `This is the description for app 3.`,
    appUrl: `http://localhost:3000/kngcd`,
  },
  {
    theindex: 4,
    appName: `Document Control Manager`,
    appDescription: `This is the description for app 4.`,
    appUrl: `http://localhost:3000/quickstart?`,
  },
  {
    theindex: 5,
    appName: `Time Registry`,
    appDescription: `This is the description for app 5.`,
    appUrl: `http://example.com/app5`,
  },
  {
    theindex: 6,
    appName: `Customer Quoter`,
    appDescription: `Customer Quoter`,
    appUrl: `http://example.com/app6`,
  },
  {
    theindex: 7,
    appName: `Materials Purchasing Manager`,
    appDescription: `Materials Purchasing Manager.`,
    appUrl: `http://example.com/app7`,
  },
  {
    theindex: 8,
    appName: `MMF Production Scheduler`,
    appDescription: `MMF Production Scheduler.`,
    appUrl: `http://example.com/app8`,
  },
  {
    theindex: 9,
    appName: `Massload Production Scheduler`,
    appDescription: `Massload Production Scheduler`,
    appUrl: `http://example.com/app8`,
  },
];
