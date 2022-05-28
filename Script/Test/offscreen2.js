let obj = JSON.parse($response.body);

obj = {
    "refreshToken" : "2_kWLKXUfKtFOhqVqRhOU2VfoObpzyN6LLRib9qMVdVFIMlup2HIFpqpvP0PJ-MniG",
    "fid" : "fkCpR0sb_0E0uXCFUTSvM3",
    "name" : "projects/858322630883/installations/fkCpR0sb_0E0uXCFUTSvM3",
    "authToken" : {
      "token" : "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6ODU4MzIyNjMwODgzOmlvczpmYWIzZTgzOTIwMDcxMGY2IiwiZXhwIjoxNjU0MzU0MjM0LCJmaWQiOiJma0NwUjBzYl8wRTB1WENGVVRTdk0zIiwicHJvamVjdE51bWJlciI6ODU4MzIyNjMwODgzfQ.AB2LPV8wRQIgNByEpw6g2c4Jw4TphGpQztBpJmGRFMGqqQuhWAM_UioCIQDngAGJj0IZqJVBQDc3Ry1GrCE-Lj8QQ9FJpvPaFprxGQ",
      "expiresIn" : "604800s"
    }
};


$done({ body: JSON.stringify(obj) });