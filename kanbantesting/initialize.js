console.log("included initialize file")

miro.onReady(() => {
    console.log('Kanbantesting: ' + VERSION)
    const svgIcon =
        //'<svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 72 72" style="enable-background:new 0 0 72 72;" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;} .st1{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}	.st2{fill:#FF0000;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}</style><path class="st0" d="M64.2,66.3H8.6c-2.4,0-4.4-2-4.4-4.4V10c0-2.4,2-4.4,4.4-4.4h55.5c2.4,0,4.4,2,4.4,4.4v51.9	C68.6,64.3,66.6,66.3,64.2,66.3z"/><line class="st1" x1="8" y1="20.7" x2="63.4" y2="20.7"/><line class="st1" x1="23.5" y1="11.3" x2="23.5" y2="56.8"/><line class="st1" x1="47.8" y1="11.3" x2="47.8" y2="57.6"/><rect x="8.9" y="25.8" class="st1" width="10.9" height="7.5"/><rect x="29.7" y="25.1" class="st2" width="10.9" height="7.5"/><rect x="29.7" y="36.4" class="st1" width="10.9" height="7.5"/><rect x="51.9" y="25.1" transform="matrix(0.9824 -0.1868 0.1868 0.9824 -4.3718 11.2199)" class="st1" width="10.9" height="7.5"/></svg>'
        '<svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 72 72" style="enable-background:new 0 0 72 72;" xml:space="preserve"><g>	<g>		<path d="M64.15,67.81H8.65c-3.26,0-5.91-2.65-5.91-5.91V10.03c0-3.26,2.65-5.91,5.91-5.91h55.5c3.26,0,5.91,2.65,5.91,5.91v51.88			C70.05,65.16,67.4,67.81,64.15,67.81z M8.65,7.12c-1.6,0-2.91,1.3-2.91,2.91v51.88c0,1.6,1.3,2.91,2.91,2.91h55.5			c1.6,0,2.91-1.3,2.91-2.91V10.03c0-1.6-1.3-2.91-2.91-2.91H8.65z"/>	</g></g><g>	<rect x="8.03" y="19.69" width="55.39" height="2"/></g><g>	<rect x="22.52" y="11.31" width="2" height="45.5"/></g><g>	<rect x="46.76" y="11.31" width="2" height="46.25"/></g><g>	<path d="M20.73,34.31H7.87v-9.49h12.86V34.31z M9.87,32.31h8.86v-5.49H9.87V32.31z"/></g><g>	<path d="M41.54,33.55H28.68v-9.49h12.86V33.55z M30.68,31.55h8.86v-5.49h-8.86V31.55z"/></g><g>	<path d="M41.54,44.9H28.68v-9.49h12.86V44.9z M30.68,42.9h8.86v-5.49h-8.86V42.9z"/></g><g>	<path d="M51.92,34.67l-1.77-9.32l12.63-2.4l1.77,9.32L51.92,34.67z M52.49,26.94l1.03,5.39l8.7-1.65l-1.03-5.4L52.49,26.94z"/></g></svg>'

    miro.initialize({
        extensionPoints: {
            toolbar: {
                title: 'Cool metrics for Kanban',
                svgIcon: svgIcon,
                toolbarSvgIcon: svgIcon,
                librarySvgIcon: svgIcon,
                onClick: async() => {
                    openBottomPanel()
                },
            },
            bottomBar: {
                title: 'Kanbantesting',
                svgIcon: svgIcon,
                onClick: () => {
                    openBottomPanel()
                },
            },
            getWidgetMenuItems: widgets => {
                console.log("logging widgets from menu handler", widgets)
                if (widgetsEligibleForKanbanMenuEntries(widgets)) {
                    return Promise.resolve([{
                        tooltip: 'Stage',
                        svgIcon: svgIcon,
                        onClick: () => {
                            tagItemsAsStage(widgets)
                        },
                    }, {
                        tooltip: 'Item',
                        svgIcon: svgIcon,
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