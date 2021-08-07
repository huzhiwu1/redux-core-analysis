/**
 * 判断某个对象是否是一个plain-object
 * @param obj
 * @returns
 */
export function isPlainObject(obj: any) {
	if (typeof obj !== 'object') {
		return false;
	}
	return Object.getPrototypeOf(obj) === Object.prototype;
}

export function createRandomString(length: number) {
	return Math.random().toString(36).substr(2, length).split('').join('.');
}
