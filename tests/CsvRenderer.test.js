const kanbanMetrics = require("../flowmetrics/kanbanMetrics");
// import { TransitionsCsvRenderer } from "../kanbantesting/kanbanMetrics";

describe('CsvRenderer', () => {
    test('empty parameters deliver empty csv', () => {
        headlinesList = [];
        transitionsList = [];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe("")
    })


    test('Single Headline', () => {
        headlinesList = ["First Field"];
        transitionsList = [];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe("\"First Field\"\n")
    })

    test('Multiple Headlines', () => {
        headlinesList = ["First Field", "Second Field"];
        transitionsList = [];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe('"First Field";"Second Field"' + "\n")
    })


    test('Single Line, single Value', () => {
        headlinesList = [];
        transitionsList = [
            ["value"]
        ];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe("\"value\"\n")
    })

    test('Single Line, multiple Values', () => {
        headlinesList = [];
        transitionsList = [
            ["value", "Thomas Meier"]
        ];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe("\"value\";\"Thomas Meier\"\n")
    })

    test('Multiple Line, multiple Values', () => {
        headlinesList = [];
        transitionsList = [
            ["value", "Thomas Meier"],
            ["Noch Was", "Anderes"]
        ];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe("\"value\";\"Thomas Meier\"\n\"Noch Was\";\"Anderes\"\n")
    })

    test('Multiple Line, multiple Values', () => {
        headlinesList = ["First Field", "Second Field"];
        transitionsList = [
            ["value", "Thomas Meier"],
            ["Noch Was", "Anderes"]
        ];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList);

        result = renderer.render();

        expect(result).toBe('"First Field";"Second Field"' + "\n\"value\";\"Thomas Meier\"\n\"Noch Was\";\"Anderes\"\n")
    })

    test('Multiple Line, multiple Values with hinting', () => {
        headlinesList = ["First Field", "Second Field", "Number Field"];
        quoteHintList = [true, true, false]
        transitionsList = [
            ["value", "Thomas Meier", 1],
            ["Noch Was", "Anderes", 2]
        ];
        renderer = new kanbanMetrics.CsvRenderer(headlinesList, transitionsList, quoteHintList);

        result = renderer.render();

        expect(result).toBe('"First Field";"Second Field";"Number Field"' + "\n\"value\";\"Thomas Meier\";1\n\"Noch Was\";\"Anderes\";2\n")
    })


});