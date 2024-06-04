$(document).ready(function() {
    $(".form_part").hide();
    $("#course_level").hide();
    $(".volunteering_part").hide();
});

$("#purpose").change(function(){
    $(".form_part").hide();
    $("#" + this.value).show();
});

$("input[name='Student Status']").change(function() {
    $("#course_level").hide();
    if(this.value=="Starting in September"){
        $("#course_level").show();
    }
    if(this.value=="Current Student"){
        $("#course_level").show();
    }
});

$("input[class='section']").change(function() {
    var search = "#preferred_section option[name=" + this.id +"]";
    var section = document.querySelector(search)
    section.toggleAttribute("hidden");
    section.toggleAttribute("disabled");
});

$("input[class='day']").change(function() {
    var search = "#preferred_day option[name=" + this.id +"]";
    var day = document.querySelector(search);
    day.toggleAttribute("hidden");
    day.toggleAttribute("disabled");
});

$("input[class='volunteering_frequency']").change(function() {
    $("#" + this.value).toggle();
});

$('input[class="DBS"]').on('change', function(){
    if ($(this).attr('type') == 'radio' ) {
        if ( $(this).prop('checked') ) {
            $('input[class="DBS"][type="checkbox"]').prop('checked', false);
        }
    }
    else {
        if ( $(this).prop('checked') ) {
            $('input[class="DBS"][type="radio"]').prop('checked', false);
        }
    }
});

$('input[class="movement"]').on('change', function(){
    if ($(this).attr('type') == 'radio' ) {
        if ( $(this).prop('checked') ) {
            $('input[class="movement"][type="checkbox"]').prop('checked', false);
        }
    }
    else {
        if ( $(this).prop('checked') ) {
            $('input[class="movement"][type="radio"]').prop('checked', false);
        }
    }
});