function testTextReturned() {
  let note = new Note();
  assert.toEqual(note.text === 'My favourite language is JS');
};
testTextReturned();