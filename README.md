# cahoots.pw - submission

The Cahoots submission platform which abstracts from our forum and provides a lean interface for inserting new submissions.

## Running

```sh
npm start
```

### Environment variables

Please note that you have to define some environment variables before executing `npm start`

  * `PLATFORM_ENDPOINT`: The forum API endpoint.
  * `PLATFORM_EMAIL`: The email address of the forum user.
  * `PLATFORM_SECRET`: The forum API secret.
  * `PLATFORM_CATEGORY`: The forum category into which the new submissions should be posted.
  * `RECAPTCHA_SECRET`: The Google reCAPTCHA API secret.
  * `HIPCHAT_TOKEN`: The HipChat notification token.
  * `HIPCHAT_ROOM`: The HipChat room into which new submission notifications should be send.

  ## Submodule documentations

    * [submission/hipchat](https://github.com/getcahoots/submission/blob/master/lib/hipchat/README.md)
    * [submission/platform](https://github.com/getcahoots/submission/blob/master/lib/platform/README.md)
    * [submission/recaptcha](https://github.com/getcahoots/submission/blob/master/lib/recaptcha/README.md)

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
