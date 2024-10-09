import { Participant } from '../interfaces/Participant';


export class ParticipantManager {
    private participants: Participant[] = [];

    addParticipant(participant: Participant): void {
        this.participants.push(participant);
    }

    removeParticipant(email: string): void {
        this.participants = this.participants.filter(p => p.email !== email);
    }

    getParticipants(): Participant[] {
        return this.participants;
    }

}
