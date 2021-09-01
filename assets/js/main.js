/*
 * author: Roman Shprenger
 * template: Oko - Creative Coming Soon Template
 * version: v1.0
 * url: http://themeforest.net/user/shprenger
 */

(function($) {
  "use strict";

  ///** EMAIL VALIDATION **/

  function rsFormValidation(email_address) {
      var pattern = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
      return pattern.test(email_address);
  }


  ///** SUBSCRIBE FORM **/

  function rsSubscribe() {
      if (rs_subscribe == 1 || rs_subscribe == 2) {
          rsSubscribeForm();
      } else if (rs_subscribe == 3) {
          rsMailchimp();
      }
  }

  //* mailchimp */

  function rsMailchimp() {

      var subscribe_form = $('#subscribeForm');
      var subscribe_email = $('#subscribeEmail');

      function rsMailchimpStatus(resp) {

          if (resp.result === 'error') {
              subscribe_email.focus();
              $('.subscribe__notice').addClass('visible');
          }
          else if (resp.result === 'success') {
              subscribe_form[0].reset();
              subscribe_email.blur();
              $('.subscribe__notice').addClass('visible');
          }
      }

      subscribe_form.ajaxChimp({
          callback: rsMailchimpStatus,
          language: 'eng',
          type: 'POST',
          url: rs_mailchimp_url
      });
  }

  //* php */

  function rsSubscribeForm() {

      var subscribe_form = $('#subscribeForm');
      var subscribe_email = $('#subscribeEmail');
      var subscribe_url;
      if (rs_subscribe == 1) {
          subscribe_url = 'assets/php/to-mail.php';
      } else if (rs_subscribe == 2) {
          subscribe_url = 'assets/php/to-file.php';
      }

      subscribe_email.prop('type', 'text');

      subscribe_form.on('submit', function (e) {

          var subscribe_email_val = subscribe_email.val();
          var subscribe_notice = $('.subscribe__notice');
          var subscribe_button = subscribe_form.find('button[type="submit"]');

          e.preventDefault();

          subscribe_button.prop('disabled', true);

          if (!rsFormValidation(subscribe_email_val)) {
              subscribe_notice.stop(true).hide().addClass('visible').html(rs_subscribe_error).fadeIn();
              subscribe_button.prop('disabled', false);
              subscribe_email.focus();
          }
          else {
              $.ajax({
                  type: 'POST',
                  url: subscribe_url,
                  data: {
                      email: subscribe_email_val,
                      emailAddress: rs_subscribe_email
                  },
                  success: function () {
                      subscribe_notice.stop(true).hide().addClass('visible').html(rs_subscribe_success).fadeIn();

                      subscribe_button.prop('disabled', false);
                      subscribe_form[0].reset();
                      subscribe_email.blur();

                  }
              });
          }
          return false;

      });

  }


  ///** CONTACT FORM **/

  function rsContactForm() {

      var contact_form = $('#contactForm');

      contact_form.on('submit', function (e) {

          var input = $(this).find('input, textarea');
          var required_fields = $(this).find('.required');
          var email_field = $('.contact__email');
          var contact_name_val = $('.contact__name').val();
          var contact_subject_val = $('.contact__subject').val();
          var contact_email_val = email_field.val();
          var contact_message_val = $('.contact__message').val();
          var contact_notice = $('.contact__notice');

          e.preventDefault();

          if (contact_name_val == '' || contact_email_val == '' || contact_message_val == '' || contact_subject_val == '') {
              contact_notice.stop(true).hide().html(rs_contact_input_error).fadeIn();
              required_fields.each(function () {
                  $(this).addClass("form__field--error");
              });

          } else if (!rsFormValidation(contact_email_val)) {
              contact_notice.stop(true).hide().html(rs_contact_email_error).fadeIn();
              email_field.addClass("form__field--error");
              $('#contactEmail').focus();
          }
          else {
              $.ajax({
                  type: 'POST',
                  url: 'assets/php/contact.php',
                  data: {
                      name: contact_name_val,
                      email: contact_email_val,
                      message: contact_message_val,
                      subject: contact_subject_val,
                      emailAddress: rs_contact_email
                  },
                  success: function () {
                      contact_notice.stop(true).hide().html(rs_contact_success).fadeIn();
                      contact_form[0].reset();
                      input.blur();
                  }
              });
          }
          return false;

      });

  }


  rsSubscribe();
  rsContactForm();
})(jQuery);
