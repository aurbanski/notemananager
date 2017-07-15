import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Notes } from '../lib/collections'

import './main.html';

Template.body.helpers({
  notes() {
    return Notes.find({});
  }
});
