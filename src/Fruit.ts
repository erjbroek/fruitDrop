export default class Fruit {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  constructor(maxX: number) {}

  public getposX(): number {
    return this.posX;
  }

  public getposY(): number {
    return this.posY;
  }

  public getwidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public update(elapsed: number): void {}

  public render(canvas: HTMLCanvasElement): void {}
}
