/*************************************************
 * author: Roman Shprenger
 * template: Oko - Creative Coming Soon Template
 * version: v1.0
 * url: http://themeforest.net/user/shprenger
 ************************************************/

///** COUNTDOWN **/

var rs_countdown_date = '2020/07/09 00:00:00'; // 2020-07-09

///** CONTACT **/

var rs_contact_email = 'email@example.com'; // contact email address
var rs_contact_success = '<i class="icons fa fa-check valid"></i> Message has been sent'; // success submit message
var rs_contact_input_error = '<i class="icons fa fa-close error"></i> all fields are required'; // input error message
var rs_contact_email_error = '<i class="icons fa fa-close error"></i> email address is invalid'; // email error message

///** SUBSCRIBE **/

var rs_subscribe = 3; // 1 = php send email, 2 = save to txt file, 3 = mailchimp

///* PHP SEND EMAIL */

var rs_subscribe_email = 'email@example.com'; // subscribe email address
var rs_subscribe_success = '<i class="icons fa fa-check valid"></i> thank you for subscribing'; // subscribe success message
var rs_subscribe_error = '<i class="icons fa fa-close error"></i> email address is invalid'; // subscribe error message

///* MAILCHIMP */

var rs_mailchimp_url = 'mailchimp_post_url'; // mailchimp post url

$.ajaxChimp.translations.eng = { // custom mailchimp message
    'submit': 'please wait',
    0: '<i class="icons fa fa-check"></i> We have sent you a confirmation email',
    1: '<i class="icons fa fa-close"></i> Please enter a value',
    2: '<i class="icons fa fa-close"></i> An email address must contain a single @',
    3: '<i class="icons fa fa-close"></i> e-mail address is not valid',
    4: '<i class="icons fa fa-close"></i> e-mail address is not valid',
    5: '<i class="icons fa fa-close"></i> e-mail address is not valid'
};
