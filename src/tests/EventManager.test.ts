import { EventManager } from '../models/EventManager';
import { Event } from '../interfaces/Event';

describe('EventManager tests', () => {
    let eventManager: EventManager;

    beforeEach(() => {
        eventManager = new EventManager();
    });

    test('should create and retrieve events', () => {
        const event: Event = {
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
