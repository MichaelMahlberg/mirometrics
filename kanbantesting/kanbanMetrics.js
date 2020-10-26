function printItemTransitionsTo(elementName) {

    getAllKanbanWorkItems().then(
        items => {
            csvData = new KanbanWorkitemTransitionsCsvRenderer(items).render()
            printCsvDataToTextarea(csvData, elementName)
        },
        function(error) { console.error(error) }
    )
}

function printCsvDataToTextarea(csvData, elementName) {
    textarea = document.getElementById(elementName);
    textarea.value = csvData;
}

// CSVRenderer Object
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

// KanbanWorkitemTransitionsCsvRenderer Object
function KanbanWorkitemTransitionsCsvRenderer(itemsList) {
    var itemsList;
    const APP_ID = "3074457348136685529";
    var csvItemsList = [];

    function render() {
        var headlineItems = ["ID", "From Stage", "To Stage", "Timestamp", "plain Text and readable Time"];
        var quotings = [false, true, true, false, true];

        itemsList.forEach(item => {
            if (hasHistory(item)) {
                addHistoryEntriesToCsvEntryList(item);
            }
        });
        var csvRenderer = new CsvRenderer(headlineItems, csvItemsList, quotings)
        return csvRenderer.render();
    }

    function addHistoryEntriesToCsvEntryList(item) {
        lastStage = "NewItem";
        item.metadata[APP_ID]['history'].forEach(historyEntry => {
            var csvItem = [];
            csvItem.push(item['id']);
            csvItem.push(lastStage);
            csvItem.push(historyEntry['stage'])
            csvItem.push(historyEntry['timestamp'])
            csvItem.push("(" + item['plainText'] + " " + historyEntry['readableTime'] + ")");

            lastStage = historyEntry.stage;
            csvItemsList.push(csvItem);
        });
    }

    function hasHistory(item) {
        return item.metadata[APP_ID] && item.metadata[APP_ID]['history']
    }

    return {
        render: render
    }
}

if (typeof exports !== 'undefined') {
    module.exports = {
        CsvRenderer,
        KanbanCsvRenderer: KanbanWorkitemTransitionsCsvRenderer
    }
}