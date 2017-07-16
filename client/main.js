import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Notes } from '../lib/collections';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

Template.body.helpers({
  notes() {
    return Notes.find({});
  }
});

Template.add.events({
  'submit .add-form': function() {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Meteor.call('notes.insert', text)

    target.text.value = '';

    $('#addModal').modal('close');

    return false;
  }
});

Template.note.events({
  'click .delete-note': function() {
    Meteor.call('notes.remove', this)
    return false;
  }
});
