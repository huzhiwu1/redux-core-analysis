export interface Action<T = any> {
	type: T;
}

export interface AnyAction extends Action {
	[key: string]: any;
}

export type Reducer<S = any, A extends Action = AnyAction> = (
	state: S,
	action: A
) => S;

export interface Listener {
	(): void;
}

export interface Unsubscribe {
	(): void;
}
