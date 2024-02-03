(function () {
    loadPeopleFrom();
    loadCollaboratorsFrom();
})();

function loadPeopleFrom() {
    $.getJSON('resources/members.json', function (view) {
        view.SURNAME = function () {
            return this.surname.toUpperCase();
        };
        render('#members-content', 'template/members.mst', view);
    });
}

function loadCollaboratorsFrom() {
    $.getJSON('resources/collaborators.json', function (view) {
        view.SURNAME = function () {
            return this.surname.toUpperCase();
        };
        render("#collaborators-content", 'template/collaborators.mst', view);
    });
}


function render(target, template_file, view) {
    $.get(template_file, function (template) {
        var rendered = Mustache.render(template, view);
        //console.log(view);
        $(target).html(rendered);
    });
}