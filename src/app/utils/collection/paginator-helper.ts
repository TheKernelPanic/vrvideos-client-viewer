export class PaginatorHelper<Entity> {

  private amountPage: number = 35;

  public setAmountPage(value: number): PaginatorHelper<Entity> {

    this.amountPage = value;
    return this;
  }

  public getPages(collection: Entity[]): Entity[][] {

    const pages = [];

    for (let i = 0; i < collection.length; i += this.amountPage) {
      pages.push(collection.slice(i, i + this.amountPage));
    }
    return pages;
  }
}
