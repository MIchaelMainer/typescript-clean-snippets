class Utilities {

    trimWhitespaceLeftAlign(dirtyHtml: string): string {
        let lines: string[] = dirtyHtml.split('\n');

        // 1) Replace each tab with 4 spaces. We need this normalized to spaces
        //    so that we can align the lines to the left.

        for (let i: number = 0; i < lines.length; i++) {
            lines[i].replace('\t', '    ');
        }

        // 2) Remove all starting and ending zero length lines.
        //    Keep checking until we come across a non- zero length line.

        let isZeroLengthLine: boolean = true;
        let arrayPosition: number = 0;

        // Remove zero length lines from the beginning of the snippet. Stop at
        // the first line that has snippet code.
        do {
            let currentLine: string = lines[arrayPosition];

            // If the trimmed current line only contains a '', then
            // we can delete this line. Otherwise, we are done
            if (currentLine.trim() === '') {
                lines.splice(arrayPosition, 1);

            } else {
                isZeroLengthLine = false;
            }

            // We'll do this while we haven't encountered a line with content,
            // or whether we got to the end of the array.
        } while (isZeroLengthLine || (arrayPosition === lines.length))

        // Remove zero length lines from the end of the snippet. Stop at
        // the last line that has snippet code.

        // set the array cursor to the end of the array.
        arrayPosition = lines.length - 1;
        // reset flag for zero length lines. We'll now check the end of the
        // snippet for zero length snippets.
        isZeroLengthLine = true;

        // This will do this from the end.
        do {
            let currentLine: string = lines[arrayPosition];

            // If the trimmed current line only contains a '', then
            // we can delete this line. Otherwise, we are done.
            if (currentLine.trim() === '') {
                lines.splice(arrayPosition, 1);
                arrayPosition--;
            } else {
                isZeroLengthLine = false;
            }

            // We'll do this while we haven't encountered a line with content.
        } while (isZeroLengthLine)

        // 3) Determine which line has the smallest indent, save that indent size.

        // Using a large number as a starting place.
        var shortestIndentSize: number = 1024;

        for (let line of lines) {

            let currentLine: string = line;

            if (currentLine.trim() !== '') {
                let spaces: number = line.search(/\S/);
                if (spaces < shortestIndentSize) {
                    shortestIndentSize = spaces;
                }
            }
        }

        // 4) Use the smallest indent size and trim leading whitespace so that
        //    the snippet aligns to the left margin.

        for (let i: number = 0; i < lines.length; i++) {
            if (lines[i].length >= shortestIndentSize) {
                lines[i] = lines[i].substring(shortestIndentSize);
            }
        }

        // 6) Convert the array back into a string and return it.

        var finalSetOfLines: string = '';

        for (let i: number = 0; i < lines.length; i++) {

            // We don't want to add a new line to the end of the last line.
            if (i < lines.length - 1) {
                finalSetOfLines += lines[i] + '\n';
            }
            else {
                finalSetOfLines += lines[i];
            }
        }

        return finalSetOfLines;
    }
};

function cleanSnippet() {

    let utilities = new Utilities();

    var html = utilities.trimWhitespaceLeftAlign(`

            <div id="content-main">
                <h1>Sample snippet</h1>
                <h3>This sample will color the selected range in yellow, and also display the selection address.</h3>
                <p>Switch to the JS and CSS views to see more</p>
                <button id="sample-button">Run sample!</button>
            </div>

            <div id="notification-popup" class="ms-MessageBanner is-hidden">
                <div class="notification-popup-title ms-fontSize-l"></div>
                <div class="ms-MessageBanner-content">
                    <div class="ms-MessageBanner-text">
                        <div class="ms-MessageBanner-clipper"></div>
                    </div>
                    <!--<button class="ms-MessageBanner-expand"> <i class="ms-Icon ms-Icon--chevronsDown"></i> </button>-->
                </div>
                <button class="ms-MessageBanner-close"> <i class="ms-Icon ms-Icon--x"></i> </button>
     	       </div>


        `);
}

document.getElementById("button").addEventListener("click", cleanSnippet);