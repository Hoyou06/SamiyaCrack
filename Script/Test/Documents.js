var obj= 
{
  "originalTransactionId" : 230001249108475,
  "inAppStates" : [
    {
      "originalTransactionId" : 230001249108475,
      "productId" : "com.readdle.ReaddleDocsIPad.subscription.month10_allusers",
      "subscriptionState" : "trial",
      "productName" : "subscription",
      "subscriptionExpirationDate" : "20:42 10/05/2022",
      "isEligibleForIntroPeriod" : false,
      "subscriptionAutoRenewStatus" : "autoRenewOff",
      "type" : "subscription",
      "isInGracePeriod" : false,
      "isInBillingRetryPeriod" : false,
      "entitlements" : [

      ]
    },
    {
      "originalTransactionId" : "0000",
      "entitlements" : [

      ],
      "type" : "custom purchase",
      "productId" : "documents6-user"
    }
  ],
  "chargingPlatform" : "iOS AppStore",
  "receiptStatus" : "ok",
  "bundleId" : "com.readdle.ReaddleDocsIPad",
  "receiptId" : 1554612659000,
  "statisticsInfo" : {
    "events" : [

    ]
  }
};
$done({body: JSON.stringify(obj)});


