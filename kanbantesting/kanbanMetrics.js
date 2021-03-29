const NoStageId = "NoStage";

function printItemTransitionsTo(elementName) {
    // item = getAllKanbanWorkItems();
    // stages = await collectStages();
    // csvData = new KanbanWorkitemTransitionsCsvRenderer(items, stages).render()
     
    // Learning: Promise.all waits for all promises to be resolved and 
    // returns an array with the result of each promise as a separate entry 
    // in said array
    // Also: [name, name] "catches" the results in object of said names

    Promise.all( [getAllKanbanWorkItems(), collectStages()] ).then(
        ([items,stages]) => {
            csvData = new KanbanWorkitemTransitionsCsvRenderer(items,stages).render()
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
function KanbanWorkitemTransitionsCsvRenderer(itemsList, stageList) {
    const APP_ID = "3074457348136685529";
    var csvItemsList = [];

    function render() {
        var headlineItems = ["ID", "From stage", "From stage name", "To stage", "To stage name", "Timestamp", "Plain text and readable time"];
        var quotings = [false, true, true, true, true, false, true];

        itemsList.forEach(item => {
            if (hasHistory(item)) {
                addHistoryEntriesToCsvEntryList(item, stageList);
            }
        });
        var csvRenderer = new CsvRenderer(headlineItems, csvItemsList, quotings)
        return csvRenderer.render();
    }

    function getRealNameFor(stageId, stageList) {

        if (stageId == NoStageId) return "unstaged";
        foundStage = stageList.find(element => element.id == stageId);
        // could be replaced with a long and readable version for old people. :D
        /*
        foundStage = stageList.find(function(element) {
            if (element.id == stageId) {
                return true;
            }
            return false
        })
        */
        if (!foundStage) return "Stage was deleted";
        return foundStage.plainText
    }

    function addHistoryEntriesToCsvEntryList(item, stageList) {
        lastStage = NoStageId;
        item.metadata[APP_ID]['history'].forEach(historyEntry => {
            var csvItem = [];
            csvItem.push(item['id']);
            csvItem.push(lastStage);
            csvItem.push(getRealNameFor(lastStage, stageList));
            csvItem.push(historyEntry['stage'])
            csvItem.push(getRealNameFor(historyEntry['stage'], stageList));
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