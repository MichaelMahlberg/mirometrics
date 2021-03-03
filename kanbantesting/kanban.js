const APP_ID = '3074457348136685529'
const VERSION = '0.0.64'
const KANBAN = {
    WORKITEM: 'kanbanworkitem',
    STAGE: 'kanbanstage',
}

async function handleWidgetTransformation(event) {
    let itemIds = event.data.map(widget => widget.id)
    recordStageChangesFor(itemIds)
}

async function handleWidgetCreated(event, something) {
    event.data.forEach(async element => {
        resetHistoryForClonedKanbanItem(element)

    })

}

function resetHistoryForClonedKanbanItem(element) {
    if (isKanbanWorkItem(element)) {
        resetHistory(element.id)
        recordStageChangesFor([element.id])
    }
}

function resetHistory(widgetId) {
    setMetadataEntry(widgetId, "history", [])
}

async function recordStageChangesFor(itemIds) {
    let stages = []

    stages = await collectStages()
    items = await collectKanbanWidgetsFromIds(itemIds)
    
    items.forEach(item => {
        if (stage = itemInStage(item, stages)) {
            console.log("stage", stage)
            recordStageChange(item, stage);
        }
    })

}

function getAllKanbanWorkItems() {
    allWidgets = miro.board.widgets.get({
        metadata: {
            [APP_ID]: {
                [KANBAN.WORKITEM]: true
            }
        }
    })
    return allWidgets
}



async function collectKanbanWidgetsFromIds(itemIds) {
    let widgetPromises = [];
    let items = [];
    itemIds.forEach(item => {
        widgetPromises.push(miro.board.widgets.get({
            id: item
        }))
    })

    return Promise.all(widgetPromises).then(values =>
        items = [].concat.apply([], values).filter(isKanbanWidget)
    )
}

function isKanbanWidget(widget) {
    return typeof widget.metadata[APP_ID] !== 'undefined'
}

function isKanbanWorkItem(widget) {
    return isKanbanWidget(widget) && widget.metadata[APP_ID][KANBAN.WORKITEM] === true
}

function recordStageChange(item, stage) {
    let history = item.metadata[APP_ID].history || [];
    // mit vorheriger Stage vergleichen 
    if (stageHasChanged(history, stage)) {
        history.push({
            stage: stage.id,
            timestamp: (new Date()).getTime(),
            readableTime: (new Date()).toUTCString()
        })
    }
    item.metadata[APP_ID].history = history;
    miro.board.widgets.update(item);
    console.log(history);
}

function stageHasChanged(history, stage) {
    if (history === undefined) {
        return true
    } else if (history.length === 0) {
        return true
    } else if (stage.id != history[history.length - 1].stage) {
        return true;
    }
    return false;
}

function itemInStage(item, stages) {
    let targetStage = null;

    stages.forEach(stage => {
        if (item.x > stage.bounds.left && item.x < stage.bounds.right && item.y < stage.bounds.bottom && item.y > stage.bounds.top) {
            targetStage = stage
        }
    })
    return targetStage;
}

function collectStages() {
    return miro.board.widgets.get({
        metadata: {
            [APP_ID]: {
                [KANBAN.STAGE]: true
            }
        },
    })
}

async function tagItemsAsStage(widgets) {
    addMetadataTag(widgets, KANBAN.STAGE)
}

async function tagItemsAsWorkItem(widgets) {
    addMetadataTag(widgets, KANBAN.WORKITEM);    
    recordStageChangesFor( widgets.map(widget => widget.id) );
}

function addMetadataTag(widgets, tag) {
    console.log("Starting search")
    widgets.forEach(async widget => {
        console.log("another line item", widget)
        setMetadataEntry(widget.id, tag, true)
    })
}

async function setMetadataEntry(widgetId, key, value) {
    widget = await getMiroWidgetByID(widgetId)
    let metadata = widget.metadata[APP_ID] || {}
    metadata[key] = value
    widget.metadata[APP_ID] = metadata
    console.log("before widget log...")
    console.log(widget)
    miro.board.widgets.update(widget)
    console.log("Update happened")
}

async function getMiroWidgetByID(widgetId) {
    widgets = await miro.board.widgets.get({ id: widgetId })
    return widgets[0]
}

async function openBottomPanel() {
    const authorized = await miro.isAuthorized()
    if (authorized) {
        console.log('authorized')
        miro.board.ui.openLeftSidebar('kanbanMetrics.html')
    } else {
        console.log('unauthorized')
        miro.board.ui.openModal('not-authorized.html').then(res => {
            if (res === 'success') {
                console.log('now you are authorized')
            }
        })
    }
}

function widgetsEligibleForKanbanMenuEntries(widgets) {
    exactlyOneWidgetSelected = widgets.length == 1
    return exactlyOneWidgetSelected && itemIsAlreadyInitialized(widgets[0])
}

function itemIsAlreadyInitialized(aWidget) {
    return aWidget.id != "0"
}

if (typeof exports !== 'undefined') {
    module.exports = { widgetsEligibleForKanbanMenuEntries }
}