const kanban = require('../kanbantesting/kanban');

test('array with no entires is not eligable', () => {
    expect(kanban.widgetsEligibleForKanbanMenuEntries([])).toBe(false)
})


test('array with multiple entires is not eligable', () => {
    expect(kanban.widgetsEligibleForKanbanMenuEntries([1, 2, 3])).toBe(false)
})

test('array with single entry with id != 0 eligable', () => {
    expect(kanban.widgetsEligibleForKanbanMenuEntries([{ id: "22" }])).toBe(true)
})

test('array with single entry with id == 0 not eligable', () => {
    expect(kanban.widgetsEligibleForKanbanMenuEntries([{ id: "0" }])).toBe(false)
})