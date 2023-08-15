import { RmqContext } from '../ctx-host';
import { Transport } from '../enums';
import { RmqUrl } from '../external/rmq-url.interface';
import { CustomTransportStrategy, RmqOptions } from '../interfaces';
import { ReadPacket } from '../interfaces/packet.interface';
import { Server } from './server';
export declare class ServerRMQ extends Server implements CustomTransportStrategy {
    protected readonly options: RmqOptions['options'];
    readonly transportId = Transport.RMQ;
    protected server: any;
    protected channel: any;
    protected connectionAttempts: number;
    protected readonly urls: string[] | RmqUrl[];
    protected readonly queue: string;
    protected readonly prefetchCount: number;
    protected readonly noAck: boolean;
    protected readonly queueOptions: any;
    protected readonly isGlobalPrefetchCount: boolean;
    protected readonly noAssert: boolean;
    constructor(options: RmqOptions['options']);
    listen(callback: (err?: unknown, ...optionalParams: unknown[]) => void): Promise<void>;
    close(): void;
    start(callback?: (err?: unknown, ...optionalParams: unknown[]) => void): Promise<void>;
    createClient<T = any>(): T;
    setupChannel(channel: any, callback: Function): Promise<void>;
    handleMessage(message: Record<string, any>, channel: any): Promise<void>;
    handleEvent(pattern: string, packet: ReadPacket, context: RmqContext): Promise<any>;
    sendMessage<T = any>(message: T, replyTo: any, correlationId: string): void;
    protected initializeSerializer(options: RmqOptions['options']): void;
    private parseMessageContent;
}
