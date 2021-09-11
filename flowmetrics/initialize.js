console.log("included initialize file")

colors = {
    default: 'currentColor',
    dark: '#555',
    medium: '#999'
}

colorsDev = {
    default: 'red',
    dark: 'red',
    medium: 'red'
}

miro.onReady(() => {
    console.log('Flowmetrics: ' + VERSION)
    console.log('DEV: ' + DEV)
    const colorScheme = DEV ? colorsDev : colors;
    const svgIcon = `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="44" height="44" rx="4" stroke-width="4" stroke="${colorScheme.default}" fill="none"/>
    <line x1="6" y1="11" x2="42" y2="11" stroke-width="2" stroke="currentColor"/>
    <line x1="17" y1="12" x2="17" y2="36" stroke-width="2" stroke="currentColor"/>
    <line x1="31" y1="12" x2="31" y2="36" stroke-width="2" stroke="currentColor"/>
    <rect x="20" y="14" width="8" height="6" rx="0" stroke-width="0" fill="currentColor" opacity="0.5"  />
    <rect x="6" y="14" width="8" height="6" rx="0" stroke-width="0" fill="currentColor" opacity="0.5"  />
    <rect x="20" y="22" width="8" height="6" rx="0" stroke-width="0" fill="currentColor" opacity="0.5"  />
    <rect x="20" y="30" width="8" height="6" rx="0" stroke-width="0" fill="currentColor" opacity="0.5"  />
    <rect x="34" y="14" width="8" height="6" rx="0" stroke-width="0" fill="currentColor" opacity="0.5"  />
    <rect x="34" y="22" width="8" height="6" rx="0" stroke-width="0" fill="currentColor" opacity="0.5" />
  </svg>
`;

const svgIconStageTemplate = `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<line x1="0" y1="11" x2="48" y2="11" stroke-width="2" stroke="${colorScheme.dark}"/>
<line x1="15" y1="12" x2="15" y2="48" stroke-width="2" stroke="${colorScheme.dark}"/>
<line x1="31" y1="12" x2="31" y2="48" stroke-width="2" stroke="${colorScheme.dark}"/>
<rect x="16" y="12" width="14" height="36" rx="0" stroke-width="0" fill="{fillColor}" stroke="currentColor"/>
</svg>
`;
const svgIconStageNormal = svgIconStageTemplate.replace('{fillColor}', '#cecece');
const svgIconStageHighlight = svgIconStageTemplate.replace('{fillColor}', '#7777ff');

const svgIconWorkItemTemplate = `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<line x1="0" y1="11" x2="48" y2="11" stroke-width="2" stroke="${colorScheme.medium}"/>
<line x1="15" y1="12" x2="15" y2="48" stroke-width="2" stroke="${colorScheme.medium}"/>
<line x1="31" y1="12" x2="31" y2="48" stroke-width="2" stroke="${colorScheme.medium}"/>
<rect x="6" y="10" width="36" height="24" rx="0" stroke-width="2" stroke="${colorScheme.default}" fill="{fillColor}" transform="rotate(-12 24 24)"/>
</svg>
`;
const svgIconWorkItemNormal = svgIconWorkItemTemplate.replace('{fillColor}', '#cecece');
const svgIconWorkItemHighlight = svgIconWorkItemTemplate.replace('{fillColor}', '#7777ff');

    miro.initialize({
        extensionPoints: {
            toolbar: {
                title: 'Show me the Kanban Widgets',
                svgIcon: svgIcon,
                toolbarSvgIcon: svgIcon,
                librarySvgIcon: svgIcon,
                onClick: () => {
                    toggleKanbanWidgetHighlighting()
                },
            },
            bottomBar: {
                    title: 'Cool metrics for Kanban',
                    svgIcon: svgIcon,
                    onClick: () => {
                        openBottomPanel()
                    }
                },
            getWidgetMenuItems: widgets => {
                console.log("logging widgets from menu handler", widgets)
                if (widgetsEligibleForKanbanMenuEntries(widgets)) {

                    if(allWidgetsAreStages(widgets)) {
                        stageToolTipText = "Is Stage";
                        svgIconStage = svgIconStageHighlight;
                    } else {
                        stageToolTipText = "Make Stage";
                        svgIconStage = svgIconStageNormal;
                    }

                    if( allWidgetsAreWorkItems(widgets)) {
                        workItemToolTipText = "Is WorkItem";
                        svgIconWorkItem = svgIconWorkItemHighlight;
                    } else {
                        workItemToolTipText = "Make WorkItem";
                        svgIconWorkItem = svgIconWorkItemNormal;
                    }

                    return Promise.resolve([{
                        tooltip: stageToolTipText,
                        svgIcon: svgIconStage,
                        onClick: () => {
                            tagItemsAsStage(widgets)
                        },
                    }, {
                        tooltip: workItemToolTipText,
                        svgIcon: svgIconWorkItem,
                        onClick: () => {
                            tagItemsAsWorkItem(widgets)
                        },
                    }, ])
                } else {
                    return Promise.resolve()
                }
            },
        },
    })

    let listenerTransform = miro.addListener(
        'WIDGETS_TRANSFORMATION_UPDATED',
        handleWidgetTransformation
    )
    let listenerCreated = miro.addListener(
        'WIDGETS_CREATED',
        handleWidgetCreated
    )
})