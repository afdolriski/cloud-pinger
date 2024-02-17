const clouds = [
  {
    name: "AWS (Amazon Web Service)",
    id: "aws",
    regions: [
      {
        id: "ap-southeast-1",
        label: "Asia Pacific (Singapore)",
        url: "https://ec2.ap-southeast-1.amazonaws.com/ping",
      },
      {
        id: "ap-southeast-2",
        label: "Asia Pacific (Sydney)",
        url: "https://ec2.ap-southeast-2.amazonaws.com/ping",
      },
      {
        id: "ap-southeast-3",
        label: "Asia Pacific (Jakarta)",
        url: "https://ec2.ap-southeast-3.amazonaws.com/ping",
      },
      {
        id: "ap-southeast-4",
        label: "Asia Pacific (Melbourne)",
        url: "https://ec2.ap-southeast-4.amazonaws.com/ping",
      },
      {
        id: "ap-east-1",
        label: "Asia Pacific (Hong Kong)",
        url: "https://ec2.ap-east-1.amazonaws.com/ping",
      },
      {
        id: "ap-south-1",
        label: "Asia Pacific (Mumbai)",
        url: "https://ec2.ap-south-1.amazonaws.com/ping",
      },
      {
        id: "ap-south-2",
        label: "Asia Pacific (Hyderabad)",
        url: "https://ec2.ap-south-2.amazonaws.com/ping",
      },
      {
        id: "ap-northeast-1",
        label: "Asia Pacific (Tokyo)",
        url: "https://ec2.ap-northeast-1.amazonaws.com/ping",
      },
      {
        id: "ap-northeast-2",
        label: "Asia Pacific (Seoul)",
        url: "https://ec2.ap-northeast-2.amazonaws.com/ping",
      },
      {
        id: "ap-northeast-3",
        label: "Asia Pacific (Osaka)",
        url: "https://ec2.ap-northeast-3.amazonaws.com/ping",
      },
      {
        id: "eu-central-1",
        label: "Europe (Frankfurt)",
        url: "https://ec2.eu-central-1.amazonaws.com/ping",
      },
      {
        id: "eu-central-2",
        label: "Europe (Zurich)",
        url: "https://ec2.eu-central-2.amazonaws.com/ping",
      },
      {
        id: "eu-west-1",
        label: "Europe (Ireland)",
        url: "https://ec2.eu-west-1.amazonaws.com/ping",
      },
      {
        id: "eu-west-2",
        label: "Europe (London)",
        url: "https://ec2.eu-west-2.amazonaws.com/ping",
      },
      {
        id: "eu-west-3",
        label: "Europe (Paris)",
        url: "https://ec2.eu-west-3.amazonaws.com/ping",
      },
      {
        id: "eu-south-1",
        label: "Europe (Milan)",
        url: "https://ec2.eu-south-1.amazonaws.com/ping",
      },
      {
        id: "eu-south-2",
        label: "Europe (Spain)",
        url: "https://ec2.eu-south-2.amazonaws.com/ping",
      },
      {
        id: "eu-north-1",
        label: "Europe (Stockholm)",
        url: "https://ec2.eu-north-1.amazonaws.com/ping",
      },
      {
        id: "us-east-2",
        label: "US East (Ohio)",
        url: "https://ec2.us-east-2.amazonaws.com/ping",
      },
      {
        id: "us-east-1",
        label: "US East (Virginia)",
        url: "https://ec2.us-east-1.amazonaws.com/ping",
      },
      {
        id: "us-west-1",
        label: "US West (N. California)",
        url: "https://ec2.us-west-1.amazonaws.com/ping",
      },
      {
        id: "us-west-2",
        label: "US West (Oregon)",
        url: "https://ec2.us-west-2.amazonaws.com/ping",
      },
      {
        id: "af-south-1",
        label: "Africa (Cape Town)",
        url: "https://ec2.af-south-1.amazonaws.com/ping",
      },
      {
        id: "ca-central-1",
        label: "Canada (Central)",
        url: "https://ec2.ca-central-1.amazonaws.com/ping",
      },
      {
        id: "ca-west-1",
        label: "Canada West (Calgary)",
        url: "https://ec2.ca-west-1.amazonaws.com/ping",
      },
      {
        id: "me-south-1",
        label: "Middle East (Bahrain)",
        url: "https://ec2.me-south-1.amazonaws.com/ping",
      },
      {
        id: "me-central-1",
        label: "Middle East (UAE)",
        url: "https://ec2.me-central-1.amazonaws.com/ping",
      },
      {
        id: "sa-east-1",
        label: "South America (São Paulo)",
        url: "https://ec2.sa-east-1.amazonaws.com/ping",
      },
    ],
  },
  {
    name: "Microsoft Azure",
    id: "azure",
    regions: [
      {
        label: "(Asia Pacific) Australia Central",
        id: "australiacentral",
        url: "https://s8australiacentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Australia East",
        id: "australiaeast",
        url: "https://s3australiaeast.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Australia Southeast",
        id: "australiasoutheast",
        url: "https://s8australiasoutheast.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(South America) Brazil South",
        id: "brazilsouth",
        url: "https://s8brazilsouth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Canada) Canada Central",
        id: "canadacentral",
        url: "https://s3canadacentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Canada) Canada East",
        id: "canadaeast",
        url: "https://s3canadaeast.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) Central US",
        id: "centralus",
        url: "https://s3centralus.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Hong Kong",
        id: "eastasia",
        url: "https://s3eastasia.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) East US",
        id: "eastus",
        url: "https://s3eastus.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) East US 2",
        id: "eastus2",
        url: "https://s3eastus2.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) France Central",
        id: "francecentral",
        url: "https://s3francecentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) Germany West Central",
        id: "germanywestcentral",
        url: "https://s3germanywestcentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Middle East) Israel Central",
        id: "israelcentral",
        url: "https://s3israelcentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) Italy North",
        id: "italynorth",
        url: "https://s3italynorth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Japan East",
        id: "japaneast",
        url: "https://s3japaneast.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Japan West",
        id: "japanwest",
        url: "https://s3japanwest.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Central India",
        id: "centralindia",
        url: "https://s3centralindia.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) West India",
        id: "westindia",
        url: "https://s3westindia.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) South India",
        id: "southindia",
        url: "https://s3southindia.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Korea Central",
        id: "koreacentral",
        url: "https://s3koreacentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Korea South",
        id: "koreasouth",
        url: "https://s3koreasouth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) North Central US",
        id: "northcentralus",
        url: "https://s3northcentralus.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) North Europe",
        id: "northeurope",
        url: "https://s3northeurope.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) Norway East",
        id: "norwayeast",
        url: "https://s3norwayeast.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) Poland Central",
        id: "polandcentral",
        url: "https://s3polandcentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Middle East) Qatar Central",
        id: "qatarcentral",
        url: "https://s3qatarcentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Africa) South Africa North",
        id: "southafricanorth",
        url: "https://s3southafricanorth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) South Central US",
        id: "southcentralus",
        url: "https://s8southcentralus.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Asia Pacific) Singapore",
        id: "southeastasia",
        url: "https://s3southeastasia.blob.core.windows.net/public/latency-test.json",
      },

      {
        label: "(Europe) Sweden Central",
        id: "swedencentral",
        url: "https://s3swedencentral.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) Switzerland North",
        id: "switzerlandnorth",
        url: "https://s3switzerlandnorth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Middle East) UAE North",
        id: "uaenorth",
        url: "https://s3uaenorth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) UK South",
        id: "uksouth",
        url: "https://s3uksouth.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) UK West",
        id: "ukwest",
        url: "https://s3ukwest.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) West Central US",
        id: "westcentralus",
        url: "https://s3westcentralus.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(Europe) Netherlands",
        id: "westeurope",
        url: "https://s3westeurope.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) West US",
        id: "westus",
        url: "https://s3westus.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) West US 2",
        id: "westus2",
        url: "https://s3westus2.blob.core.windows.net/public/latency-test.json",
      },
      {
        label: "(US) West US 3",
        id: "westus3",
        url: "https://s3westus3.blob.core.windows.net/public/latency-test.json",
      },
    ],
  },
];

let counters = {};

htmx.on("htmx:beforeSend", function (evt) {
  const key = evt.detail.target.id;
  if (!counters[key]) {
    counters[key] = {
      values: [],
      firstTime: true,
    };
  }
  counters[key]["startTime"] = new Date();
});

// TODO
// 1. Limit the total amount of hits
// 2. Add avg
htmx.on("htmx:afterRequest", function (evt) {
  const key = evt.detail.target.id;
  const target = htmx.find(`#${key}`);
  const current = counters[key];
  const duration = new Date() - current["startTime"];

  if (current.firstTime) {
    current.firstTime = false;
    return;
  }

  target.innerHTML = duration + " ms";
  if (duration < 100) {
    target.style.color = "green";
  } else if (duration > 300) {
    target.style.color = "red";
  } else {
    target.style.color = "orange";
  }
});
