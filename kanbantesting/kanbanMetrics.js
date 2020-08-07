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
    function render(headlineItems, lines) {
        result = ""
        if (headlineItems.length > 0) {
            headlineItems = wrapEachItemInQuotes(headlineItems)
            result += joinWithDelimiterAndAddLineSeparator(headlineItems);
        }
        if (lines.length > 0) {
            lines = lines.map(lineItems => {
                wrappedLineItems = wrapEachItemInQuotes(lineItems)
                return joinWithDelimiterAndAddLineSeparator(wrappedLineItems)
            })
            result += lines.join("")
        }
        return result
    }

    function wrapEachItemInQuotes(items) {
        return items.map(value => wrapInQuotes(value));
    }

    function wrapInQuotes(value) {
        return '"' + value + '"'
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