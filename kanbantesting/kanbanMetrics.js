function printStatisticsTo(elementName) {
    getAllKanbanWorkItems().then(
        items => {
            transitionsList = collectHistoryTransitionsFromWorkItems(items);
            printTransitionsListToTransitionsArea(transitionsList, elementName);
        },
        function(error) { console.error(error) }
    )
}

function printTransitionsListToTransitionsArea(transitionsList, elementName) {
    textarea = document.getElementById(elementName);
    textarea.value = transitionsList.join("\n");
}

function collectHistoryTransitionsFromWorkItems(items) {
    transitionsList = [];
    items.forEach(item => {
        lastStage = "NewItem";
        item.metadata[APP_ID]['history'].forEach(historyEntry => {

            transition = item['id'] + ";" + lastStage + ";" +
                historyEntry['stage'] + ";" +
                historyEntry['timestamp'] + ";(" +
                item['plainText'] + " " +
                historyEntry['readableTime'] + ")";

            lastStage = historyEntry.stage;
            transitionsList.push(transition);
        });
    });
    return transitionsList
}

function CsvRenderer() {

    var quoteHints;

    function render(headlineItems, lines, _quoteHints) {
        quoteHints = _quoteHints
        return renderHeadline(headlineItems) + renderContent(lines)
    }

    function renderContent(lines) {
        return hasItems(lines) ? lines.map(lineItems => {
            wrappedLineItems = wrapItemsConditionallyInQuotes(lineItems);
            return joinWithDelimiterAndAddLineSeparator(wrappedLineItems);
        }).join("") : ""
    }

    function wrapAndJoinItemsAndAddDelimiter(lineItems) {
        wrappedLineItems = wrapEachItemInQuotes(lineItems);
        return joinWithDelimiterAndAddLineSeparator(wrappedLineItems);
    }

    function renderHeadline(headlineItems) {
        return hasItems(headlineItems) ? wrapAndJoinItemsAndAddDelimiter(headlineItems) : ""
    }

    function wrapItemsConditionallyInQuotes(items) {
        return items.map((value, index) => typeof quoteHints === 'undefined' || quoteHints[index] === true ? wrapInQuotes(value) : value);
    }

    function wrapEachItemInQuotes(items) {
        return items.map(wrapInQuotes);
    }

    function wrapInQuotes(value) {
        return '"' + value + '"'
    }

    function hasItems(anArray) {
        return anArray.length > 0
    }

    function joinWithDelimiterAndAddLineSeparator(lineItems) {
        return lineItems.join(";") + "\n"
    }
    return {
        render: render
    }
}


if (typeof exports !== 'undefined') {
    module.exports = {
        CsvRenderer
    }
}