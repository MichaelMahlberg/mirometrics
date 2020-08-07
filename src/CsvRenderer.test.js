const kanbanMetrics = require("../kanbantesting/kanbanMetrics");
// import { TransitionsCsvRenderer } from "../kanbantesting/kanbanMetrics";

describe('CsvRenderer', () => {
    test('empty parameters deliver empty csv', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = [];
        transitionsList = [];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe("")
    })


    test('Single Headline', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = ["First Field"];
        transitionsList = [];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe("\"First Field\"\n")
    })

    test('Multiple Headlines', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = ["First Field", "Second Field"];
        transitionsList = [];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe('"First Field";"Second Field"' + "\n")
    })


    test('Single Line, single Value', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = [];
        transitionsList = [
            ["value"]
        ];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe("\"value\"\n")
    })

    test('Single Line, multiple Values', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = [];
        transitionsList = [
            ["value", "Thomas Meier"]
        ];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe("\"value\";\"Thomas Meier\"\n")
    })

    test('Multiple Line, multiple Values', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = [];
        transitionsList = [
            ["value", "Thomas Meier"],
            ["Noch Was", "Anderes"]
        ];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe("\"value\";\"Thomas Meier\"\n\"Noch Was\";\"Anderes\"\n")
    })

    test('Multiple Line, multiple Values', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = ["First Field", "Second Field"];
        transitionsList = [
            ["value", "Thomas Meier"],
            ["Noch Was", "Anderes"]
        ];

        result = renderer.render(headlinesList, transitionsList);

        expect(result).toBe('"First Field";"Second Field"' + "\n\"value\";\"Thomas Meier\"\n\"Noch Was\";\"Anderes\"\n")
    })

    test('Multiple Line, multiple Values with hinting', () => {
        renderer = new kanbanMetrics.CsvRenderer();
        headlinesList = ["First Field", "Second Field", "Number Field"];
        quoteHintList = [true, true, false]
        transitionsList = [
            ["value", "Thomas Meier", 1],
            ["Noch Was", "Anderes", 2]
        ];

        result = renderer.render(headlinesList, transitionsList, quoteHintList);

        expect(result).toBe('"First Field";"Second Field";"Number Field"' + "\n\"value\";\"Thomas Meier\";1\n\"Noch Was\";\"Anderes\";2\n")
    })


});