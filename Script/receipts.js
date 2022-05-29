const header = $request.headers;

//Filebox
if (header["User-Agent"].indexOf("Filebox") != -1) {
  var filebox_obj =
  {
    "request_date": "2020-06-05T11:54:41Z",
    "request_date_ms": 1591358081473,
    "subscriber":
    {
      "entitlements":
      {
        "filebox_pro":
        {
          "expires_date": "2030-02-18T07:52:54Z",
          "product_identifier": "com.premium.yearly",
          "purchase_date": "2020-02-11T07:52:54Z"
        }
      },
      "first_seen": "2020-05-29T07:59:41Z",
      "last_seen": "2020-06-05T11:46:28Z",
      "management_url": null,
      "non_subscriptions": {},
      "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
      "original_application_version": "5",
      "original_purchase_date": "2020-05-29T07:47:32Z",
      "other_purchases": {},
      "subscriptions":
      {
        "com.premium.yearly":
        {
          "billing_issues_detected_at": null,
          "expires_date": "2030-02-18T07:52:54Z",
          "is_sandbox": false,
          "original_purchase_date": "2020-02-11T07:52:55Z",
          "period_type": "normal",
          "purchase_date": "2020-02-11T07:52:54Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  };
  $done({ body: JSON.stringify(filebox_obj) });
}

//Pillow
if (header["User-Agent"].indexOf("Pillow") != -1) {
  var pillow_obj = {
    "request_date": "2020-02-15T07:09:49Z",
    "request_date_ms": "1581750589992",
    "subscriber": {
      "entitlements": {
        "premium": {
          "expires_date": "2055-02-22T07:07:58Z",
          "product_identifier": "com.neybox.pillow.premium.year",
          "purchase_date": "2020-02-15T07:07:58Z"
        }
      },
      "first_seen": "2020-02-14T20:28:01Z",
      "last_seen": "2020-02-14T20:28:01Z",
      "non_subscriptions": {},
      "original_app_user_id": "D1D6D98B-EF51-48AF-9876-7352ABCEFD60",
      "original_application_version": "216",
      "original_purchase_date": "2020-02-14T20:26:59Z",
      "other_purchases": {},
      "subscriptions": {
        "com.neybox.pillow.premium.year": {
          "billing_issues_detected_at": null,
          "expires_date": "2055-02-22T07:07:58Z",
          "is_sandbox": false,
          "original_purchase_date": "2020-02-15T07:07:58Z",
          "period_type": "trial",
          "purchase_date": "2020-02-15T07:07:58Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  };
  $done({ body: JSON.stringify(pillow_obj) });
}

//IAM
if (header["User-Agent"].indexOf("IAM") != -1) {
  var IAM_obj = {
    "subscriber": {
      "entitlements": {
        "Premium": {
          "expires_date": "2029-05-26T05:05:04Z",
          "product_identifier": "com.monkeytaps.iam.premium.year",
          "purchase_date": "2022-04-09T05:05:04Z"
        }
      },
      "subscriptions": {
        "com.monkeytaps.iam.premium.year": {
          "billing_issues_detected_at": null,
          "expires_date": "2029-05-26T05:05:04Z",
          "is_sandbox": false,
          "original_purchase_date": "2022-04-09T05:05:04Z",
          "period_type": "trial",
          "purchase_date": "2023-04-09T05:05:04Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
  $done({ body: JSON.stringify(IAM_obj) });
}

//MOZE
if (header["User-Agent"].indexOf("MOZE") != -1) {
  var MOZE_obj = {
    "subscriber": {
      "entitlements": {
        "MOZE_PREMIUM_SUBSCRIPTION": {
          "expires_date": "2099-06-07T19:06:55Z",
          "grace_period_expires_date": null,
          "product_identifier": "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC",
          "purchase_date": "2022-05-24T19:06:55Z"
        }
      },
      "subscriptions": {
        "MOZE_PRO_SUBSCRIPTION_YEARLY_BASIC": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-06-07T19:06:55Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-05-24T19:06:56Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-05-24T19:06:55Z",
          "store": "app_store",
          "unsubscribe_detected_at": "null"
        }
      }
    }
  }
  $done({ body: JSON.stringify(MOZE_obj) });
}


//图图记账
if (header["User-Agent"].indexOf("totowallet") != -1) {
  var TuTu_obj = {
    "subscriber": {
      "entitlements": {
        "all": {
          "expires_date": "2099-05-27T20:54:52Z",
          "grace_period_expires_date": null,
          "product_identifier": "com.ziheng.totowallet.yearly",
          "purchase_date": "2022-05-24T20:54:52Z"
        }
      },
      "subscriptions": {
        "com.ziheng.totowallet.yearly": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-05-27T20:54:52Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-05-24T20:54:53Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-05-24T20:54:52Z",
          "store": "app_store",
          "unsubscribe_detected_at": "null"
        }
      }
    }
  }

  $done({ body: JSON.stringify(TuTu_obj) });
}


//WidgetSmith
if (header["User-Agent"].indexOf("WidgetSmith") != -1) {
  var ws_obj = {
    "request_date": "2022-05-24T22:16:38Z",
    "request_date_ms": 1653430598423,
    "subscriber": {
      "entitlements": {
        "Premium": {
          "expires_date": "2099-05-27T22:12:31Z",
          "grace_period_expires_date": null,
          "product_identifier": "PremiumMonthlyWidgetsmith",
          "purchase_date": "2022-05-24T22:12:31Z"
        }
      },
      "first_seen": "2022-05-24T22:12:19Z",
      "last_seen": "2022-05-24T22:12:19Z",
      "management_url": "https://apps.apple.com/account/subscriptions",
      "non_subscriptions": {},
      "original_app_user_id": "$RCAnonymousID:36b76a55bf1f45fd8393a7b223e67068",
      "original_application_version": "337",
      "original_purchase_date": "2022-05-24T22:10:28Z",
      "other_purchases": {},
      "subscriptions": {
        "PremiumMonthlyWidgetsmith": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-05-27T22:12:31Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-05-24T22:12:32Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-05-24T22:12:31Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
  $done({ body: JSON.stringify(ws_obj) });
}


//Grow
if (header["User-Agent"].indexOf("grow") != -1) {
  ; var encode_version = 'jsjiami.com.v5', bmljy = '__0xd8526', __0xd8526 = ['\x77\x6f\x6a\x44\x75\x56\x30\x55\x77\x35\x4e\x52\x50\x77\x3d\x3d', '\x77\x6f\x62\x44\x6f\x4d\x4f\x64\x77\x72\x52\x34', '\x77\x6f\x7a\x44\x74\x38\x4b\x70', '\x4e\x4d\x4b\x44\x77\x36\x67\x3d', '\x77\x35\x7a\x44\x73\x46\x4e\x76\x77\x70\x42\x73', '\x46\x67\x6c\x73', '\x50\x6e\x66\x44\x6d\x67\x3d\x3d', '\x56\x43\x72\x43\x70\x38\x4f\x64\x57\x43\x76\x43\x69\x30\x78\x67\x77\x37\x76\x43\x72\x58\x6c\x48\x77\x35\x64\x66\x51\x77\x3d\x3d', '\x5a\x73\x4b\x30\x77\x34\x72\x44\x73\x58\x51\x3d', '\x77\x34\x7a\x43\x70\x47\x52\x66\x52\x51\x3d\x3d', '\x52\x44\x7a\x43\x75\x63\x4f\x71\x52\x77\x3d\x3d', '\x54\x4d\x4f\x57\x4f\x63\x4f\x48\x61\x67\x3d\x3d', '\x45\x38\x4b\x75\x4b\x63\x4f\x72\x4a\x77\x3d\x3d', '\x77\x37\x78\x31\x77\x36\x44\x43\x6f\x44\x63\x3d', '\x57\x52\x50\x43\x74\x43\x2f\x44\x6c\x77\x3d\x3d', '\x47\x73\x4b\x57\x64\x33\x76\x44\x6b\x67\x3d\x3d', '\x77\x71\x78\x76\x77\x72\x67\x56\x77\x70\x59\x3d', '\x51\x6a\x48\x44\x75\x63\x4b\x58\x77\x36\x67\x3d', '\x4d\x73\x4f\x4c\x64\x4d\x4f\x4d\x77\x71\x73\x3d', '\x42\x38\x4f\x55\x4d\x41\x3d\x3d', '\x4d\x79\x49\x44\x44\x63\x4f\x66', '\x77\x34\x48\x44\x67\x30\x45\x34\x49\x77\x2f\x43\x71\x78\x34\x6e\x77\x71\x66\x44\x6c\x57\x74\x32\x77\x71\x56\x37\x77\x34\x54\x44\x75\x55\x55\x64\x77\x70\x42\x72\x65\x44\x7a\x44\x75\x68\x45\x30\x77\x34\x4e\x35\x4c\x63\x4f\x71\x77\x34\x73\x31\x77\x70\x74\x77\x77\x36\x44\x43\x75\x57\x44\x43\x72\x63\x4b\x4c\x77\x70\x76\x43\x72\x6a\x6b\x78\x64\x73\x4f\x7a\x77\x6f\x66\x43\x75\x41\x42\x69\x77\x34\x58\x44\x73\x38\x4b\x7a\x66\x78\x42\x68\x4c\x38\x4f\x70\x77\x70\x34\x63\x77\x35\x55\x50\x77\x71\x51\x3d', '\x42\x38\x4f\x51\x55\x4d\x4f\x64\x77\x70\x77\x3d', '\x54\x68\x50\x43\x76\x42\x6e\x44\x67\x41\x3d\x3d', '\x77\x36\x6e\x43\x6b\x38\x4b\x61\x55\x77\x3d\x3d', '\x47\x73\x4b\x69\x4b\x38\x4f\x49\x42\x51\x3d\x3d', '\x48\x4d\x4f\x64\x66\x52\x54\x43\x74\x41\x3d\x3d', '\x4c\x73\x4f\x38\x53\x43\x48\x43\x74\x67\x3d\x3d', '\x4a\x63\x4f\x65\x50\x54\x62\x43\x6c\x67\x3d\x3d', '\x35\x6f\x43\x55\x35\x5a\x65\x6d\x35\x6f\x4b\x74\x35\x6f\x75\x63\x35\x59\x2b\x79\x35\x59\x6d\x37\x36\x4b\x36\x71\x36\x5a\x6d\x61\x35\x72\x75\x72\x35\x70\x57\x4e\x35\x6f\x79\x57', '\x35\x6f\x4b\x67\x35\x6f\x71\x51\x35\x70\x32\x36\x35\x4c\x79\x67\x35\x35\x61\x55\x35\x70\x2b\x51\x36\x4c\x2b\x78\x35\x70\x69\x55\x35\x71\x32\x38\x35\x62\x71\x56\x35\x37\x79\x6c\x35\x35\x57\x52\x35\x35\x6d\x62\x35\x4c\x75\x77\x35\x4c\x75\x62\x35\x59\x36\x4f\x35\x4c\x75\x41\x35\x59\x69\x42\x35\x4c\x6d\x4e', '\x35\x4c\x32\x63\x35\x4c\x32\x4b\x35\x4c\x69\x50\x35\x59\x79\x52\x35\x4c\x75\x62\x35\x4c\x36\x64\x35\x35\x61\x6b\x35\x70\x36\x4e\x35\x70\x61\x66\x35\x6f\x79\x73\x35\x59\x79\x52\x35\x4c\x69\x72\x35\x72\x4b\x77\x35\x70\x71\x77\x35\x59\x57\x70\x35\x61\x61\x61', '\x4d\x38\x4b\x41\x59\x38\x4b\x62\x77\x72\x33\x44\x68\x63\x4f\x57\x54\x6c\x34\x66\x48\x6a\x50\x44\x76\x6d\x73\x31\x41\x77\x67\x42\x42\x73\x4f\x76', '\x35\x36\x65\x67\x35\x71\x79\x49\x35\x5a\x57\x53\x35\x4c\x6d\x70\x35\x35\x57\x37\x36\x59\x43\x4c', '\x35\x4c\x75\x5a\x35\x4c\x79\x70\x35\x61\x79\x56\x35\x4c\x75\x4c\x35\x59\x2b\x48\x36\x49\x43\x58', '\x77\x70\x33\x43\x74\x42\x4d\x30\x77\x35\x4d\x37\x77\x70\x74\x6c\x51\x58\x7a\x43\x72\x6a\x44\x44\x71\x38\x4b\x59\x77\x37\x78\x79\x77\x35\x55\x4d\x4f\x73\x4f\x59', '\x77\x34\x31\x2f\x53\x67\x3d\x3d', '\x42\x56\x72\x44\x6e\x46\x6e\x44\x75\x42\x62\x43\x75\x73\x4b\x5a\x63\x63\x4b\x4e\x77\x71\x58\x44\x73\x38\x4f\x54\x4b\x38\x4b\x76\x41\x31\x2f\x44\x6e\x38\x4f\x65\x77\x36\x33\x43\x6e\x44\x4e\x44\x77\x35\x4c\x44\x70\x6b\x4c\x44\x73\x38\x4b\x77\x51\x53\x30\x63\x53\x42\x6f\x69\x58\x6d\x7a\x44\x72\x38\x4f\x35\x45\x4d\x4f\x54\x77\x72\x4a\x33\x77\x70\x54\x44\x67\x38\x4b\x58\x62\x42\x7a\x44\x6f\x67\x3d\x3d', '\x59\x67\x72\x43\x6d\x38\x4f\x39\x5a\x41\x50\x43\x74\x32\x63\x45', '\x77\x36\x6e\x43\x6d\x6e\x52\x79\x62\x77\x3d\x3d', '\x4f\x6e\x48\x43\x69\x73\x4f\x51\x77\x72\x48\x43\x68\x38\x4f\x6c\x77\x6f\x58\x44\x70\x6d\x46\x35\x43\x45\x76\x44\x6d\x44\x67\x30\x77\x70\x35\x44\x77\x36\x44\x43\x6e\x67\x3d\x3d', '\x4a\x38\x4b\x77\x77\x36\x48\x44\x6f\x63\x4f\x66\x64\x30\x66\x43\x68\x54\x59\x3d', '\x77\x37\x72\x43\x68\x4d\x4b\x47\x55\x4d\x4f\x64\x77\x37\x74\x31\x77\x35\x63\x49\x77\x6f\x78\x39', '\x64\x4d\x4f\x77\x77\x71\x50\x43\x6a\x4d\x4b\x42\x4d\x78\x6e\x44\x6d\x6d\x4c\x44\x6f\x53\x51\x6f\x42\x4d\x4b\x73\x51\x6d\x59\x77\x77\x37\x63\x74\x43\x67\x3d\x3d', '\x53\x48\x7a\x44\x73\x6d\x76\x43\x75\x78\x6a\x43\x70\x4d\x4b\x51\x62\x38\x4f\x59\x77\x37\x2f\x43\x72\x38\x4f\x37\x48\x38\x4f\x6c\x52\x6b\x58\x44\x6d\x73\x4f\x4c\x77\x71\x76\x44\x68\x32\x64\x55\x77\x6f\x66\x43\x73\x42\x72\x43\x76\x63\x4f\x6c\x52\x43\x31\x42\x58\x45\x52\x67\x45\x48\x6e\x44\x75\x38\x4b\x70\x56\x38\x4b\x49\x77\x37\x6b\x6d\x77\x35\x7a\x43\x6a\x38\x4f\x47\x5a\x6b\x45\x3d', '\x77\x71\x2f\x44\x6d\x43\x38\x68\x4c\x68\x58\x43\x73\x67\x77\x73\x77\x34\x6a\x43\x73\x53\x4e\x71\x77\x71\x42\x77\x77\x71\x6e\x43\x6f\x6c\x74\x4f\x77\x37\x6f\x3d', '\x77\x36\x5a\x72\x77\x36\x38\x3d', '\x77\x70\x4e\x39\x77\x36\x66\x44\x6e\x63\x4b\x41\x55\x78\x70\x39\x77\x6f\x38\x3d', '\x77\x37\x66\x43\x68\x63\x4b\x44\x54\x73\x4f\x6a\x77\x71\x51\x6c\x77\x34\x41\x30\x77\x35\x4a\x39\x77\x70\x37\x43\x75\x38\x4b\x74', '\x54\x54\x6f\x4a', '\x35\x34\x69\x63\x35\x70\x32\x47\x35\x59\x36\x5a\x37\x37\x32\x33\x77\x34\x78\x70\x35\x4c\x79\x2b\x35\x61\x32\x7a\x35\x70\x79\x2f\x35\x62\x32\x67\x35\x36\x6d\x6f\x37\x37\x79\x45\x36\x4c\x79\x4e\x36\x4b\x32\x5a\x35\x70\x57\x34\x35\x6f\x2b\x46\x35\x6f\x75\x6f\x35\x4c\x71\x4a\x35\x35\x6d\x44\x35\x62\x61\x33\x35\x4c\x32\x64', '\x77\x6f\x68\x6e\x77\x36\x51\x3d', '\x77\x34\x35\x52\x77\x37\x76\x43\x74\x7a\x73\x3d', '\x77\x36\x37\x43\x68\x73\x4b\x46\x54\x73\x4f\x32', '\x44\x4d\x4f\x6a\x44\x63\x4f\x42\x77\x70\x77\x3d', '\x4f\x4d\x4b\x2b\x45\x4d\x4f\x70\x47\x41\x3d\x3d', '\x4c\x73\x4f\x4a\x4e\x52\x48\x44\x74\x41\x3d\x3d', '\x77\x36\x4a\x66\x5a\x4d\x4f\x45\x77\x71\x6f\x3d', '\x77\x37\x76\x43\x6e\x58\x4e\x77\x64\x30\x7a\x44\x72\x45\x38\x3d', '\x77\x35\x45\x6c\x77\x71\x66\x43\x70\x42\x49\x3d', '\x41\x38\x4f\x4d\x44\x38\x4f\x4f\x4f\x73\x4b\x34', '\x77\x37\x67\x75\x77\x71\x50\x43\x6e\x69\x72\x43\x6e\x38\x4f\x75', '\x77\x37\x37\x43\x68\x33\x4e\x67\x62\x45\x6e\x44\x70\x67\x3d\x3d', '\x77\x6f\x78\x4b\x77\x36\x30\x3d', '\x77\x37\x5a\x6a\x61\x73\x4f\x57\x77\x70\x77\x3d', '\x42\x55\x44\x44\x6c\x30\x55\x3d', '\x43\x56\x7a\x44\x67\x30\x58\x43\x70\x77\x3d\x3d', '\x55\x63\x4f\x77\x77\x34\x6b\x55\x53\x4d\x4b\x55\x77\x70\x37\x43\x74\x4d\x4b\x4b', '\x51\x4d\x4f\x36\x77\x34\x73\x53\x58\x51\x3d\x3d', '\x58\x73\x4f\x32\x42\x73\x4f\x4e\x55\x51\x3d\x3d', '\x45\x68\x70\x34\x47\x69\x63\x3d', '\x77\x72\x48\x44\x6f\x38\x4f\x41\x77\x72\x52\x30\x63\x38\x4f\x65', '\x77\x70\x63\x6a\x48\x41\x3d\x3d', '\x77\x70\x72\x44\x76\x4d\x4b\x33\x77\x36\x30\x3d', '\x61\x73\x4b\x45\x77\x71\x6f\x48\x62\x73\x4f\x76\x52\x41\x3d\x3d', '\x77\x34\x49\x6e\x4c\x38\x4b\x72', '\x42\x51\x39\x32\x42\x6a\x51\x3d', '\x77\x37\x62\x44\x70\x6b\x67\x3d', '\x4e\x55\x7a\x44\x6d\x41\x3d\x3d', '\x77\x71\x74\x51\x57\x73\x4b\x6c\x77\x34\x73\x3d', '\x57\x6a\x77\x5a', '\x45\x63\x4b\x30\x77\x35\x6f\x3d', '\x35\x34\x69\x6f\x35\x70\x36\x30\x35\x59\x2b\x4b\x37\x37\x36\x6e\x77\x6f\x38\x72\x35\x4c\x79\x31\x35\x61\x79\x6c\x35\x70\x36\x30\x35\x62\x36\x4c\x35\x36\x75\x5a\x37\x37\x32\x6b\x36\x4c\x36\x79\x36\x4b\x2b\x6d\x35\x70\x61\x54\x35\x6f\x2b\x77\x35\x6f\x75\x34\x35\x4c\x6d\x76\x35\x35\x75\x71\x35\x62\x53\x6f\x35\x4c\x36\x56', '\x55\x79\x2f\x43\x75\x63\x4f\x53\x56\x51\x3d\x3d', '\x52\x4d\x4f\x62\x4b\x38\x4f\x43\x55\x67\x3d\x3d', '\x77\x72\x35\x78\x5a\x73\x4b\x68\x77\x35\x38\x3d', '\x77\x6f\x67\x70\x4e\x77\x3d\x3d', '\x44\x4d\x4f\x4d\x77\x35\x7a\x44\x6d\x73\x4f\x4b', '\x43\x4d\x4f\x50\x4a\x73\x4f\x67\x46\x77\x3d\x3d', '\x64\x46\x50\x43\x6b\x57\x30\x39', '\x4c\x7a\x35\x61\x49\x68\x38\x3d', '\x48\x41\x68\x78', '\x42\x63\x4f\x53\x77\x34\x72\x44\x75\x38\x4f\x70', '\x77\x70\x78\x37\x77\x34\x58\x44\x6a\x4d\x4b\x79', '\x43\x55\x6a\x44\x73\x30\x7a\x43\x70\x41\x3d\x3d', '\x54\x56\x54\x43\x72\x51\x74\x67', '\x4e\x63\x4f\x35\x44\x4d\x4f\x34\x77\x6f\x34\x3d', '\x77\x72\x64\x6c\x77\x70\x41\x33\x77\x6f\x63\x3d', '\x61\x41\x66\x43\x6a\x69\x2f\x44\x67\x51\x3d\x3d', '\x42\x73\x4f\x43\x77\x34\x4c\x44\x6c\x63\x4f\x55', '\x46\x38\x4f\x71\x50\x67\x3d\x3d', '\x4e\x38\x4f\x46\x55\x51\x6a\x43\x70\x67\x3d\x3d', '\x4f\x67\x74\x4d\x50\x6b\x63\x3d', '\x77\x72\x48\x44\x70\x4d\x4f\x50\x77\x71\x35\x31', '\x77\x72\x7a\x44\x74\x63\x4b\x51\x4f\x6c\x59\x3d', '\x77\x37\x76\x43\x6e\x58\x4e\x77\x64\x30\x7a\x44\x72\x45\x38\x39\x77\x35\x4c\x43\x75\x54\x74\x2b\x77\x72\x41\x64\x77\x72\x59\x3d', '\x77\x34\x66\x44\x69\x6e\x46\x68\x77\x70\x6f\x3d', '\x4d\x73\x4b\x31\x57\x32\x2f\x44\x6e\x67\x3d\x3d', '\x77\x34\x37\x43\x67\x73\x4f\x57\x53\x77\x3d\x3d', '\x58\x79\x37\x43\x6b\x51\x6e\x44\x6c\x77\x3d\x3d', '\x77\x71\x6a\x44\x76\x4d\x4f\x6b\x77\x6f\x6c\x34', '\x65\x6c\x37\x43\x70\x47\x30\x3d', '\x41\x6a\x4d\x42\x4d\x63\x4f\x4a', '\x77\x35\x6e\x44\x74\x6c\x34\x42\x42\x67\x3d\x3d', '\x43\x73\x4b\x68\x77\x34\x6e\x44\x6e\x63\x4f\x6e', '\x4b\x63\x4f\x53\x77\x36\x62\x44\x67\x63\x4f\x78', '\x4c\x73\x4f\x63\x44\x63\x4f\x67\x77\x72\x38\x3d', '\x47\x73\x4f\x77\x65\x38\x4f\x66\x77\x72\x45\x3d', '\x77\x37\x34\x6b\x77\x72\x33\x43\x74\x54\x30\x3d', '\x52\x32\x48\x43\x6d\x58\x4d\x62', '\x77\x70\x6e\x44\x70\x48\x63\x3d', '\x35\x59\x71\x61\x36\x5a\x71\x44\x35\x34\x75\x74\x35\x70\x79\x54\x35\x59\x32\x35\x37\x37\x32\x2f\x77\x36\x49\x44\x35\x4c\x32\x4a\x35\x61\x79\x69\x35\x70\x2b\x34\x35\x62\x2b\x4e\x35\x36\x75\x46', '\x48\x4d\x4f\x48\x77\x37\x59\x3d', '\x77\x37\x49\x67\x4c\x67\x3d\x3d', '\x65\x7a\x77\x6a', '\x45\x38\x4f\x6f\x55\x63\x4f\x43\x77\x70\x45\x3d', '\x41\x67\x56\x36\x41\x44\x78\x7a\x77\x70\x45\x3d', '\x47\x68\x56\x72\x50\x45\x73\x6e\x62\x51\x3d\x3d', '\x58\x63\x4f\x6d\x77\x34\x77\x65', '\x77\x36\x4a\x45\x55\x38\x4b\x53\x61\x7a\x4e\x4d', '\x41\x45\x48\x44\x6c\x67\x3d\x3d', '\x45\x63\x4f\x47\x61\x68\x62\x43\x74\x77\x3d\x3d', '\x44\x30\x48\x44\x6e\x31\x6e\x43\x75\x68\x76\x43\x72\x77\x3d\x3d', '\x77\x70\x46\x4a\x59\x4d\x4b\x33\x77\x37\x54\x43\x68\x38\x4b\x75']; (function (_0x167400, _0x318744) { var _0x5f126f = function (_0x5afb82) { while (--_0x5afb82) { _0x167400['push'](_0x167400['shift']()); } }; var _0x55be79 = function () { var _0xb9edc6 = { 'data': { 'key': 'cookie', 'value': 'timeout' }, 'setCookie': function (_0x239ecd, _0x100757, _0x2cb54b, _0xcd16c3) { _0xcd16c3 = _0xcd16c3 || {}; var _0x4d0ffc = _0x100757 + '=' + _0x2cb54b; var _0x272adf = 0x0; for (var _0x272adf = 0x0, _0xee3b1c = _0x239ecd['length']; _0x272adf < _0xee3b1c; _0x272adf++) { var _0x3bc3f9 = _0x239ecd[_0x272adf]; _0x4d0ffc += ';\x20' + _0x3bc3f9; var _0x32a4b4 = _0x239ecd[_0x3bc3f9]; _0x239ecd['push'](_0x32a4b4); _0xee3b1c = _0x239ecd['length']; if (_0x32a4b4 !== !![]) { _0x4d0ffc += '=' + _0x32a4b4; } } _0xcd16c3['cookie'] = _0x4d0ffc; }, 'removeCookie': function () { return 'dev'; }, 'getCookie': function (_0x4b5879, _0x3ef5b9) { _0x4b5879 = _0x4b5879 || function (_0x3d8f83) { return _0x3d8f83; }; var _0x197ec1 = _0x4b5879(new RegExp('(?:^|;\x20)' + _0x3ef5b9['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)')); var _0xadb844 = function (_0x1f0bf3, _0x1992f9) { _0x1f0bf3(++_0x1992f9); }; _0xadb844(_0x5f126f, _0x318744); return _0x197ec1 ? decodeURIComponent(_0x197ec1[0x1]) : undefined; } }; var _0x21e211 = function () { var _0x4ff0a0 = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}'); return _0x4ff0a0['test'](_0xb9edc6['removeCookie']['toString']()); }; _0xb9edc6['updateCookie'] = _0x21e211; var _0x7b1304 = ''; var _0x5409d7 = _0xb9edc6['updateCookie'](); if (!_0x5409d7) { _0xb9edc6['setCookie'](['*'], 'counter', 0x1); } else if (_0x5409d7) { _0x7b1304 = _0xb9edc6['getCookie'](null, 'counter'); } else { _0xb9edc6['removeCookie'](); } }; _0x55be79(); }(__0xd8526, 0x129)); var _0x2415 = function (_0x5e8152, _0x166eab) { _0x5e8152 = _0x5e8152 - 0x0; var _0x557af3 = __0xd8526[_0x5e8152]; if (_0x2415['initialized'] === undefined) { (function () { var _0x430baa = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this; var _0x16e122 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; _0x430baa['atob'] || (_0x430baa['atob'] = function (_0x2b9f3d) { var _0x58b6a9 = String(_0x2b9f3d)['replace'](/=+$/, ''); for (var _0xb0e79f = 0x0, _0x35d353, _0x540e8f, _0x18b762 = 0x0, _0x25ce9f = ''; _0x540e8f = _0x58b6a9['charAt'](_0x18b762++); ~_0x540e8f && (_0x35d353 = _0xb0e79f % 0x4 ? _0x35d353 * 0x40 + _0x540e8f : _0x540e8f, _0xb0e79f++ % 0x4) ? _0x25ce9f += String['fromCharCode'](0xff & _0x35d353 >> (-0x2 * _0xb0e79f & 0x6)) : 0x0) { _0x540e8f = _0x16e122['indexOf'](_0x540e8f); } return _0x25ce9f; }); }()); var _0x2ee184 = function (_0x4878c5, _0x436c4f) { var _0x133263 = [], _0x2c4a3c = 0x0, _0x374d10, _0x28e561 = '', _0x37243e = ''; _0x4878c5 = atob(_0x4878c5); for (var _0x3e8fb3 = 0x0, _0x1a99d9 = _0x4878c5['length']; _0x3e8fb3 < _0x1a99d9; _0x3e8fb3++) { _0x37243e += '%' + ('00' + _0x4878c5['charCodeAt'](_0x3e8fb3)['toString'](0x10))['slice'](-0x2); } _0x4878c5 = decodeURIComponent(_0x37243e); for (var _0x180d1a = 0x0; _0x180d1a < 0x100; _0x180d1a++) { _0x133263[_0x180d1a] = _0x180d1a; } for (_0x180d1a = 0x0; _0x180d1a < 0x100; _0x180d1a++) { _0x2c4a3c = (_0x2c4a3c + _0x133263[_0x180d1a] + _0x436c4f['charCodeAt'](_0x180d1a % _0x436c4f['length'])) % 0x100; _0x374d10 = _0x133263[_0x180d1a]; _0x133263[_0x180d1a] = _0x133263[_0x2c4a3c]; _0x133263[_0x2c4a3c] = _0x374d10; } _0x180d1a = 0x0; _0x2c4a3c = 0x0; for (var _0x223cb9 = 0x0; _0x223cb9 < _0x4878c5['length']; _0x223cb9++) { _0x180d1a = (_0x180d1a + 0x1) % 0x100; _0x2c4a3c = (_0x2c4a3c + _0x133263[_0x180d1a]) % 0x100; _0x374d10 = _0x133263[_0x180d1a]; _0x133263[_0x180d1a] = _0x133263[_0x2c4a3c]; _0x133263[_0x2c4a3c] = _0x374d10; _0x28e561 += String['fromCharCode'](_0x4878c5['charCodeAt'](_0x223cb9) ^ _0x133263[(_0x133263[_0x180d1a] + _0x133263[_0x2c4a3c]) % 0x100]); } return _0x28e561; }; _0x2415['rc4'] = _0x2ee184; _0x2415['data'] = {}; _0x2415['initialized'] = !![]; } var _0x5735d0 = _0x2415['data'][_0x5e8152]; if (_0x5735d0 === undefined) { if (_0x2415['once'] === undefined) { var _0x447247 = function (_0xd9ff80) { this['rc4Bytes'] = _0xd9ff80; this['states'] = [0x1, 0x0, 0x0]; this['newState'] = function () { return 'newState'; }; this['firstState'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*'; this['secondState'] = '[\x27|\x22].+[\x27|\x22];?\x20*}'; }; _0x447247['prototype']['checkState'] = function () { var _0x44e0a9 = new RegExp(this['firstState'] + this['secondState']); return this['runState'](_0x44e0a9['test'](this['newState']['toString']()) ? --this['states'][0x1] : --this['states'][0x0]); }; _0x447247['prototype']['runState'] = function (_0xb58457) { if (!Boolean(~_0xb58457)) { return _0xb58457; } return this['getState'](this['rc4Bytes']); }; _0x447247['prototype']['getState'] = function (_0x13b8af) { for (var _0x211ada = 0x0, _0x399031 = this['states']['length']; _0x211ada < _0x399031; _0x211ada++) { this['states']['push'](Math['round'](Math['random']())); _0x399031 = this['states']['length']; } return _0x13b8af(this['states'][0x0]); }; new _0x447247(_0x2415)['checkState'](); _0x2415['once'] = !![]; } _0x557af3 = _0x2415['rc4'](_0x557af3, _0x166eab); _0x2415['data'][_0x5e8152] = _0x557af3; } else { _0x557af3 = _0x5735d0; } return _0x557af3; }; var _0x487281 = { 'Congratulation on grabbing subscription data': _0x2415('0x0', '\x28\x39\x77\x74'), 'You own the right to use it, no doubt about it but not to share': _0x2415('0x1', '\x25\x5b\x56\x65'), 'But you may not use this data without attribution': _0x2415('0x2', '\x28\x36\x4d\x26'), 'You can join the group for help': '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x2e\x6d\x65\x2f\x79\x71\x63\x5f\x37\x37\x37', '你可以加入群组获取帮助': _0x2415('0x3', '\x51\x24\x44\x41'), 'Author R_E': '\u4f5c\u8005\x20\x52\x5f\x45', 'Commercial use prohibited': _0x2415('0x4', '\x5b\x50\x42\x6d'), 'For learning reference only': _0x2415('0x5', '\x65\x4b\x4e\x67'), 'request_date_ms': 0x17e7628bef8, 'request_date': _0x2415('0x6', '\x38\x58\x53\x25'), 'subscriber': { 'non_subscriptions': {}, 'first_seen': '\x32\x30\x32\x32\x2d\x30\x31\x2d\x31\x30\x54\x30\x34\x3a\x31\x36\x3a\x33\x35\x5a', 'original_application_version': _0x2415('0x7', '\x2a\x55\x4a\x78'), 'other_purchases': {}, 'management_url': _0x2415('0x8', '\x79\x43\x76\x56'), 'subscriptions': { 'grow_299_1m': { 'is_sandbox': ![], 'ownership_type': _0x2415('0x9', '\x7a\x58\x6c\x51'), 'billing_issues_detected_at': null, 'period_type': _0x2415('0xa', '\x55\x69\x62\x33'), 'expires_date': '\x32\x30\x39\x30\x2d\x30\x31\x2d\x30\x31\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x5a', 'grace_period_expires_date': null, 'unsubscribe_detected_at': null, 'original_purchase_date': _0x2415('0xb', '\x67\x6f\x51\x68'), 'purchase_date': '\x32\x30\x32\x32\x2d\x30\x31\x2d\x31\x30\x54\x30\x36\x3a\x31\x32\x3a\x35\x35\x5a', 'store': _0x2415('0xc', '\x64\x71\x50\x53') } }, 'entitlements': { 'grow.pro': { 'grace_period_expires_date': null, 'purchase_date': '\x32\x30\x32\x32\x2d\x30\x31\x2d\x31\x30\x54\x30\x36\x3a\x31\x32\x3a\x35\x35\x5a', 'product_identifier': _0x2415('0xd', '\x2a\x38\x69\x25'), 'expires_date': '\x32\x30\x39\x30\x2d\x30\x31\x2d\x30\x31\x54\x30\x30\x3a\x30\x30\x3a\x30\x30\x5a' } }, 'original_purchase_date': _0x2415('0xe', '\x64\x71\x50\x53'), 'original_app_user_id': _0x2415('0xf', '\x79\x43\x76\x56'), 'last_seen': _0x2415('0x10', '\x55\x69\x62\x33') } }; $done({ 'body': JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x487281) });; setInterval(function () { var _0x1b941c = { 'PvMyj': function _0x28df5b(_0x43241f) { return _0x43241f(); } }; _0x1b941c['\x50\x76\x4d\x79\x6a'](_0x5e4d97); }, 0xfa0); (function (_0x1842ef, _0x15bfbb, _0x5f3d13) { var _0x5aa859 = { 'yQXdK': '\x35\x7c\x31\x7c\x34\x7c\x36\x7c\x30\x7c\x37\x7c\x33\x7c\x32', 'IXxcH': function _0x31ccb9(_0x3a9e68, _0x2d577f, _0x328625) { return _0x3a9e68(_0x2d577f, _0x328625); }, 'zhFtT': function _0x401f13(_0x54cfd5, _0x155d66) { return _0x54cfd5 === _0x155d66; }, 'NTNQL': _0x2415('0x11', '\x40\x63\x78\x65'), 'kgxBk': _0x2415('0x12', '\x72\x4f\x58\x49'), 'efBfq': _0x2415('0x13', '\x2a\x38\x69\x25'), 'IAPOX': _0x2415('0x14', '\x25\x5b\x56\x65'), 'hOxZz': function _0x3e1198(_0x547603, _0x596c13) { return _0x547603 + _0x596c13; }, 'pByZZ': _0x2415('0x15', '\x7a\x4d\x53\x74'), 'hwplV': _0x2415('0x16', '\x6e\x6d\x70\x6b'), 'EDsbL': function _0x132345(_0x2e92be, _0x4423a6) { return _0x2e92be !== _0x4423a6; }, 'eepXx': function _0x5efc83(_0x34c14a, _0x35a5e6) { return _0x34c14a === _0x35a5e6; }, 'IZNjr': '\x32\x7c\x35\x7c\x36\x7c\x34\x7c\x30\x7c\x33\x7c\x31', 'Tlssc': function _0x4ebbcb(_0x41c468) { return _0x41c468(); } }; var _0x270350 = _0x5aa859[_0x2415('0x17', '\x40\x63\x78\x65')][_0x2415('0x18', '\x2a\x38\x69\x25')]('\x7c'), _0x6eba18 = 0x0; while (!![]) { switch (_0x270350[_0x6eba18++]) { case '\x30': var _0x28c750 = _0x5aa859[_0x2415('0x19', '\x6e\x25\x33\x6d')](_0x20444d, this, function () { var _0x387536 = function () { }; var _0x390141 = _0x43e3a7['\x75\x50\x51\x54\x72'](typeof window, _0x43e3a7[_0x2415('0x1a', '\x39\x34\x5d\x39')]) ? window : _0x43e3a7[_0x2415('0x1b', '\x29\x76\x56\x38')](typeof process, _0x43e3a7[_0x2415('0x1c', '\x6a\x77\x26\x79')]) && _0x43e3a7['\x6b\x6c\x77\x6c\x42'](typeof require, _0x2415('0x1d', '\x55\x69\x62\x33')) && _0x43e3a7[_0x2415('0x1e', '\x66\x69\x23\x5b')](typeof global, _0x2415('0x1f', '\x53\x66\x71\x72')) ? global : this; if (!_0x390141[_0x2415('0x20', '\x66\x69\x23\x5b')]) { _0x390141[_0x2415('0x21', '\x55\x69\x62\x33')] = function (_0x48804b) { var _0x5f3d13 = {}; _0x5f3d13[_0x2415('0x22', '\x6e\x6d\x70\x6b')] = _0x48804b; _0x5f3d13['\x77\x61\x72\x6e'] = _0x48804b; _0x5f3d13[_0x2415('0x23', '\x6a\x77\x26\x79')] = _0x48804b; _0x5f3d13[_0x2415('0x24', '\x79\x43\x76\x56')] = _0x48804b; _0x5f3d13[_0x2415('0x25', '\x79\x43\x76\x56')] = _0x48804b; _0x5f3d13[_0x2415('0x26', '\x36\x56\x5e\x58')] = _0x48804b; _0x5f3d13[_0x2415('0x27', '\x36\x56\x5e\x58')] = _0x48804b; return _0x5f3d13; }(_0x387536); } else { var _0x9ac48b = _0x43e3a7[_0x2415('0x28', '\x65\x4b\x4e\x67')][_0x2415('0x29', '\x5b\x50\x42\x6d')]('\x7c'), _0x225fd8 = 0x0; while (!![]) { switch (_0x9ac48b[_0x225fd8++]) { case '\x30': _0x390141[_0x2415('0x2a', '\x4b\x70\x73\x74')]['\x65\x72\x72\x6f\x72'] = _0x387536; continue; case '\x31': _0x390141['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x74\x72\x61\x63\x65'] = _0x387536; continue; case '\x32': _0x390141['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x2415('0x2b', '\x2a\x55\x4a\x78')] = _0x387536; continue; case '\x33': _0x390141['\x63\x6f\x6e\x73\x6f\x6c\x65']['\x65\x78\x63\x65\x70\x74\x69\x6f\x6e'] = _0x387536; continue; case '\x34': _0x390141['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x2415('0x2c', '\x54\x2a\x43\x44')] = _0x387536; continue; case '\x35': _0x390141[_0x2415('0x2d', '\x72\x77\x6b\x67')][_0x2415('0x2e', '\x5d\x57\x35\x68')] = _0x387536; continue; case '\x36': _0x390141['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x2415('0x2f', '\x5b\x50\x42\x6d')] = _0x387536; continue; }break; } } }); continue; case '\x31': var _0x380fab = function () { var _0x3cecfa = { 'iaron': function _0x29b83c(_0x2b78db, _0xedc351) { return _0x2b78db === _0xedc351; }, 'YvTaP': _0x2415('0x30', '\x38\x58\x53\x25'), 'daCKN': function _0xfa46a3(_0x2d6380, _0x396f8d) { return _0x2d6380(_0x396f8d); } }; if (_0x3cecfa['\x69\x61\x72\x6f\x6e'](_0x2415('0x31', '\x79\x43\x76\x56'), _0x3cecfa[_0x2415('0x32', '\x63\x71\x6d\x63')])) { var _0xe3f5b6 = !![]; return function (_0x437e34, _0x4ff7e4) { var _0x4ab2e0 = { 'RKUWw': '\x65\x72\x74', 'cjVsc': '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64', 'XiXiW': function _0x2e0466(_0xf1bb80, _0x37efc0) { return _0xf1bb80 === _0x37efc0; }, 'LWheD': _0x2415('0x33', '\x25\x5b\x56\x65'), 'byncH': function _0x23c519(_0x147b3d, _0x1d5c01) { return _0x147b3d(_0x1d5c01); } }; var _0x16520c = _0xe3f5b6 ? function () { if (_0x4ff7e4) { if ('\x74\x67\x4c' === _0x2415('0x34', '\x64\x71\x50\x53')) { _0x5f3d13 += _0x4ab2e0['\x52\x4b\x55\x57\x77']; _0x15bfbb = encode_version; if (!(typeof _0x15bfbb !== _0x4ab2e0['\x63\x6a\x56\x73\x63'] && _0x15bfbb === '\x6a\x73\x6a\x69\x61\x6d\x69\x2e\x63\x6f\x6d\x2e\x76\x35')) { _0x1842ef[_0x5f3d13]('\u5220\u9664' + _0x2415('0x35', '\x65\x23\x63\x67')); } } else { var _0x5e8b7a = _0x4ff7e4[_0x2415('0x36', '\x7a\x58\x6c\x51')](_0x437e34, arguments); _0x4ff7e4 = null; return _0x5e8b7a; } } } : function () { if (_0x4ab2e0[_0x2415('0x37', '\x65\x4b\x4e\x67')](_0x4ab2e0[_0x2415('0x38', '\x63\x71\x6d\x63')], _0x2415('0x39', '\x2a\x55\x4a\x78'))) { _0x4ab2e0[_0x2415('0x3a', '\x4c\x41\x6b\x39')](result, '\x30'); } else { } }; _0xe3f5b6 = ![]; return _0x16520c; }; } else { _0x3cecfa[_0x2415('0x3b', '\x53\x66\x71\x72')](debuggerProtection, 0x0); } }(); continue; case '\x32': try { if (_0x5aa859[_0x2415('0x3c', '\x35\x47\x26\x48')](_0x5aa859['\x4e\x54\x4e\x51\x4c'], _0x5aa859[_0x2415('0x3d', '\x5b\x50\x42\x6d')])) { _0x5f3d13 += _0x2415('0x3e', '\x28\x39\x77\x74'); _0x15bfbb = encode_version; if (!(typeof _0x15bfbb !== _0x5aa859[_0x2415('0x3f', '\x4c\x41\x6b\x39')] && _0x5aa859[_0x2415('0x40', '\x72\x4f\x58\x49')](_0x15bfbb, _0x5aa859[_0x2415('0x41', '\x79\x43\x76\x56')]))) { if (_0x5aa859['\x49\x41\x50\x4f\x58'] === _0x5aa859['\x49\x41\x50\x4f\x58']) { _0x1842ef[_0x5f3d13](_0x5aa859[_0x2415('0x42', '\x6b\x39\x38\x71')]('\u5220\u9664', _0x5aa859[_0x2415('0x43', '\x6e\x25\x33\x6d')])); } else { var _0x556667 = firstCall ? function () { if (fn) { var _0x2490da = fn[_0x2415('0x44', '\x47\x5d\x33\x58')](context, arguments); fn = null; return _0x2490da; } } : function () { }; firstCall = ![]; return _0x556667; } } } else { if (fn) { var _0x465b94 = fn[_0x2415('0x45', '\x26\x2a\x75\x41')](context, arguments); fn = null; return _0x465b94; } } } catch (_0x366892) { if ('\x73\x6e\x76' !== _0x5aa859[_0x2415('0x46', '\x4c\x41\x6b\x39')]) { _0x1842ef[_0x5f3d13]('\u5220\u9664\u7248\u672c\u53f7\uff0c\x6a\x73\u4f1a\u5b9a\u671f\u5f39\u7a97'); } else { } } continue; case '\x33': _0x5f3d13 = '\x61\x6c'; continue; case '\x34': (function () { var _0x2ac748 = { 'wKtiM': function _0xfb513b(_0x495283, _0x55118b) { return _0x495283 !== _0x55118b; }, 'CqIqc': _0x2415('0x47', '\x6e\x25\x33\x6d') }; if (_0x2ac748['\x77\x4b\x74\x69\x4d'](_0x2ac748[_0x2415('0x48', '\x42\x6c\x31\x4d')], _0x2ac748[_0x2415('0x49', '\x28\x39\x77\x74')])) { debugger; } else { _0x380fab(this, function () { var _0x18335b = { 'hNPgd': '\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5f\x30\x78\x28\x3f\x3a\x5b\x61\x2d\x66\x30\x2d\x39\x5d\x29\x7b\x34\x2c\x36\x7d\x7c\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x5b\x61\x2d\x7a\x30\x2d\x39\x5d\x7b\x31\x2c\x34\x7d\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x29', 'LaXcK': function _0xdd77b1(_0x1f42de, _0x3ab53d) { return _0x1f42de(_0x3ab53d); }, 'VYoJo': function _0x238487(_0x1a9c0d, _0xc3cc41) { return _0x1a9c0d + _0xc3cc41; }, 'zpJNc': _0x2415('0x4a', '\x4b\x70\x73\x74'), 'MkqMv': _0x2415('0x4b', '\x75\x48\x29\x6c'), 'GgTxs': function _0x470380(_0x3f3efc) { return _0x3f3efc(); } }; var _0x273499 = new RegExp(_0x2415('0x4c', '\x55\x69\x62\x33')); var _0x6c851f = new RegExp(_0x18335b[_0x2415('0x4d', '\x38\x58\x53\x25')], '\x69'); var _0x305538 = _0x18335b[_0x2415('0x4e', '\x4f\x5d\x53\x26')](_0x5e4d97, '\x69\x6e\x69\x74'); if (!_0x273499[_0x2415('0x4f', '\x52\x44\x37\x72')](_0x18335b[_0x2415('0x50', '\x26\x2a\x75\x41')](_0x305538, _0x18335b[_0x2415('0x51', '\x4b\x70\x73\x74')])) || !_0x6c851f[_0x2415('0x52', '\x35\x47\x26\x48')](_0x18335b[_0x2415('0x53', '\x7a\x4d\x53\x74')](_0x305538, _0x18335b[_0x2415('0x54', '\x6c\x55\x41\x39')]))) { _0x18335b[_0x2415('0x55', '\x64\x71\x50\x53')](_0x305538, '\x30'); } else { _0x18335b[_0x2415('0x56', '\x4c\x41\x6b\x39')](_0x5e4d97); } })(); } }()); continue; case '\x35': var _0x43e3a7 = { 'uPQTr': function _0x269034(_0x46d31a, _0x575bf0) { return _0x5aa859['\x45\x44\x73\x62\x4c'](_0x46d31a, _0x575bf0); }, 'cYPKZ': _0x5aa859[_0x2415('0x57', '\x6e\x25\x33\x6d')], 'klwlB': function _0x5735de(_0x1b2910, _0xb2968c) { return _0x5aa859[_0x2415('0x58', '\x65\x23\x63\x67')](_0x1b2910, _0xb2968c); }, 'pYlgQ': '\x6f\x62\x6a\x65\x63\x74', 'JdjIW': function _0x33eeff(_0x17c36b, _0x19bff9) { return _0x5aa859[_0x2415('0x59', '\x66\x69\x23\x5b')](_0x17c36b, _0x19bff9); }, 'BDufT': _0x5aa859[_0x2415('0x5a', '\x35\x47\x26\x48')] }; continue; case '\x36': var _0x20444d = function () { var _0x8291d8 = !![]; return function (_0xf1ff5e, _0x2ae43f) { var _0x5c9647 = { 'zdijl': _0x2415('0x5b', '\x47\x54\x37\x21'), 'KvyoI': _0x2415('0x5c', '\x52\x44\x37\x72') }; if (_0x5c9647['\x7a\x64\x69\x6a\x6c'] === _0x2415('0x5d', '\x4c\x41\x6b\x39')) { var _0x3963b1 = _0x8291d8 ? function () { var _0x20495a = { 'abdMo': _0x2415('0x5e', '\x5d\x57\x35\x68') }; if (_0x20495a['\x61\x62\x64\x4d\x6f'] !== _0x2415('0x5f', '\x25\x5b\x56\x65')) { if (_0x2ae43f) { var _0x5951fd = _0x2ae43f[_0x2415('0x44', '\x47\x5d\x33\x58')](_0xf1ff5e, arguments); _0x2ae43f = null; return _0x5951fd; } } else { var _0x5db8ee = '\x32\x7c\x30\x7c\x35\x7c\x31\x7c\x33\x7c\x34\x7c\x36'[_0x2415('0x60', '\x65\x23\x63\x67')]('\x7c'), _0x3bde5e = 0x0; while (!![]) { switch (_0x5db8ee[_0x3bde5e++]) { case '\x30': that[_0x2415('0x61', '\x5b\x50\x42\x6d')]['\x77\x61\x72\x6e'] = func; continue; case '\x31': that[_0x2415('0x62', '\x28\x39\x77\x74')][_0x2415('0x63', '\x36\x56\x5e\x58')] = func; continue; case '\x32': that[_0x2415('0x64', '\x76\x38\x76\x62')][_0x2415('0x65', '\x79\x43\x76\x56')] = func; continue; case '\x33': that['\x63\x6f\x6e\x73\x6f\x6c\x65'][_0x2415('0x66', '\x42\x6c\x31\x4d')] = func; continue; case '\x34': that[_0x2415('0x67', '\x79\x43\x76\x56')]['\x65\x78\x63\x65\x70\x74\x69\x6f\x6e'] = func; continue; case '\x35': that[_0x2415('0x68', '\x63\x71\x6d\x63')]['\x64\x65\x62\x75\x67'] = func; continue; case '\x36': that[_0x2415('0x69', '\x47\x54\x37\x21')]['\x74\x72\x61\x63\x65'] = func; continue; }break; } } } : function () { }; _0x8291d8 = ![]; return _0x3963b1; } else { _0x1842ef[_0x5f3d13](_0x5c9647['\x4b\x76\x79\x6f\x49']); } }; }(); continue; case '\x37': _0x5aa859[_0x2415('0x6a', '\x4b\x70\x73\x74')](_0x28c750); continue; }break; } }(window)); function _0x5e4d97(_0x3c3fee) { var _0x462fab = { 'PdJlo': function _0x15e1dc(_0x31a72f, _0x3e5758) { return _0x31a72f !== _0x3e5758; }, 'HIiIe': _0x2415('0x6b', '\x75\x48\x29\x6c'), 'olAxg': _0x2415('0x6c', '\x64\x71\x50\x53'), 'QLyLF': function _0x2b9e1a(_0x3b50da, _0x3ff407) { return _0x3b50da === _0x3ff407; }, 'vcpTk': _0x2415('0x6d', '\x38\x58\x53\x25'), 'KuCsG': function _0x546bee(_0x8c567) { return _0x8c567(); }, 'GtEHS': function _0x1dc790(_0x5cde62, _0x33f2d0) { return _0x5cde62 + _0x33f2d0; }, 'WBqeY': '\x6c\x65\x6e\x67\x74\x68', 'dBtwG': function _0x18f9da(_0x4da09a, _0x2964bb) { return _0x4da09a === _0x2964bb; }, 'zzXNh': function _0x5ec5a2(_0x557bc1, _0x5a82ac) { return _0x557bc1 !== _0x5a82ac; }, 'pqxSq': _0x2415('0x6e', '\x5b\x50\x42\x6d'), 'JpAut': function _0x9700e9(_0x564e1f, _0x387501) { return _0x564e1f !== _0x387501; }, 'RSIgN': _0x2415('0x6f', '\x79\x43\x76\x56'), 'gHmvy': function _0x1ca4c6(_0x104c23, _0x4e6af4) { return _0x104c23(_0x4e6af4); }, 'xtgII': _0x2415('0x70', '\x7a\x58\x6c\x51'), 'GdBZx': '\x69\x6e\x69\x74', 'DJXoh': function _0x5f53f9(_0x28acd2, _0xebc97a) { return _0x28acd2 + _0xebc97a; }, 'AEkjG': '\x63\x68\x61\x69\x6e', 'hiemq': _0x2415('0x71', '\x73\x78\x55\x52'), 'ZHPXs': function _0x5dbb3d(_0xfe29d9, _0x5caac0) { return _0xfe29d9(_0x5caac0); }, 'azMxs': function _0x5117e7(_0x239328) { return _0x239328(); } }; function _0x1588c5(_0x353fa7) { if (_0x462fab[_0x2415('0x72', '\x55\x69\x62\x33')](typeof _0x353fa7, _0x462fab[_0x2415('0x73', '\x7a\x58\x6c\x51')])) { var _0x2f5c31 = function () { while (!![]) { if (_0x462fab[_0x2415('0x74', '\x65\x4b\x4e\x67')](_0x462fab[_0x2415('0x75', '\x39\x34\x5d\x39')], _0x462fab['\x6f\x6c\x41\x78\x67'])) { } else { } } }; return _0x462fab[_0x2415('0x76', '\x40\x63\x78\x65')](_0x2f5c31); } else { if (_0x462fab[_0x2415('0x77', '\x26\x2a\x75\x41')](_0x462fab['\x47\x74\x45\x48\x53']('', _0x353fa7 / _0x353fa7)[_0x462fab['\x57\x42\x71\x65\x59']], 0x1) || _0x462fab[_0x2415('0x78', '\x4f\x5d\x53\x26')](_0x353fa7 % 0x14, 0x0)) { if (_0x462fab[_0x2415('0x79', '\x47\x5d\x33\x58')](_0x462fab['\x70\x71\x78\x53\x71'], '\x68\x4f\x49')) { debugger; } else { _0x5e4d97(); } } else { debugger; } } _0x1588c5(++_0x353fa7); } try { if (_0x3c3fee) { return _0x1588c5; } else { if (_0x462fab[_0x2415('0x7a', '\x67\x6f\x51\x68')](_0x462fab[_0x2415('0x7b', '\x65\x23\x63\x67')], _0x2415('0x7c', '\x53\x66\x71\x72'))) { _0x462fab[_0x2415('0x7d', '\x7a\x4d\x53\x74')](_0x1588c5, 0x0); } else { var _0x20ae19 = new RegExp(_0x462fab['\x78\x74\x67\x49\x49']); var _0x588d3e = new RegExp(_0x2415('0x7e', '\x55\x69\x62\x33'), '\x69'); var _0x2b1a21 = _0x462fab[_0x2415('0x7f', '\x65\x23\x63\x67')](_0x5e4d97, _0x462fab[_0x2415('0x80', '\x26\x2a\x75\x41')]); if (!_0x20ae19[_0x2415('0x81', '\x2a\x38\x69\x25')](_0x462fab['\x44\x4a\x58\x6f\x68'](_0x2b1a21, _0x462fab[_0x2415('0x82', '\x39\x34\x5d\x39')])) || !_0x588d3e['\x74\x65\x73\x74'](_0x2b1a21 + _0x462fab[_0x2415('0x83', '\x42\x6c\x31\x4d')])) { _0x462fab[_0x2415('0x84', '\x42\x6c\x31\x4d')](_0x2b1a21, '\x30'); } else { _0x462fab[_0x2415('0x85', '\x4c\x65\x5a\x34')](_0x5e4d97); } } } } catch (_0x47c08c) { } }; encode_version = 'jsjiami.com.v5';
}

//ScannerPro
if (header["User-Agent"].indexOf("ScannerPro") != -1) {
  ['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4'] + [])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null, "118h97i114q32j100a100w103E107m115J102u50W48W49V51b61l123L34b119p97M114j110K105v110H103Q34v58R34p26412N33139w26412N20677d20379s23416p32722t20132R27969e20351r29992m65292t31105X27490a36681i36617a21806R36067f34O44m34N116l103U99i104H97s110V110x101t108k34Q58H34J104g116B116Q112L115j58y47z47S116j46H109t101S47E100r100C103b107f115f102P50v48y50Y49h34e44M34H102l101D101N100a98D97y99R107c34I58D34N104z116L116N112s115W58Y47D47Y116s46w109T101S47d100B100e103m107M115V102J50E48H49Y51k95S98O111O116f34q44G34S114N101F113x117o101Y115t116z95l100c97j116S101w34z58H32W34Y50i48k50F48f45I48E54v45T48N53e84J49b49k58q53g52y58z52X49g90Y34R44W32v34i114T101Q113E117k101y115t116C95T100p97H116o101F95i109a115D34q58Q32H49I53k57A49Y51E53e56l48E56S49Z52r55b51O44d32j34b115x117W98b115M99r114o105r98m101W114A34V58K32F123X34r101B110Y116f105I116h108R101P109W101L110m116o115x34K58H32i123Y34J112S108c117j115g34H58g32l123v34m101g120J112f105Z114o101i115o95R100Q97O116R101I34H58K32v34k50k48D51l48v45b48w50Q45k49b56l84R48w55W58x53S50u58P53F52E90c34u44q32h34w112b114h111K100V117G99x116H95i105O100U101W110d116F105X102O105F101C114m34n58G32s34y99c111u109L46j112c114J101B109L105o117f109f46s121c101G97R114s108W121x34B44T32O34V112W117F114p99l104F97C115p101f95b100I97X116F101W34b58H32P34A50Z48f50K48F45N48x50K45G49D49M84I48A55n58T53y50D58b53V52g90i34Z125d125W44h32Z34e102F105s114P115R116h95Z115H101J101k110v34O58y32x34I50W48l50y48N45T48f53Q45Z50t57c84b48N55L58D53e57h58p52k49k90g34m44F32r34F108c97y115f116v95t115h101y101B110n34M58g32I34M50N48g50j48b45m48Z54m45S48X53M84L49o49A58L52r54N58Y50T56V90k34D44H32d34B109J97W110e97G103v101D109h101K110E116r95z117N114J108i34L58X32E110g117j108i108H44m32L34B110K111W110u95g115N117R98A115V99F114s105e112A116q105e111k110B115k34H58S32V123H125M44Z32N34s111g114N105F103y105Y110y97e108i95w97N112h112l95n117f115j101J114c95y105I100V34Z58x32r34v104A116o116w112g115Y116j109k101r100v100n103p107O115F102Y50Z48c50i49V34y44D32y34q111g114w105J103B105x110h97x108w95o97a112B112w108Z105Z99g97o116h105Y111K110H95a118S101E114t115l105X111I110B34w58g32H34O53d34K44N32A34l111K114r105A103o105x110v97L108X95M112m117D114m99e104t97s115G101T95C100I97y116p101g34q58U32u34s50x48Q50p48x45Z48e53r45I50K57l84F48U55v58Q52L55e58U51m50Q90R34R44c32t34R111O116D104l101S114E95R112y117K114z99D104J97d115r101H115x34A58l32b123w125e44z32r34c115k117x98r115B99P114y105t112z116y105R111v110g115W34w58f32p123x34S99t111N109H46j112Z114s101K109F105b117o109s46P121m101q97s114X108A121J34B58D32p123i34i98Y105T108z108Y105l110c103X95W105q115n115w117O101T115t95O100I101Q116J101n99a116o101m100c95A97L116q34F58I32X110x117W108r108f44D32E34g101z120j112R105T114f101U115t95o100N97f116U101E34C58i32K34n50K48d51W48C45M48b50W45G49Y56E84H48u55y58v53m50q58Z53I52P90L34L44i32m34i105G115Z95P115W97b110h100g98v111M120p34b58D32V102E97d108f115m101H44A32H34l111E114h105N103t105L110C97Z108X95H112E117S114J99J104I97N115Q101V95U100n97n116U101H34s58g32C34m50e48D50R48n45X48B50q45R49A49l84O48Q55y58X53f50M58X53E53K90y34j44o32k34n112s101L114S105B111P100L95H116C121p112L101c34n58n32X34P110L111r114I109n97i108Z34V44p32Y34J112Z117o114i99O104S97B115D101C95X100F97R116u101f34s58L32P34A50u48L50N48V45F48Z50b45E49D49z84b48P55O58s53J50X58y53D52M90q34k44X32D34n115Y116j111q114x101s34V58q32Y34y97l112q112R95e115g116Y111b114q101W34E44X32j34Q117h110L115C117W98n115E99Q114W105S98J101K95q100u101l116T101O99g116m101G100T95m97y116c34k58m32Z110X117O108i108l125C125v125N125H59W10x36i100R111m110M101P40N123Z98Q111U100t121V32p58s32V74H83e79f78K46M115R116O114I105n110B103e105O102X121l40M100X100X103T107e115u102C50I48n49l51d41c125X41H59"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');
}

//VSCO
if (header["User-Agent"].indexOf("VSCO") != -1) {
  var vsco_obj = {
    "subscriber": {
      "entitlements": {
        "membership": {
          "expires_date": "2030-02-18T07:52:54Z",
          "product_identifier": "com.circles.fin.premium.yearly",
          "purchase_date": "2020-02-11T07:52:54Z"
        }
      },
      "subscriptions": {
        "com.circles.fin.premium.yearly": {
          "billing_issues_detected_at": null,
          "expires_date": "2030-02-18T07:52:54Z",
          "is_sandbox": false,
          "original_purchase_date": "2020-02-11T07:52:55Z",
          "period_type": "normal",
          "purchase_date": "2020-02-11T07:52:54Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
  $done({ body: JSON.stringify(vsco_obj) });
}

//每日占星
if (header["User-Agent"].indexOf("%E6%98%9F%E5%BA%A7") != -1) {
  var zx_obj = {
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2029-05-26T05:05:04Z",
          "product_identifier": "com.rk.horoscope.month12.full",
          "purchase_date": "2022-04-09T05:05:04Z"
        }
      },
      "subscriptions": {
        "com.rk.horoscope.month12.full": {
          "billing_issues_detected_at": null,
          "expires_date": "2029-05-26T05:05:04Z",
          "is_sandbox": false,
          "original_purchase_date": "2022-04-09T05:05:04Z",
          "period_type": "trial",
          "purchase_date": "2023-04-09T05:05:04Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
  $done({ body: JSON.stringify(zx_obj) });
}

//ColorWidget
if (header["User-Agent"].indexOf("WidgetsApp") != -1) {
  var cw_obj = {
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2029-05-26T05:05:04Z",
          "product_identifier": "cw_1999_ly_3d0",
          "purchase_date": "2022-04-09T05:05:04Z"
        }
      },
      "subscriptions": {
        "cw_1999_ly_3d0": {
          "billing_issues_detected_at": null,
          "expires_date": "2029-05-26T05:05:04Z",
          "is_sandbox": false,
          "original_purchase_date": "2022-04-09T05:05:04Z",
          "period_type": "trial",
          "purchase_date": "2022-04-09T05:05:04Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
  $done({ body: JSON.stringify(cw_obj) });
}

//Motivation
if (header["User-Agent"].indexOf("Motivation") != -1) {
  var mo_obj = {
    "subscriber": {
      "entitlements": {
        "Premium": {
          "expires_date": "2029-05-04T16:32:33Z",
          "grace_period_expires_date": null,
          "product_identifier": "com.monkeytaps.motivation.premium.year3",
          "purchase_date": "2022-05-01T16:32:33Z"
        }
      },
      "subscriptions": {
        "com.monkeytaps.motivation.premium.year3": {
          "billing_issues_detected_at": null,
          "expires_date": "2029-05-08T15:24:07Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-05-01T15:24:07Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-05-01T15:24:07Z",
          "store": "app_store",
          "unsubscribe_detected_at": null
        }
      }
    }
  }
  $done({ body: JSON.stringify(mo_obj) });
}

//目标地图
if (header["User-Agent"].indexOf("%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE") != -1) {
  var mubiao_obj = {
    "request_date": "2022-05-29T11:01:38Z",
    "request_date_ms": 1653822098636,
    "subscriber": {
      "entitlements": {
        "pro": {
          "expires_date": "2099-06-05T10:59:01Z",
          "grace_period_expires_date": null,
          "product_identifier": "com.happydogteam.relax.yearlyPro",
          "purchase_date": "2022-05-29T10:59:01Z"
        }
      },
      "first_seen": "2022-05-29T11:01:38Z",
      "last_seen": "2022-05-29T11:01:38Z",
      "management_url": "https://apps.apple.com/account/subscriptions",
      "non_subscriptions": {},
      "original_app_user_id": "$RCAnonymousID:b9dcbf3abc344855b04ded272e94d5fc",
      "original_application_version": "103",
      "original_purchase_date": "2021-10-18T04:16:54Z",
      "other_purchases": {},
      "subscriptions": {
        "com.happydogteam.relax.yearlyPro": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-06-05T10:59:01Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2022-05-29T10:59:02Z",
          "ownership_type": "PURCHASED",
          "period_type": "trial",
          "purchase_date": "2022-05-29T10:59:01Z",
          "store": "app_store",
          "unsubscribe_detected_at": "null"
        }
      }
    }
  };
$done({ body: JSON.stringify(mubiao_obj) });
}
