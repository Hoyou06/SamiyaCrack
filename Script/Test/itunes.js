let body= $response.body;
var obj = JSON.parse(body);
/*
obj["receipt"]["in_app"][0]["expires_date"] = "2099-09-09 20:12:02 Etc/GMT";
obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-09-09 12:12:02 America/Los_Angeles";
obj["receipt"]["in_app"][0]["expires_date_ms"] = "4092647115000";

obj["receipt"]["in_app"][0]["is_trial_period"] = "true";
obj["receipt"]["in_app"][0]["is_in_intro_offer_period"] = "false";
obj["receipt"]["in_app"][0]["in_app_ownership_type"] = "PURCHASED";

obj["latest_receipt_info"][0]["expires_date"] = "2099-09-09 20:12:02 Etc/GMT";
obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-09-09 12:12:02 America/Los_Angeles";
obj["latest_receipt_info"][0]["expires_date_ms"] = "4092647115000";
  
obj["latest_receipt_info"][0]["is_trial_period"] = "true";
obj["latest_receipt_info"][0]["is_in_intro_offer_period"] = "false";
obj["latest_receipt_info"][0]["in_app_ownership_type"] = "PURCHASED";
*/

if (bundle_id == "net.shinyfrog.bear-iOS") {
  obj ={
    "environment": "Production",
    "receipt": {
      "receipt_type": "Production",
      "adam_id": 1149425482,
      "app_item_id": 1149425482,
      "bundle_id": "com.digitalworkroom.noted",
      "application_version": "480",
      "download_id": null,
      "version_external_identifier": 847529357,
      "receipt_creation_date": "2022-05-24 23:22:52 Etc/GMT",
      "receipt_creation_date_ms": "1653434572000",
      "receipt_creation_date_pst": "2022-05-24 16:22:52 America/Los_Angeles",
      "request_date": "2022-05-28 15:37:57 Etc/GMT",
      "request_date_ms": "1653752277571",
      "request_date_pst": "2022-05-28 08:37:57 America/Los_Angeles",
      "original_purchase_date": "2022-05-24 23:22:11 Etc/GMT",
      "original_purchase_date_ms": "1653434531000",
      "original_purchase_date_pst": "2022-05-24 16:22:11 America/Los_Angeles",
      "original_application_version": "32",
      "in_app": [
        {
          "quantity": "1",
          "product_id": "com.digitalworkroom.noted.plus.month",
          "transaction_id": "500001078320278",
          "original_transaction_id": "500001078320278",
          "purchase_date": "2022-05-24 23:00:59 Etc/GMT",
          "purchase_date_ms": "1653433259000",
          "purchase_date_pst": "2022-05-24 16:00:59 America/Los_Angeles",
          "original_purchase_date": "2022-05-24 23:01:00 Etc/GMT",
          "original_purchase_date_ms": "1653433260000",
          "original_purchase_date_pst": "2022-05-24 16:01:00 America/Los_Angeles",
          "expires_date": "2099-05-27 23:00:59 Etc/GMT",
          "expires_date_ms": "1653692459000",
          "expires_date_pst": "2099-05-27 16:00:59 America/Los_Angeles",
          "web_order_line_item_id": "500000479581138",
          "is_trial_period": "true",
          "is_in_intro_offer_period": "false",
          "in_app_ownership_type": "PURCHASED"
        }
      ]
    },
    "latest_receipt_info": {
      "quantity": "1",
      "product_id": "com.digitalworkroom.noted.plus.month",
      "transaction_id": "500001078320278",
      "original_transaction_id": "500001078320278",
      "purchase_date": "2022-05-24 23:00:59 Etc/GMT",
      "purchase_date_ms": "1653433259000",
      "purchase_date_pst": "2022-05-24 16:00:59 America/Los_Angeles",
      "original_purchase_date": "2022-05-24 23:01:00 Etc/GMT",
      "original_purchase_date_ms": "1653433260000",
      "original_purchase_date_pst": "2022-05-24 16:01:00 America/Los_Angeles",
      "expires_date": "2099-05-27 23:00:59 Etc/GMT",
      "expires_date_ms": "1653692459000",
      "expires_date_pst": "2099-05-27 16:00:59 America/Los_Angeles",
      "web_order_line_item_id": "500000479581138",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20421642",
      "expires_date_formatted": "2022-05-27 23:00:59 Etc/GMT"
    },
    "latest_receipt": "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",
    "pending_renewal_info": {
      "expiration_intent": "1",
      "auto_renew_product_id": "com.digitalworkroom.noted.plus.month",
      "is_in_billing_retry_period": false,
      "product_id": "com.digitalworkroom.noted.plus.month",
      "original_transaction_id": "500001078320278",
      "auto_renew_status": "0"
    },
    "status": 0,
    "hasFreeTrial": true,
    "valid": false
  }
}
$done({body: JSON.stringify(obj)});



