(function () {
    loadPeopleFrom();
    loadProjectsFrom();
    loadAlumniFrom();
    loadInternships();
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

function loadProjectsFrom() {
    $.getJSON('resources/projects.json', function (view) {
        render('#projects-content', 'template/projects.mst', view);
    });
}

function loadAlumniFrom() {
    $.getJSON('resources/alumni.json', function (view) {
        render("#alumni-content", 'template/alumni.mst', view);
    });
}

function loadInternships() {
    $.getJSON('resources/internships.json', function (view) {
        render("#internships-content", 'template/internships.mst', view);
    });
}

function loadCollaboratorsFrom() {
    $.getJSON('resources/collaborators.json', function (view) {
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