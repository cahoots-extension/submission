# cahoots.pw - submission - platform

The platform abstraction. Abstracts from the current forum software.

## Usage example

```js
var platform = require('cahoots-submission-platform');

var submission = platform('submission');
```

## Environment variable

  * `PLATFORM_ENDPOINT`: The forum API endpoint.
  * `PLATFORM_EMAIL`: The email address of the forum user.
  * `PLATFORM_SECRET`: The forum API secret.
  * `PLATFORM_CATEGORY`: The forum category into which the new submissions should be posted.

## API

### Submission

#### insert(submission, callback);

Sends a new submission to the forum.

```js
var platform = require('cahoots-submission-platform');

var submission = platform('submission');

var data = {
    authorName: 'Peter Frey',
    organizationName: 'Centrum für angewandte Politikforschung',
    organizationInfo: 'http://de.wikipedia.org/wiki/Centrum_f%C3%BCr_angewandte_Politikforschung',
    cahootsSource: 'http://www.cap-lmu.de/cap/fellows/'
};

function onInsert (err, data) {
    if (err) {
        return console.error(err);
    }

    console.log(data.authorName);
    console.log(data.organizationName);
    console.log(data.organizationInfo);
    console.log(data.cahootsSource);
    console.log(data.url); // => e.g. https://forum.cahoots.pw/discussion/697/peter-frey-centrum-fuer-angewandte-politikforschung
}

submission.insert(data, onInsert);

```

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
