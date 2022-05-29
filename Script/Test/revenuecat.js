let obj = JSON.parse($response.body);

obj["subscriber"]["entitlements"][0]["expires_date"] = "2099-11-23T14:03:59Z";
obj["subscriber"]["entitlements"][0]["purchase_date"] = "2022-05-09T14:03:59Z";

obj["subscriber"]["subscriptions"][0]["is_sandbox"] = false;
obj["subscriber"]["subscriptions"][0]["period_type"] = "trial";
obj["subscriber"]["subscriptions"][0]["billing_issues_detected_at"] = null;
obj["subscriber"]["subscriptions"][0]["unsubscribe_detected_at"] = null;
obj["subscriber"]["subscriptions"][0]["expires_date"] = "2099-11-23T14:03:59Z";
obj["subscriber"]["subscriptions"][0]["original_purchase_date"] = "2022-05-09T14:03:59Z";
obj["subscriber"]["subscriptions"][0]["purchase_date"] = "2022-05-09T14:03:59Z";
obj["subscriber"]["subscriptions"][0]["store"] = "app_store";

$done({ body: JSON.stringify(obj) });