const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const teamInitials = [];

  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    if (typeof member === 'string') {
      const initial = member.trim().charAt(0).toUpperCase();
      if (initial) {
        teamInitials.push(initial);
      }
    }
  }
  teamInitials.sort();
  return teamInitials.join('');
}

module.exports = {
  createDreamTeam
};
