export const encode = (json) => window.btoa(JSON.stringify(json))

export const decode = (data) => JSON.parse(window.atob(data))
