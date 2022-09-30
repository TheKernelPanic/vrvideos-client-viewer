export class PaginatorHelper<Entity> {

  private amountPage: number = 35;
  private pages: Entity[][] = [];
  private total: number = 0;

  public setAmountPage(value: number): PaginatorHelper<Entity> {

    this.amountPage = value;
    return this;
  }

  public setCollection(collection: Entity[]): PaginatorHelper<Entity> {

    this.pages = [];
    this.total = collection.length;
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

    return this.total;
  }
}
