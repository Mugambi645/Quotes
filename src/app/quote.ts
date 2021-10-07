export class Quote {
    showDescription: boolean;
    constructor(public genre: string, public title: string, public description: string, public authorName: string) {
        this.showDescription = false;
    }
}