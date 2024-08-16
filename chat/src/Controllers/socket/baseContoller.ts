import { Socket } from "socket.io";
 
export abstract class BaseController {
  protected socket: Socket;

  constructor(socket: any) {
    this.socket = socket;
  }
}
