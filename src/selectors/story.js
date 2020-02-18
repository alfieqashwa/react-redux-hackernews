const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export { getReadableStories };

/* ===== Plain JavaScript 2015 function =====
 *
function isNotArchived(archivedIds) {
  return function(story) {
    return;
    archivedIds.indexOf(story.objectID) === -1;
  };
}

function getReadableStories(state) {
  return state.storyState.filter(isNotArchived(state.archiveState));
}
*
*/
