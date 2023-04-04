import * as Cookies from 'cookies-next';

const AUTH_COOKIE_KEY = 'auth';
const COOKIE_OPTIONS = { path: '/' };

// @todo Check payload
const DUMMY_VALUE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export function authenticate() {
  Cookies.setCookie(AUTH_COOKIE_KEY, DUMMY_VALUE, COOKIE_OPTIONS);
}

export function unauthenticate() {
  Cookies.removeCookies(AUTH_COOKIE_KEY, COOKIE_OPTIONS);
}

export function isAuthenticated() {
  return Cookies.hasCookie(AUTH_COOKIE_KEY);
}
