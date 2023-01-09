const pricingDetails = [
  {
    title: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API requests",
    cost: "$0.00",
    transaction: true,
    auth: true,
    identity: true,
    investment: false,
    assets: false,
    liabilities: false,
    income: false,
  },
  {
    title: "Basic Plan",
    description:
      "Launch your project with unlimited requests and no contractual minimums",
    cost: "$249.00",
    transaction: true,
    auth: true,
    identity: true,
    investment: true,
    assets: true,
    liabilities: false,
    income: false,
  },
  {
    title: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    cost: "$499.00",
    transaction: true,
    auth: true,
    identity: true,
    investment: true,
    assets: true,
    liabilities: true,
    income: true,
  },
];

export default pricingDetails;
