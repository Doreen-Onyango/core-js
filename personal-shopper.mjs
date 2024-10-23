import fs from 'fs/promises';
import path from 'path';

const commands = {
  create: 'takes a filename as argument and create it (should have `.json` extension specified)',
  delete: 'takes a filename as argument and delete it',
  add: 'adds a new element to the list in the file or increments its quantity',
  rm: 'removes an element from the list in the file or decrements its quantity',
  ls: 'prints the list in the console',
  help: 'prints all the command lines available, with a description of it'
};