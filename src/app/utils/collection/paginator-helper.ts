export class PaginatorHelper<Entity> {

  private readonly maxAroundSummary: number = 7;
  private amountPage: number = 35;
  private pages: Entity[][] = [];
  private totalElements: number = 0;

  public setAmountPage(value: number): PaginatorHelper<Entity> {

    this.amountPage = value;
    return this;
  }

  public setCollection(collection: Entity[]): PaginatorHelper<Entity> {

    this.pages = [];
    this.totalElements = collection.length;
    for (let i = 0; i < collection.length; i += this.amountPage) {
      this.pages.push(collection.slice(i, i + this.amountPage));
    }
    return this;
  }

  public getPages(): number {
    return this.pages.length;
  }

  public getFrom(page: number): Entity[] {

    if (this.pages[page-1] !== undefined) {
      return this.pages[page-1];
    }
    return [];
  }

  public getTotal(): number {

    return this.totalElements;
  }

  public getSummary(currentPage: number): number[] {

    const totalPages: number = this.getPages();

    if (totalPages === 0) {
      return [];
    }
    let pages: number[] = [
      ...(totalPages !== 1 ? [1, totalPages] : [1]),
    ];
    let i: number = 0,
      v: number = 0,
      k: number = 0;
    while (i < this.maxAroundSummary) {
      v =
        i < this.maxAroundSummary / 2
          ? currentPage - i
          : v - Math.floor(v / (this.maxAroundSummary - i));
      k =
        i < this.maxAroundSummary / 2
          ? currentPage + i
          : k + Math.floor((totalPages - k) / (this.maxAroundSummary - i));

      v > 0 && v < totalPages && pages.indexOf(v) === -1 && pages.push(v);
      k > 0 && k < totalPages && pages.indexOf(k) === -1 && pages.push(k);

      i++;
    }
    return pages.sort((a: number, b: number) => (a > b ? 1 : -1));
  }
}
