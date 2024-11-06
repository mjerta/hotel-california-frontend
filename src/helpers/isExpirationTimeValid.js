function isExpirationTimeValid(expirationEpoch) {
  const currentTime = Math.floor(Date.now() / 1000);
  return expirationEpoch > currentTime;
}
export default isExpirationTimeValid;