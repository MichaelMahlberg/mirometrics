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

function CsvRenderer(headlineItems, lines, quoteHints) {
    var headlineItems;
    var lines;
    var quoteHints;

    var quotedLineItemsList = [];

    function render() {
        prepareHeadlineItems()
        prepareContentItems()
        return convertArrayToString(renderLines())
    }

    function prepareHeadlineItems() {
        if (hasItems(headlineItems)) {
            quotedLineItemsList.push(wrapEachItemInQuotes(headlineItems))
        }
    }

    function prepareContentItems() {
        lines.forEach(prepareContentLine)
    }

    function prepareContentLine(lineItems) {
        quotedLineItemsList.push(wrapItemsConditionallyInQuotes(lineItems))
    }

    function convertArrayToString(theArray) {
        return theArray.join("")
    }

    function renderLines() {
        return quotedLineItemsList.map(joinWithDelimiterAndAddLineSeparator)
    }

    function wrapItemsConditionallyInQuotes(items) {
        return hasItems(quoteHints) ?
            items.map((item, i) => quoteHints[i] ? wrapInQuotes(item) : item) :
            wrapEachItemInQuotes(items)
    }

    function wrapEachItemInQuotes(items) {
        return items.map(wrapInQuotes);
    }

    function wrapInQuotes(value) {
        return '"' + value + '"'
    }

    function hasItems(anArray) {
        return anArray && anArray.length > 0
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