import { AnyAction, Listener, Reducer, Unsubscribe } from './typing';
import { createRandomString, isPlainObject } from './utils';
/**
 *
 * @param reducer reducer
 * @param defaultState 默认的状态
 * @returns
 */
export default function createStore<T>(reducer: Reducer<T>, defaultState?: T) {
	let currentReducer = reducer;
	let currentState = defaultState;
	let listeners: Listener[] = [];

	function dispatch(action: AnyAction) {
		// 验证action是一个plain-object
		if (!isPlainObject(action)) {
			throw new Error('action is must a plain object');
		}
		// 验证action的type属性是否存在
		if (Object.hasOwnProperty.call(action, 'type')) {
		}

		currentState = currentReducer(currentState as T, action);

		for (const listener of listeners) {
			listener();
		}
	}
	function getState() {
		return currentState;
	}

	/**
	 * 添加一个监听器
	 */
	function subscribe(listener: Listener): Unsubscribe {
		listeners.push(listener);
		return function () {
			let index = listeners.indexOf(listener);
			if (index !== -1) {
				listeners.splice(index, 1);
			}
		};
	}

	// 创建仓库时，需要分发一次初始的action
	// 不然在分发action前，无法获取state
	dispatch({
		type: `@@redux/INIT${createRandomString(7)}`,
	});

	return {
		dispatch,
		getState,
		subscribe,
	};
}
