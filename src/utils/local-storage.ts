// import { LocalStorageKey } from 'src/constants/local-storage';
// import { isNullish } from './nullish';
// import { isValidJsonString } from './json';

// export function setLocalStorage({
//   value,
//   key,
//   localStoragePeriod,
// }: {
//   value: unknown;
//   key: LocalStorageKey;
//   localStoragePeriod?: number;
// }) {
//   const localStorageValue = {
//     value,
//     expiredAt: !isNullish(localStoragePeriod) ? new Date().getTime() + localStoragePeriod : undefined,
//   };
//   localStorage.setItem(key, JSON.stringify(localStorageValue));
// }

// export function getLocalStorage(key: LocalStorageKey): { value?: unknown; isExpired?: boolean } {
//   const stringifiedLocalStorageValue = localStorage.getItem(key);

//   if (isNullish(stringifiedLocalStorageValue)) {
//     return {};
//   }

//   const isStringfiedLocalStorageValueValidJsonString = isValidJsonString(stringifiedLocalStorageValue);

//   if (!isStringfiedLocalStorageValueValidJsonString) {
//     return {};
//   }

//   const { value, expiredAt } = JSON.parse(stringifiedLocalStorageValue);
//   const hasExpiredAt = !isNullish(expiredAt);
//   const isExpired = hasExpiredAt ? expiredAt < new Date().getTime() : false;
//   return {
//     value,
//     isExpired,
//   };
// }
