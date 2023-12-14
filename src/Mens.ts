export default class Mens {
  private haarkleur: string;

  private length: number;

  private aantalBenen: number;

  private naam: string;

  public constructor(haarkleur: string, lengte: number, aantalBenen: number, naam: string) {
    this.haarkleur = haarkleur;
    this.length = lengte;
    this.aantalBenen = aantalBenen;
  }
}
