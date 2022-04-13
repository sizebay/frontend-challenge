export class Task {
    id: string;
    description: string;
    status: string;

    constructor(description: string) {
        this.id = Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
        this.description = description;
        this.status = 'pending';
    }
}