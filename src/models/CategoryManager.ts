import { Event } from '../interfaces/Event';

export class CategoryManager {
    private categories: { [key: string]: Event[] } = {};

    createCategory(category: string): void {
        if (!this.categories[category]) {
            this.categories[category] = [];
        }
    }

    addEventToCategory(category: string, event: Event): void {
        if (!this.categories[category]) {
            this.createCategory(category);
        }
        this.categories[category].push(event);
    }

    getEventsByCategory(category: string): Event[] {
        return this.categories[category] || [];
    }

    removeCategory(category: string): void {
        delete this.categories[category];
    }

    getAllCategories(): { [key: string]: Event[] } {
        return this.categories;
    }
}
