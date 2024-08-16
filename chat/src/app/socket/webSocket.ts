import { Server , ServerOptions } from 'socket.io';

export class Websocket {
  private static io: Server;
  private static options: Partial<ServerOptions> = {
    path: '/api',
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET','POST'],
    },
    allowEIO3: true,
  };

  private constructor(httpServer: any) {
    // Initialize Socket.io server with options
    Websocket.io = new Server(httpServer, Websocket.options);
  }

  public static getInstance(httpServer?: any): Server {
    if (!Websocket.io) {
      if (!httpServer) {
        throw new Error('HTTP server must be provided for the first initialization.');
      }
      new Websocket(httpServer);
    }
    return Websocket.io;
  }
}