console.log("kanban Metrics loaded")

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
    return transitionsList;
}

function TransitionsCsvRenderer() {
    function render() {
        return '';
    }

    return {
        render: render
    }
}


if (typeof exports !== 'undefined') {
    module.exports = {
        TransitionsCsvRenderer
    }
}