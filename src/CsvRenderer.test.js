const kanbanMetrics = require("../kanbantesting/kanbanMetrics");
// import { TransitionsCsvRenderer } from "../kanbantesting/kanbanMetrics";
test('array with no entires is not eligable', () => {
    renderer = new kanbanMetrics.TransitionsCsvRenderer();
    headlinesList = [];
    transitionsList = [];

    result = renderer.render(headlinesList, transitionsList);

    expect(result).toBe("")
})