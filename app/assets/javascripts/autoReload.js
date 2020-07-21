$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message__list" data-message-id=${message.id}>
        <div class="main-chat__message__list__box">
            <div class="main-chat__message__list__box__name">
              ${message.user_name}
            </div>
            <div class="main-chat__message__list__box__day">
              ${message.created_at}
            </div>
           </div>

            <p class="main-chat__message__list__messages">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">

        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message__list" data-message-id=${message.id}>
      <div class="main-chat__message__list__box">
          <div class="main-chat__message__list__box__name">
            ${message.user_name}
          </div>
          <div class="main-chat__message__list__box__day">
            ${message.created_at}
          </div>
        </div>

          <p class="main-chat__message__list__messages">
            ${message.content}
          </p>

      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.main-chat__message__list:last').data("message-id") || 0;
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main-chat__message').append(insertHTML);
        $('.main-chat__message').animate({ scrollTop: $('.main-chat__message')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});