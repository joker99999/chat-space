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
  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message').append(html);      
      $('form')[0].reset();
      $('.main-chat__message').animate({ scrollTop: $('.main-chat__message')[0].scrollHeight});
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  });
});
