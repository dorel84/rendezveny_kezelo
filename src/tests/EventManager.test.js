"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = require("../models/EventManager");
describe('EventManager tests', () => {
    let eventManager;
    beforeEach(() => {
        eventManager = new EventManager_1.EventManager();
    });
    test('should create and retrieve events', () => {
        const event = {
            name: "Fesztivál",
            location: "Budapest",
            date: new Date(),
            participants: [],
            category: "Zene"
        };
        eventManager.createEvent(event);
        expect(eventManager.getEvents().length).toBe(1);
    });
});
