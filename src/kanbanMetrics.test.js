const kanban = require('../kanbantesting/kanbanMetrics');

test('Original behaviour of collectHistoryTransitionsFromWorkItems ', () => {
    APP_ID = '3074457348136685529'
    testData = testJSONforCsvRenderer()

    actual = kanban.collectHistoryTransitionsFromWorkItems(testData)

    expect(actual.length).toBe(6)
    expect(actual[0]).toBe("3074457349235411623;NewItem;3074457349235412031;1596796983566;(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 10:43:03 GMT)")
    expect(actual[1]).toBe("3074457349235411623;3074457349235412031;3074457349235471811;1596837980945;(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 22:06:20 GMT)")
    expect(actual[2]).toBe("3074457349235411623;3074457349235471811;3074457349235412031;1596837983340;(Technical debt: Move authorization to appropriate place Fri, 07 Aug 2020 22:06:23 GMT)")
    expect(actual[3]).toBe("3074457349235472041;NewItem;3074457349235412031;1596797163708;(Display stats for one item only on menu click Fri, 07 Aug 2020 10:46:03 GMT)")
    expect(actual[4]).toBe("3074457349235472041;3074457349235412031;3074457349235471811;1596797167691;(Display stats for one item only on menu click Fri, 07 Aug 2020 10:46:07 GMT)")
    expect(actual[5]).toBe("3074457349235472041;3074457349235471811;3074457349235412031;1596797169614;(Display stats for one item only on menu click Fri, 07 Aug 2020 10:46:09 GMT)")
})



