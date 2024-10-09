"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryManager = void 0;
class CategoryManager {
    constructor() {
        this.categories = {};
    }
    // Kategória létrehozása (ha szükséges)
    createCategory(category) {
        if (!this.categories[category]) {
            this.categories[category] = [];
        }
    }
    // Rendezvény hozzáadása adott kategóriához
    addEventToCategory(category, event) {
        // Ellenőrizzük, hogy a kategória létezik-e
        if (!this.categories[category]) {
            this.createCategory(category);
        }
        this.categories[category].push(event);
    }
    // Rendezvények lekérdezése adott kategória alapján
    getEventsByCategory(category) {
        return this.categories[category] || [];
    }
    // Kategóriák törlése (opcionális)
    removeCategory(category) {
        delete this.categories[category];
    }
    // Minden kategória lekérdezése (opcionális)
    getAllCategories() {
        return this.categories;
    }
}
exports.CategoryManager = CategoryManager;
