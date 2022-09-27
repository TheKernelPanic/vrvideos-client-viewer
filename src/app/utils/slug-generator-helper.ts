export class SlugGeneratorHelper {

  public static generate(input: string): string {

    return input
      .toLowerCase()
      .replace('á', 'a')
      .replace('é', 'e')
      .replace('í', 'i')
      .replace('ó', 'o')
      .replace('ú', 'u')
      .replace(' ', '-')
      .replace(/[^a-z0-9\-]/g, '');
  }
}
