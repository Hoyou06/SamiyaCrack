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
var bundle_id = obj.receipt["bundle_id"];
if (bundle_id == "com.digitalworkroom.noted") {
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
          "product_id": "com.digitalworkroom.noted.plus.yearly",
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
      "product_id": "com.digitalworkroom.noted.plus.yearly",
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
      "is_trial_period": "false",
      "is_in_intro_offer_period": "true",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20421642",
      "expires_date_formatted": "2099-05-27 23:00:59 Etc/GMT"
    },
    "latest_receipt": "",
    "pending_renewal_info": {
      "expiration_intent": "1",
      "auto_renew_product_id": "com.digitalworkroom.noted.plus.yearly",
      "is_in_billing_retry_period": false,
      "product_id": "com.digitalworkroom.noted.plus.yearly",
      "original_transaction_id": "500001078320278",
      "auto_renew_status": "1"
    },
    "status": 0
  }
}
$done({body: JSON.stringify(obj)});



