import { Event } from '../interfaces/Event';


export class EventManager {
    private events: Event[] = [];

    createEvent(event: Event): void {
        this.events.push(event);
    }

    editEvent(index: number, updatedEvent: Event): void {
        if (this.events[index]) {
            this.events[index] = updatedEvent;
        }
    }

    deleteEvent(index: number): void {
        this.events.splice(index, 1);
    }

    getEvents(): Event[] {
        return this.events;
    }

    getEventsByDate(date: Date): Event[] {
        return this.events.filter(event => event.date.toDateString() === date.toDateString());
    }

    getEventsByLocation(location: string): Event[] {
        return this.events.filter(event => event.location.toLowerCase() === location.toLowerCase());
    }
}
