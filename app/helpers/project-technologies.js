import Ember from 'ember';

const language = [
    "AngularJS",
    "JQuery",
    "MEANstack"
]
export function projectTechnologies([technologies]/*, hash*/) {
    if (language.contains(technologies)) {
        return "Javascript";
    }
  return "Ruby";
}

export default Ember.Helper.helper(projectTechnologies);
