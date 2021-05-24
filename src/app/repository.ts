export class Repository {
    constructor(
        public pname: string,
        public description: string,
        public updated_at: Date,
        public clone_url: string,
        public language: string
    ){}
}
