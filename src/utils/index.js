export function Try(fn, val = null) {
    try {
      fn()
    } catch {
      return val
    }
  }
  