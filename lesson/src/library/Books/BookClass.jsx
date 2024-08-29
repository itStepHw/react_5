class Book {
    constructor(id, title, authorName, publicationYear, publisher, pages, copies, popularity) {
        this._id = id;
        this._title = title;
        this._authorName = authorName;
        this._publicationYear = publicationYear;
        this._publisher = publisher;
        this._pages = pages;
        this._copies = copies;
        this._popularity = popularity;
    }

    // GET
    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get authorName() {
        return this._authorName;
    }

    get publicationYear() {
        return this._publicationYear;
    }

    get publisher() {
        return this._publisher;
    }

    get pages() {
        return this._pages;
    }

    get copies() {
        return this._copies;
    }

    get popularity(){
        return this._popularity;
    }

    // SET
    set id(value) {
        this._id = value;
    }

    set title(value) {
        this._title = value;
    }

    set authorName(value) {
        this._authorName = value;
    }

    set publicationYear(value) {
        this._publicationYear = value;
    }

    set publisher(value) {
        this._publisher = value;
    }

    set pages(value) {
        this._pages = value;
    }

    set copies(value) {
        this._copies = value;
    }

    set popularity(value) {
        this._popularity = value;
    }
}

export default Book