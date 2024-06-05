---
---

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = '{{site.form_url}}'

form["mode"].value = '{{site.form_mode}}'

const errored_fields = []

function validateForm (){      

    var first_name = form["first_name"];
    var email = form["email"];
    var email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var purpose = form["purpose"];
    var regular_volunteering = form["regular"];
    var occasional_volunteering = form["occasional"];
    var volunteering_frequency = form["volunteering_frequency"];
    var warning_message = ["There were some problems with the data you entered:"];

    for (field of errored_fields){
        $(field).removeClass("response_error");
    }

    if (first_name.value == ""){
        warning_message.push("- First Name is missing");
        $(first_name).addClass("response_error");
        errored_fields.push(first_name);
    }

    if (email.value == ""){
        warning_message.push("- Email is missing");
        $(email).addClass("response_error");
        errored_fields.push(email);
    } else if (!(email_pattern.test(email.value))){
        warning_message.push("- Email address not recognized");
        $(email).addClass("response_error");
        errored_fields.push(email);
    }

    if (purpose.value == ""){
        warning_message.push("- No reason for contact");
        $(purpose).addClass("response_error");
        errored_fields.push(purpose);
    } else if (purpose.value == "Volunteering"){
        if (!(regular_volunteering.checked || occasional_volunteering.checked)){
            warning_message.push("- Please select a type of volunteering");
            $(volunteering_frequency).addClass("response_error");
            errored_fields.push(volunteering_frequency);
        }
    }

    if (warning_message.length == 1){
        return false
    } else{
        alert(warning_message.join("\n"));
        return true
    }
}

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()        
    if (validateForm()){
        submitButton.disabled = false
        return
    }
    const requestBody = new FormData(form)
    const TrendBody = requestBody.getAll("TRENDS").join(" ")
    requestBody.set('TRENDS', TrendBody)
    fetch(scriptURL, {method: 'POST', body: requestBody})
        .then(response => {
            alert('Thank you for your response. We will get back to you soon.', response)
            submitButton.disabled = false
        })
        .catch(error => {
            alert('Something went wrong. Please wait a moment before trying again.', error.message)
            submitButton.disabled = false
        })
})