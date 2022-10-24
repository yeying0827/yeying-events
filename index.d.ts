type Type = string | number;
type Listener = (...arg: any[]) => void;

export class EventEmitter {
    static defaultMaxListeners: number;
    static listenerCount(emitter: EventEmitter, type: Type): number;

    addListener(type: Type, listener: Listener): this;
    emit(type: Type, ...args: any[]): boolean;
    eventNames(): Array<Type>;
    getMaxListeners(): number;
    listenerCount(type: Type): number;
    listeners(type: Type): Array<Listener>;
    off(type: Type, listener: Listener): this;
    on(type: Type, listener: Listener): this;
    once(type: Type, listener: Listener): this;
    prependListener(type: Type, listener: Listener): this;
    prependOnceListener(type: Type, listener: Listener): this;
    removeAllListeners(type?: Type): this;
    removeListener(type: Type, listener: Listener): this;
    setMaxListeners(n: number): this;
    rawListeners(type:  Type): Array<Listener>;
}
