import CanvasRenderer from "./CanvasRenderer";

export default class Player {
  private image: HTMLImageElement;

  private speed: number;

  private posX: number;

  private posY: number;

  private movingLeft: boolean;

  private movingRight: boolean;

  public constructor(maxX: number, maxY: number) {
    this.image = CanvasRenderer.loadNewImage('./assets/basket.png')
  }

  public MoveLeft(): void {

  }

  public MoveRight(): void {

  }

  public IsCollidingFruit(){

  }

  public getposX(): number {
    return this.posX;
  }

  public getposY(): number {
    return this.posY;
  }

  public getwidth(): number {
    return this.image.width
  }

  public getHeight(): number {
    return this.image.height
  }

  public update(elapsed: number): void {

  }

  public render(canvas: HTMLCanvasElement): void{
    CanvasRenderer.drawImage
  }
}
