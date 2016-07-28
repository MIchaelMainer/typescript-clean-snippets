var Utilities = (function () {
    function Utilities() {
    }
    Utilities.prototype.trimWhitespaceLeftAlign = function (dirtyHtml) {
        var lines = dirtyHtml.split('\n');
        // 1) Replace each tab with 4 spaces. We need this normalized to spaces
        //    so that we can align the lines to the left.
        // for (let line of lines) {
        //     line.replace('\t', '    ');
        // }
        for (var i = 0; i < lines.length; i++) {
            lines[i].replace('\t', '    ');
        }
        // 2) Remove all starting and ending zero length lines.
        //    Keep checking until we come across a non- zero length line.
        var isZeroLengthLine = true;
        var arrayPosition = 0;
        // Remove zero length lines from the beginning of the snippet. Stop at
        // the first line that has snippet code.
        do {
            var currentLine = lines[arrayPosition];
            // If the trimmed current line only contains a '', then
            // we can delete this line. Otherwise, we are done
            if (currentLine.trim() === '') {
                lines.splice(arrayPosition, 1);
            }
            else {
                isZeroLengthLine = false;
            }
        } while (isZeroLengthLine || (arrayPosition === lines.length));
        // Remove zero length lines from the end of the snippet. Stop at
        // the last line that has snippet code.
        // set the array cursor to the end of the array.
        arrayPosition = lines.length - 1;
        // reset flag for zero length lines. We'll now check the end of the
        // snippet for zero length snippets.
        isZeroLengthLine = true;
        // This will do this from the end.
        do {
            var currentLine = lines[arrayPosition];
            // If the trimmed current line only contains a '', then
            // we can delete this line. Otherwise, we are done.
            if (currentLine.trim() === '') {
                lines.splice(arrayPosition, 1);
                arrayPosition--;
            }
            else {
                isZeroLengthLine = false;
            }
        } while (isZeroLengthLine);
        // 3) Determine which line has the smallest indent, save that indent size.
        // Using a large number as a starting place.
        var shortestIndentSize = 100;
        for (var _i = 0; _i < lines.length; _i++) {
            var line = lines[_i];
            if (line !== '') {
                var spaces = line.search(/\S/);
                if (spaces < shortestIndentSize) {
                    shortestIndentSize = spaces;
                }
            }
        }
        // 4) Use the smallest indent size and trim leading whitespace so that
        //    the snippet aligns to the left margin.
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].length >= shortestIndentSize) {
                lines[i] = lines[i].substring(shortestIndentSize);
            }
        }
        // 6) Convert the array back into a string and return it.
        var finalSetOfLines = '';
        for (var i = 0; i < lines.length; i++) {
            // We don't want to add a new line to the end of the last line.
            if (i < lines.length - 1) {
                finalSetOfLines += lines[i] + '\n';
            }
            else {
                finalSetOfLines += lines[i];
            }
        }
        // for (let line of lines) {
        //     finalSetOfLines += line + '\n';
        // }
        return finalSetOfLines;
    };
    return Utilities;
})();
;
function cleanSnippet() {
    var utilities = new Utilities();
    var html = utilities.trimWhitespaceLeftAlign("\n\n            <div id=\"content-main\">\n                <h1>Sample snippet</h1>\n                <h3>This sample will color the selected range in yellow, and also display the selection address.</h3>\n                <p>Switch to the JS and CSS views to see more</p>\n                <button id=\"sample-button\">Run sample!</button>\n            </div>\n\n            <div id=\"notification-popup\" class=\"ms-MessageBanner is-hidden\">\n                <div class=\"notification-popup-title ms-fontSize-l\"></div>\n                <div class=\"ms-MessageBanner-content\">\n                    <div class=\"ms-MessageBanner-text\">\n                        <div class=\"ms-MessageBanner-clipper\"></div>\n                    </div>\n                    <!--<button class=\"ms-MessageBanner-expand\"> <i class=\"ms-Icon ms-Icon--chevronsDown\"></i> </button>-->\n                </div>\n                <button class=\"ms-MessageBanner-close\"> <i class=\"ms-Icon ms-Icon--x\"></i> </button>\n     \t       </div>\n\n\n        ");
}
document.getElementById("button").addEventListener("click", cleanSnippet);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsaXR5LnRzIl0sIm5hbWVzIjpbIlV0aWxpdGllcyIsIlV0aWxpdGllcy5jb25zdHJ1Y3RvciIsIlV0aWxpdGllcy50cmltV2hpdGVzcGFjZUxlZnRBbGlnbiIsImNsZWFuU25pcHBldCJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7SUE4R0FDLENBQUNBO0lBNUdHRCwyQ0FBdUJBLEdBQXZCQSxVQUF3QkEsU0FBaUJBO1FBQ3JDRSxJQUFJQSxLQUFLQSxHQUFhQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUU1Q0EsdUVBQXVFQTtRQUN2RUEsaURBQWlEQTtRQUVqREEsNEJBQTRCQTtRQUM1QkEsa0NBQWtDQTtRQUNsQ0EsSUFBSUE7UUFFSkEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDNUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQ25DQSxDQUFDQTtRQUVEQSx1REFBdURBO1FBQ3ZEQSxpRUFBaUVBO1FBRWpFQSxJQUFJQSxnQkFBZ0JBLEdBQVlBLElBQUlBLENBQUNBO1FBQ3JDQSxJQUFJQSxhQUFhQSxHQUFXQSxDQUFDQSxDQUFDQTtRQUU5QkEsc0VBQXNFQTtRQUN0RUEsd0NBQXdDQTtRQUN4Q0EsR0FBR0EsQ0FBQ0E7WUFDQUEsSUFBSUEsV0FBV0EsR0FBV0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFFL0NBLHVEQUF1REE7WUFDdkRBLGtEQUFrREE7WUFDbERBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1QkEsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFFbkNBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxnQkFBZ0JBLEdBQUdBLEtBQUtBLENBQUNBO1lBQzdCQSxDQUFDQTtRQUlMQSxDQUFDQSxRQUFRQSxnQkFBZ0JBLElBQUlBLENBQUNBLGFBQWFBLEtBQUtBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEVBQUNBO1FBRTlEQSxnRUFBZ0VBO1FBQ2hFQSx1Q0FBdUNBO1FBRXZDQSxnREFBZ0RBO1FBQ2hEQSxhQUFhQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNqQ0EsbUVBQW1FQTtRQUNuRUEsb0NBQW9DQTtRQUNwQ0EsZ0JBQWdCQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUV4QkEsa0NBQWtDQTtRQUNsQ0EsR0FBR0EsQ0FBQ0E7WUFDQUEsSUFBSUEsV0FBV0EsR0FBV0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFFL0NBLHVEQUF1REE7WUFDdkRBLG1EQUFtREE7WUFDbkRBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUM1QkEsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxhQUFhQSxFQUFFQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLGdCQUFnQkEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDN0JBLENBQUNBO1FBR0xBLENBQUNBLFFBQVFBLGdCQUFnQkEsRUFBQ0E7UUFFMUJBLDBFQUEwRUE7UUFFMUVBLDRDQUE0Q0E7UUFDNUNBLElBQUlBLGtCQUFrQkEsR0FBV0EsR0FBR0EsQ0FBQ0E7UUFFckNBLEdBQUdBLENBQUNBLENBQWFBLFVBQUtBLEVBQWpCQSxpQkFBUUEsRUFBUkEsSUFBaUJBLENBQUNBO1lBQWxCQSxJQUFJQSxJQUFJQSxHQUFJQSxLQUFLQSxJQUFUQTtZQUVUQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDZEEsSUFBSUEsTUFBTUEsR0FBV0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO29CQUM5QkEsa0JBQWtCQSxHQUFHQSxNQUFNQSxDQUFDQTtnQkFDaENBLENBQUNBO1lBQ0xBLENBQUNBO1NBQ0pBO1FBRURBLHNFQUFzRUE7UUFDdEVBLDRDQUE0Q0E7UUFFNUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQVdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBQzVDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4Q0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtZQUN0REEsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFFREEseURBQXlEQTtRQUV6REEsSUFBSUEsZUFBZUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFFakNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQVdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO1lBRTVDQSwrREFBK0RBO1lBQy9EQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkJBLGVBQWVBLElBQUlBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1lBQ3ZDQSxDQUFDQTtZQUNEQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDRkEsZUFBZUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaENBLENBQUNBO1FBQ0xBLENBQUNBO1FBRURBLDRCQUE0QkE7UUFDNUJBLHNDQUFzQ0E7UUFDdENBLElBQUlBO1FBRUpBLE1BQU1BLENBQUNBLGVBQWVBLENBQUNBO0lBQzNCQSxDQUFDQTtJQUNMRixnQkFBQ0E7QUFBREEsQ0FBQ0EsQUE5R0QsSUE4R0M7QUFBQSxDQUFDO0FBRUY7SUFFSUcsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsU0FBU0EsRUFBRUEsQ0FBQ0E7SUFFaENBLElBQUlBLElBQUlBLEdBQUdBLFNBQVNBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsdWdDQXFCeENBLENBQUNBLENBQUNBO0FBQ1hBLENBQUNBO0FBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMifQ==