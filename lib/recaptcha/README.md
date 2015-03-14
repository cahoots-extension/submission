# cahoots.pw - submission - reCAPTCHA

Google reCAPTCHA API abstraction

## Usage example

```js
var recaptcha = require('cahoots-submission-recaptcha');

recaptcha().verify('80.228.118.81', '82bde700eda9524dc322197882828215fd39a507......', function onVerify (err)) {
    // ...
});

```

## Environment variable

  * `RECAPTCHA_SECRET`: The Google reCAPTCHA API secret.

## API

#### verify(ipaddress, recaptchaResponse, callback);

Verifies the given `recaptchaResponse` against the Google reCAPTCHA API.

## License

The MIT License (MIT)

Copyright (c) 2014-2015 Cahoots, Germany <info@cahoots.pw>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
