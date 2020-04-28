export const AUTHED_USER = "AUTHED_USER"
export const LOG_USER_OUT = "LOG_USER_OUT"

export function setAuthedUser(id) {
  return {
    type: AUTHED_USER,
    id
  }
}

export function logOutUser() {
  return {
    type: LOG_USER_OUT
  }
}