const APP_ID = '3074457348136685529'
const VERSION = '0.0.53'
const KANBAN = {
    WORKITEM: 'kanbanworkitem',
    STAGE: 'kanbanstage',
}

async function handleWidgetTransformation(event) {
    let itemIds = event.data.map(widget => widget.id)
    updateMovedItems(itemIds)
}

async function updateMovedItems(itemIds) {
    let stages = []

    stages = await collectStages()
    items = await collectKanbanWidgetsFromIds(itemIds)
    updateItemsMetadata(items, stages)
        // find related stage
        // record logical change
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

function updateItemsMetadata(items, stages) {
    // make sure that dropping outside a dropzone also is recorded
    items.forEach(item => {
        if (stage = itemInStage(item, stages)) {
            console.log("stage", stage)
            addStageChange(item, stage);
        }
    })
}

function addStageChange(item, stage) {
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
    addMetadataTag(widgets, KANBAN.WORKITEM)
}

function addMetadataTag(widgets, tag) {
    console.log("Starting search")
    widgets.forEach(widget => {
        console.log("another line item")
        addParameter(widget, tag, true)
    })
}

function addParameter(widget, key, value) {
    let metadata = widget.metadata[APP_ID] || {}
    metadata[key] = value
    widget.metadata[APP_ID] = metadata
    console.log("before widget log...")
    console.log(widget)
        // next time: Make sure that the collection is polpulated (see error https://miro.com/app/board/o9J_kuOV4eU=/?moveToWidget=3074457348999013413&cot=2 )
    miro.board.widgets.update(widget)
    console.log("Update happened")
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