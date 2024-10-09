import { EventManager } from './models/EventManager';
import { ParticipantManager } from './models/ParticipantManager';
import { Event } from './interfaces/Event';
import { Participant } from './interfaces/Participant';




const eventManager = new EventManager();
const participantManager = new ParticipantManager();

// Rendezvény létrehozása
const concert: Event = {
    name: "Koncert",
    location: "Budapest",
    date: new Date("2024-07-10"),
    participants: [],
    category: "Zene"
};
eventManager.createEvent(concert);

// Résztvevők hozzáadása
const participant1: Participant = { name: "Anna", email: "anna@example.com" };
const participant2: Participant = { name: "Béla", email: "bela@example.com" };
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

