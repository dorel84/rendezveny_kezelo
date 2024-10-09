"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
class EventManager {
    constructor() {
        this.events = [];
    }
    // Létrehozás
    createEvent(event) {
        this.events.push(event);
    }
    // Szerkesztés
    editEvent(index, updatedEvent) {
        if (this.events[index]) {
            this.events[index] = updatedEvent;
        }
    }
    // Törlés
    deleteEvent(index) {
        this.events.splice(index, 1);
    }
    // Lekérdezés
    getEvents() {
        return this.events;
    }
    // Rendezvények lekérdezése időpont szerint
    getEventsByDate(date) {
        return this.events.filter(event => event.date.toDateString() === date.toDateString());
    }
    // Rendezvények lekérdezése helyszín szerint
    getEventsByLocation(location) {
        return this.events.filter(event => event.location.toLowerCase() === location.toLowerCase());
    }
}
exports.EventManager = EventManager;
