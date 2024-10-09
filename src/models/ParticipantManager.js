"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantManager = void 0;
class ParticipantManager {
    constructor() {
        this.participants = [];
    }
    // Résztvevő hozzáadása
    addParticipant(participant) {
        this.participants.push(participant);
    }
    // Résztvevő eltávolítása
    removeParticipant(email) {
        this.participants = this.participants.filter(p => p.email !== email);
    }
    // Résztvevők lekérdezése
    getParticipants() {
        return this.participants;
    }
}
exports.ParticipantManager = ParticipantManager;
