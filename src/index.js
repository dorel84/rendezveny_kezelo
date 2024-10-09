"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = require("./models/EventManager");
const ParticipantManager_1 = require("./models/ParticipantManager");
const eventManager = new EventManager_1.EventManager();
const participantManager = new ParticipantManager_1.ParticipantManager();
// Rendezvény létrehozása
const concert = {
    name: "Koncert",
    location: "Budapest",
    date: new Date("2024-07-10"),
    participants: [],
    category: "Zene"
};
eventManager.createEvent(concert);
// Résztvevők hozzáadása
const participant1 = { name: "Anna", email: "anna@example.com" };
const participant2 = { name: "Béla", email: "bela@example.com" };
participantManager.addParticipant(participant1);
participantManager.addParticipant(participant2);
// Résztvevők hozzáadása a rendezvényhez
concert.participants.push(participant1);
concert.participants.push(participant2);
// Rendezvények lekérdezése helyszín és dátum szerint
const eventsOnDate = eventManager.getEventsByDate(new Date("2024-07-10"));
const eventsInBudapest = eventManager.getEventsByLocation("Budapest");
console.log(eventsOnDate);
console.log(eventsInBudapest);
