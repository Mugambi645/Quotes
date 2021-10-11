export class Quote {
    showDescription: boolean;
    constructor(public title: string, public name: string, public quote: string, public userName: string, public likes: number, public dislikes: number, public dateCreated: Date) {
        this.showDescription = false;
    }
}