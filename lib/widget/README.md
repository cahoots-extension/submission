# cahoots.pw - submission widget

This is the client-side widget which handles the form submissions.

## Installation

```html
<script src="http://submission.cahoots.pw/widget.js"></script>
```

Create the submission form which should have the following structure.

```html

<div class="cahoots-submission-widget">
    <form action="http://submission.cahoots.pw" method="post">

        <input type="text" name="author-name">
        <input type="text" name="organisation-name">
        <input type="text" name="organisation-info">
        <input type="text" name="cahoot-source">

        <div class="cahoots-submission-widget--captcha" data-key="<your-captcha-api-key>"></div>

        <input type="submit" value="Abschicken">

    </form>
</div>
```

Please note that you have to define a template which should have the following structure:

```html
<script type="text/template">
    <div>
        <h1>Vielen Dank!</h1>

        <p>Deine Einreichung wird nun einem Community-getriebenen Review-Prozess unterzogen</p>
        <p>Du kannst diesen in unserem Forum über diese URL verfolgen: <a href="{{submission.url}}">{{submission.title}}</a>
    </div>
</script>

```

## License

The MIT License (MIT)

Copyright (c) 2014-2015 cahoots.pw, Germany <info@cahoots.pw>

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
