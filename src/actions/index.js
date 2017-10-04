export const selectLibrary = libraryID => {
  return {
    type: 'SELECT_LIBRARY',
    libraryID
  }
}
