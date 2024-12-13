{
    interface Post {
        id: number;
        title: string;
        content: string;
        author: string;
        createdAt: Date;
    }

    class Post implements Post {
        constructor(id: number, title: string, content: string, author: string, createdAt: Date){

        }
        get getSummary(): string {
            return `${this.title} ${this.author}`
        }
    }

    interface Comment {
        id: number;
        content: string;
        author: string;
        postId: number;
    }

    class Comment implements Comment {
        constructor(id: number, content: string, author: string, podtId: number){

        }
        get getDetails(){
            return `${this.content} ${this.author}`
        }
    }

    class Board {
        
    }
}