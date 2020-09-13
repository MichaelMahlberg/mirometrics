const kanbanMetrics = require("../kanbantesting/kanbanMetrics");

describe('KanbanCsvRenderer', () => {
    const NEWLINE = "\n";
    test('naked Renderer delivers proper headlines', () => {
        transitionsList = [];
        renderer = new kanbanMetrics.KanbanCsvRenderer(transitionsList);

        result = renderer.render();

        expect(result).toBe('"ID";"From Stage";"To Stage";"Timestamp";"plain Text and readable Time"' + NEWLINE)
    })

    test('One data line delivers one csv line with headlines', () => {
        itemsList = [{
            "id": "3074457349235411623",
            "metadata": {
                "3074457348136685529": {
                    "history": [{
                        "readableTime": "Fri, 07 Aug 2020 10:43:03 GMT",
                        "stage": "3074457349235412031",
                        "timestamp": 1596796983566
                    }],
                    "kanbanworkitem": true
                }
            },
            "text": "<p>Technical debt: Move authorization to appropriate place</p>",
            "plainText": "Technical debt: Move authorization to appropriate place"
        }];
        renderer = new kanbanMetrics.KanbanCsvRenderer(itemsList);

        result = renderer.render();

        expect(result).toBe('"ID";"From Stage";"To Stage";"Timestamp";"plain Text and readable Time"' + NEWLINE + '3074457349235411623;"NewItem";"3074457349235412031";1596796983566;"(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 10:43:03 GMT)"' + NEWLINE)
    })

    test('One data line with 2 history entries delivers two csv lines with headlines', () => {
        itemsList = [{
            "id": "3074457349235411623",
            "metadata": {
                "3074457348136685529": {
                    "history": [{
                            "readableTime": "Fri, 07 Aug 2020 10:43:03 GMT",
                            "stage": "3074457349235412031",
                            "timestamp": 1596796983566
                        },
                        {
                            "readableTime": "Fri, 07 Aug 2020 22:06:20 GMT",
                            "stage": "3074457349235471811",
                            "timestamp": 1596837980945
                        }
                    ],
                    "kanbanworkitem": true
                }
            },
            "text": "<p>Technical debt: Move authorization to appropriate place</p>",
            "plainText": "Technical debt: Move authorization to appropriate place"
        }];
        renderer = new kanbanMetrics.KanbanCsvRenderer(itemsList);

        result = renderer.render();

        expect(result).toBe('"ID";"From Stage";"To Stage";"Timestamp";"plain Text and readable Time"' + NEWLINE +
            '3074457349235411623;"NewItem";"3074457349235412031";1596796983566;"(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 10:43:03 GMT)"' + NEWLINE +
            '3074457349235411623;"3074457349235412031";"3074457349235471811";1596837980945;"(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 22:06:20 GMT)"' + NEWLINE
        )
    })


    test('Two data line with 2 history entries each delivers four csv lines with headlines', () => {
        itemsList = [{
            "id": "3074457349235411623",
            "metadata": {
                "3074457348136685529": {
                    "history": [{
                            "readableTime": "Fri, 07 Aug 2020 10:43:03 GMT",
                            "stage": "3074457349235412031",
                            "timestamp": 1596796983566
                        },
                        {
                            "readableTime": "Fri, 07 Aug 2020 22:06:20 GMT",
                            "stage": "3074457349235471811",
                            "timestamp": 1596837980945
                        }
                    ],
                    "kanbanworkitem": true
                }
            },
            "text": "<p>Technical debt: Move authorization to appropriate place</p>",
            "plainText": "Technical debt: Move authorization to appropriate place"
        }, {
            "id": "3074457349235472041",
            "metadata": {
                "3074457348136685529": {
                    "history": [{
                            "readableTime": "Fri, 07 Aug 2020 10:46:03 GMT",
                            "stage": "3074457349235412031",
                            "timestamp": 1596797163708
                        },
                        {
                            "readableTime": "Fri, 07 Aug 2020 10:46:07 GMT",
                            "stage": "3074457349235471811",
                            "timestamp": 1596797167691
                        }
                    ],
                    "kanbanworkitem": true
                }
            },
            "text": "<p>Display stats for one item only on menu click</p>",
            "plainText": "Display stats for one item only on menu click",
            "tags": []
        }];
        renderer = new kanbanMetrics.KanbanCsvRenderer(itemsList);

        result = renderer.render();

        expect(result).toBe('"ID";"From Stage";"To Stage";"Timestamp";"plain Text and readable Time"' + NEWLINE +
            '3074457349235411623;"NewItem";"3074457349235412031";1596796983566;"(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 10:43:03 GMT)"' + NEWLINE +
            '3074457349235411623;"3074457349235412031";"3074457349235471811";1596837980945;"(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 22:06:20 GMT)"' + NEWLINE +
            '3074457349235472041;"NewItem";"3074457349235412031";1596797163708;"(Display stats for one item only on menu click Fri, 07 Aug 2020 10:46:03 GMT)"' + NEWLINE +
            '3074457349235472041;"3074457349235412031";"3074457349235471811";1596797167691;"(Display stats for one item only on menu click Fri, 07 Aug 2020 10:46:07 GMT)"' + NEWLINE
        )
    })
});