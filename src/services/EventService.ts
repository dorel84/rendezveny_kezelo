import { Event } from '../interfaces/Event';

export class EventService {
    private events: Event[] = [];
    
    async createEventAsync(event: Event): Promise<void> {
    }
    
    async getEventsAsync(): Promise<Event[]> {
        return this.events;
    }
}
