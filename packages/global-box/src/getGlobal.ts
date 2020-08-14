declare global {
  interface Window {
    __SINGLETON_STORE_COUNT__: number | undefined;
  }
  namespace NodeJS {
    interface Global {
      __SINGLETON_STORE_COUNT__: number | undefined;
    }
  }
}

export default function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('Unable to locate global object');
}
