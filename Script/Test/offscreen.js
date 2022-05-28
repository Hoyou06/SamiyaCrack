let obj = JSON.parse($response.body);

obj = {
    "sk_rules": {
        "wi": 24,
        "ex": 1,
        "di": 1
    }
};


$done({ body: JSON.stringify(obj) });