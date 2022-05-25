let obj = JSON.parse($response.body);
let url = $request.url;

if (url.endsWith("offerings") || url.endsWith("products")) {
    $done({});
} else {
    // Noto笔记
    if (url.indexOf("D1D6D98B-EF51-48AF-9876-7352ABCEFD60") != -1) {
        obj["subscriber"]["entitlements"]["pro"] = {
            "expires_date": null,
            "product_identifier": "com.lkzhao.editor.full.deal",
            "purchase_date": "2019-12-01T00:00:00Z"
        };
        obj["subscriber"]["non_subscriptions"]["com.lkzhao.editor.full.deal"] = [{
            "id": "12345qwert",
            "is_sandbox": false,
            "original_purchase_date": "2019-12-01T00:00:00Z",
            "purchase_date": "2019-12-01T00:00:00Z",
            "store": "app_store"
        }];
    }
    // Paper
    if (url.indexOf("7831596C-1FCC-450D-A883-108A55E18491") != -1) {
        obj["subscriber"]["subscriptions"]["com.fiftythree.paper.pro_12"] =
        {
            "is_sandbox": false,
            "period_type": "false",
            "billing_issues_detected_at": null,
            "unsubscribe_detected_at": null,
            "expires_date": null,
            "original_purchase_date": "2019-11-09T14:03:59Z",
            "purchase_date": "2019-11-09T14:03:59Z",
            "store": "app_store"
        };

        obj["subscriber"]["entitlements"]["pro"] =
        {
            "expires_date": "2099-11-23T14:03:59Z",
            "product_identifier": "com.fiftythree.paper.pro_12",
            "purchase_date": "2019-11-09T14:03:59Z"
        };
    }

    //1Blocker
    if (url.indexOf("2A0121A0-D4D0-4DE5-AB32-0E93D1C58A21") != -1) {
        obj = {
            "request_date": "2022-04-25T01:22:46Z",
            "request_date_ms": 1650849766949,
            "subscriber": {
                "entitlements": {
                    "premium": {
                        "expires_date": "2999-08-02T05:45:42Z",
                        "grace_period_expires_date": null,
                        "product_identifier": "blocker.ios.subscription.yearly",
                        "purchase_date": "2022-04-25T01:19:55Z"
                    }
                },
                "first_seen": "2019-05-27T01:06:14Z",
                "last_seen": "2022-04-25T01:10:32Z",
                "management_url": "itms-apps://apps.apple.com/account/subscriptions",
                "non_subscriptions": {},
                "original_app_user_id": "2A0121A0-D4D0-4DE5-AB32-0E93D1C58A21",
                "original_application_version": "1110",
                "original_purchase_date": "2022-04-03T05:36:31Z",
                "other_purchases": {},
                "subscriptions": {
                    "blocker.ios.subscription.yearly": {
                        "billing_issues_detected_at": null,
                        "expires_date": "2999-08-02T05:45:42Z",
                        "grace_period_expires_date": null,
                        "is_sandbox": false,
                        "original_purchase_date": "2022-04-25T01:19:56Z",
                        "ownership_type": "PURCHASED",
                        "period_type": "trial",
                        "purchase_date": "2022-04-25T01:19:56Z",
                        "store": "app_store",
                        "unsubscribe_detected_at": null
                    }
                }
            }
        }
    }
}
$done({ body: JSON.stringify(obj) });