exampleData = [{
        "id": "3074457349235411623",
        "type": "STICKER",
        "bounds": {
            "x": 8918.457416330819,
            "y": 11366.402860256698,
            "top": 10677.649706141623,
            "left": 7861.160907820835,
            "bottom": 12055.156014371774,
            "right": 9975.753924840803,
            "width": 2114.593017019969,
            "height": 1377.5063082301513
        },
        "style": {
            "stickerBackgroundColor": "#ff9d48",
            "fontSize": 32,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
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
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 22:06:23 GMT",
                        "stage": "3074457349235412031",
                        "timestamp": 1596837983340
                    }
                ],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347281388380",
        "x": 8918.457416330819,
        "y": 11366.4028602567,
        "scale": 6.041694334342768,
        "text": "<p>Technical debt: Move authorization to appropriate place</p>",
        "plainText": "Technical debt: Move authorization to appropriate place",
        "tags": []
    },
    {
        "id": "3074457349235472041",
        "type": "STICKER",
        "bounds": {
            "x": 7807.717882695328,
            "y": 12944.590608848508,
            "top": 12431.003488257564,
            "left": 7019.316601086422,
            "bottom": 13458.177729439452,
            "right": 8596.119164304233,
            "width": 1576.8025632178112,
            "height": 1027.1742411818884
        },
        "style": {
            "stickerBackgroundColor": "#fff9b1",
            "fontSize": 26,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
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
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 10:46:09 GMT",
                        "stage": "3074457349235412031",
                        "timestamp": 1596797169614
                    }
                ],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347393353854",
        "x": 7807.717882695328,
        "y": 12944.590608848508,
        "scale": 4.5051501806223175,
        "text": "<p>Display stats for one item only on menu click</p>",
        "plainText": "Display stats for one item only on menu click",
        "tags": []
    },
    {
        "id": "3074457348999657655",
        "type": "STICKER",
        "bounds": {
            "x": 8510.529178408282,
            "y": 9829.592854075152,
            "top": 9140.839699960077,
            "left": 7453.232669898298,
            "bottom": 10518.346008190229,
            "right": 9567.825686918266,
            "width": 2114.593017019969,
            "height": 1377.5063082301513
        },
        "style": {
            "stickerBackgroundColor": "#ff9d48",
            "fontSize": 28,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
        "metadata": {
            "3074457348136685529": {
                "history": [{
                    "readableTime": "Fri, 07 Aug 2020 10:43:03 GMT",
                    "stage": "3074457349235412031",
                    "timestamp": 1596796983565
                }],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347393353854",
        "x": 8510.529178408282,
        "y": 9829.592854075152,
        "scale": 6.041694334342768,
        "text": "<p>Technical debt: replace timestamp in js-include with sensible data</p>",
        "plainText": "Technical debt: replace timestamp in js-include with sensible data",
        "tags": []
    },
    {
        "id": "3074457349235356757",
        "type": "STICKER",
        "bounds": {
            "x": 8510.529178408282,
            "y": 8452.086545845,
            "top": 7763.333391729925,
            "left": 7453.232669898298,
            "bottom": 9140.839699960077,
            "right": 9567.825686918266,
            "width": 2114.593017019969,
            "height": 1377.5063082301513
        },
        "style": {
            "stickerBackgroundColor": "#ff9d48",
            "fontSize": 34,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
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
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347393353854",
        "x": 8510.529178408282,
        "y": 8452.086545845,
        "scale": 6.041694334342768,
        "text": "<p>Issue: Only works if everyone has the plugin installed</p>",
        "plainText": "Issue: Only works if everyone has the plugin installed",
        "tags": []
    },
    {
        "id": "3074457349235302013",
        "type": "STICKER",
        "bounds": {
            "x": 13439.010727970708,
            "y": 8045.036717798676,
            "top": 7684.9952889321885,
            "left": 12886.31555207917,
            "bottom": 8405.078146665164,
            "right": 13991.705903862246,
            "width": 1105.3903517830765,
            "height": 720.0828577329755
        },
        "style": {
            "stickerBackgroundColor": "#fff9b1",
            "fontSize": 46,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
        "metadata": {
            "3074457348136685529": {
                "history": [{
                    "readableTime": "Fri, 07 Aug 2020 10:45:06 GMT",
                    "stage": "3074457349235471811",
                    "timestamp": 1596797106798
                }],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347393353854",
        "x": 13439.010727970708,
        "y": 8045.036717798676,
        "scale": 3.158258147951647,
        "text": "<p>Display stats on menu click</p>",
        "plainText": "Display stats on menu click",
        "tags": []
    },
    {
        "id": "3074457348141082871",
        "type": "STICKER",
        "bounds": {
            "x": 768.4940172966844,
            "y": 7403.291962863437,
            "top": 7043.250533996949,
            "left": 454.24733157549554,
            "bottom": 7763.333391729925,
            "right": 1082.7407030178733,
            "width": 628.4933714423778,
            "height": 720.0828577329755
        },
        "style": {
            "stickerBackgroundColor": "#fff9b1",
            "fontSize": 38,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 0
        },
        "metadata": {
            "3074457348136685529": {
                "history": [{
                        "readableTime": "Tue, 26 May 2020 12:34:42 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496482293
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:34:45 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496485728
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:34:47 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496487717
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:34:50 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496490112
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:34:53 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496493510
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:35:09 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496509578
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:06 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496686489
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:07 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496687354
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:08 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496688419
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:09 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496689297
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:09 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496689929
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:10 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496690552
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:13 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590496693027
                    },
                    {
                        "readableTime": "Tue, 26 May 2020 12:38:13 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590496693923
                    },
                    {
                        "readableTime": "Wed, 27 May 2020 08:41:55 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590568915094
                    },
                    {
                        "readableTime": "Wed, 27 May 2020 08:41:59 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590568919581
                    },
                    {
                        "readableTime": "Wed, 27 May 2020 08:42:01 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590568921523
                    },
                    {
                        "readableTime": "Wed, 27 May 2020 13:03:12 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1590584592442
                    },
                    {
                        "readableTime": "Wed, 27 May 2020 13:03:13 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1590584593771
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 08:59:33 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1591865973731
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:15:26 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1591874126432
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:19:45 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1591874385578
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:19:47 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1591874387371
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:21:11 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1591874471334
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:21:13 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1591874473203
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:24:41 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1591874681805
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:24:43 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1591874683648
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:25:14 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1591874714978
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:25:17 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1591874717035
                    },
                    {
                        "readableTime": "Thu, 11 Jun 2020 11:26:09 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1591874769169
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:29:24 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1592209764964
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:29:26 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1592209766937
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:29:28 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1592209768856
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:38:59 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1592210339398
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:39:01 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1592210341982
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:39:20 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1592210360744
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:39:22 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1592210362427
                    },
                    {
                        "readableTime": "Mon, 15 Jun 2020 08:39:40 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1592210380539
                    },
                    {
                        "readableTime": "Tue, 21 Jul 2020 11:15:56 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1595330156037
                    },
                    {
                        "readableTime": "Tue, 21 Jul 2020 11:16:32 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595330192116
                    },
                    {
                        "readableTime": "Tue, 21 Jul 2020 11:17:51 GMT",
                        "stage": "3074457348981235610",
                        "timestamp": 1595330271794
                    },
                    {
                        "readableTime": "Tue, 21 Jul 2020 11:17:55 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595330275409
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:22:06 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1595409726310
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:22:08 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595409728433
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:22:13 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1595409733370
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:22:20 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595409740333
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:25:24 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1595409924935
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:25:27 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595409927232
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:28:33 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1595410113619
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:28:36 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595410116638
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:28:43 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1595410123599
                    },
                    {
                        "readableTime": "Wed, 22 Jul 2020 09:28:45 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1595410125816
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 08:19:25 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1596788365014
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 10:30:04 GMT",
                        "stage": "3074457348141082773",
                        "timestamp": 1596796204449
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 10:30:06 GMT",
                        "stage": "3074457348141082856",
                        "timestamp": 1596796206988
                    },
                    {
                        "stage": "3074457348141082773",
                        "timestamp": 1597403496858,
                        "readableTime": "Fri, 14 Aug 2020 11:11:36 GMT"
                    },
                    {
                        "stage": "3074457348141082856",
                        "timestamp": 1597403925600,
                        "readableTime": "Fri, 14 Aug 2020 11:18:45 GMT"
                    }
                ],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347281388380",
        "x": 768.4940172966844,
        "y": 7403.291962863437,
        "scale": 3.158258147951647,
        "text": "<p>kanban item</p>",
        "plainText": "kanban item",
        "tags": []
    }
]

function testJSONforCsvRenderer() {
    return [{
        "id": "3074457349235411623",
        "type": "STICKER",
        "bounds": {
            "x": 8918.457416330819,
            "y": 11366.402860256698,
            "top": 10677.649706141623,
            "left": 7861.160907820835,
            "bottom": 12055.156014371774,
            "right": 9975.753924840803,
            "width": 2114.593017019969,
            "height": 1377.5063082301513
        },
        "style": {
            "stickerBackgroundColor": "#ff9d48",
            "fontSize": 32,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
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
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 22:06:23 GMT",
                        "stage": "3074457349235412031",
                        "timestamp": 1596837983340
                    }
                ],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347281388380",
        "x": 8918.457416330819,
        "y": 11366.4028602567,
        "scale": 6.041694334342768,
        "text": "<p>Technical debt: Move authorization to appropriate place</p>",
        "plainText": "Technical debt: Move authorization to appropriate place",
        "tags": []
    }, {
        "id": "3074457349235472041",
        "type": "STICKER",
        "bounds": {
            "x": 7807.717882695328,
            "y": 12944.590608848508,
            "top": 12431.003488257564,
            "left": 7019.316601086422,
            "bottom": 13458.177729439452,
            "right": 8596.119164304233,
            "width": 1576.8025632178112,
            "height": 1027.1742411818884
        },
        "style": {
            "stickerBackgroundColor": "#fff9b1",
            "fontSize": 26,
            "fontFamily": 10,
            "textAlign": "c",
            "textAlignVertical": "m",
            "stickerType": 1
        },
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
                    },
                    {
                        "readableTime": "Fri, 07 Aug 2020 10:46:09 GMT",
                        "stage": "3074457349235412031",
                        "timestamp": 1596797169614
                    }
                ],
                "kanbanworkitem": true
            }
        },
        "capabilities": {
            "editable": true
        },
        "clientVisible": true,
        "createdUserId": "3074457347393353854",
        "lastModifiedUserId": "3074457347393353854",
        "x": 7807.717882695328,
        "y": 12944.590608848508,
        "scale": 4.5051501806223175,
        "text": "<p>Display stats for one item only on menu click</p>",
        "plainText": "Display stats for one item only on menu click",
        "tags": []
    }];
}