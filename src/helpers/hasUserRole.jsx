function hasUserRole(roleToValidate, roles) {
  return roles.some(role => role.authority === roleToValidate);
}

export default hasUserRole;