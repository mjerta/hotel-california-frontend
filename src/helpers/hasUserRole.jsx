function hasUserRole(roleToValidate, roles) {
  console.log("test")
  return roles.some(role => role.authority === roleToValidate);
}

export default hasUserRole;