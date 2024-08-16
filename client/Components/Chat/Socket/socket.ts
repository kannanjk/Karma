import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io('http://localhost:3006', {
      path: '/api',
      transports: ['websocket'],
    });
  }
  return socket;
}; 