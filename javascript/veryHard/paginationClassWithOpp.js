// Your task is to create a class to handle paginated content in a website.
// A pagination is used to divide long lists of content in a series of pages.
// The pagination class will accept 2 parameters:
// 1. items (default: []): An array of contents to paginate.
// 2. pageSize (default: 10): The amount of items to show in each page.
// So for example we could initialize our pagination like this:
// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// const p = new Pagination(alphabetArray, 4);
// And then use the method getVisibleItems to show the contents of the paginated array.
// console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
// You will have to implement various methods to go through the pages such as:
//     prevPage
//     nextPage
//     firstPage
//     lastPage
//     goToPage
// Here's a continuation of the example above using nextPage and lastPage:
// p.nextPage();
// console.log(p.getVisibleItems()); -> ["e", "f", "g", "h"]
// p.lastPage();
// console.log(p.getVisibleItems()); -> ["y", "z"]
class Pagination {
    constructor(items = [], pageSize = 10) {
        this.items = items;
        this.pageSize = pageSize;
        this.totalPages = items.length == 0 ? 1 : Math.ceil(items.length / pageSize);
        this.currentPage = 1;
        this.startList = 0;
        this.endList = pageSize;
    }
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage = this.currentPage - 1;
            this.startList = this.startList - this.pageSize;
            this.endList = this.endList - this.pageSize;
        }
        return this;
    }
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage = this.currentPage + 1;
            this.startList = this.startList + this.pageSize;
            this.endList = this.endList + this.pageSize;
        }
        return this;
    }
    firstPage() {
        this.currentPage = 1;
        this.startList = 0;
        this.endList = this.pageSize;
        return this;
    }
    lastPage() {
        this.currentPage = this.totalPages;
        this.startList = (this.totalPages - 1) * this.pageSize;
        this.endList = this.totalPages * this.pageSize;
        return this;
    }
    goToPage(page) {
        if (page > this.totalPages) {
            this.lastPage();
        } else if (page < 2) {
            this.firstPage();
        } else {
            this.currentPage = page;
            this.startList = page * this.pageSize;
            this.endList = (page + 1) * this.pageSize;
        }
        return this;
    }
    getVisibleItems() {
        return this.items.slice(this.startList, this.endList);
    }
}
